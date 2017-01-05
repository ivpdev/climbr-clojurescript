(ns ^:figwheel-always climbr.behaviour.user_actions
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [climbr.utils.macros :refer [compute for-each lets]])
  (:require [climbr.matter.matter :as m]
            [climbr.figures.climber :as c]
            [climbr.figures.figures :as figures]
            [climbr.app_state :as a]
            [climbr.controls.keyboard :as k]
            [climbr.utils.utils :as u :refer [in? not-nil?]]
            [cljs.core.async :refer [tap chan <!]]
            [clojure.data :refer [diff]]))

;TODO is-standing sometimes not work
;TODO hands should not beat each other when jumping up

(defn- fetch-climber-part [part] (get-in @a/app-state [:climber part]))

(defn- fetch-holding-hands[]
  (let [h1 (:h1 c/climber)
        h2 (:h2 c/climber)
        hands [h1 h2]
        standables (figures/get-all-standables)
        hand-standable-combinations (u/cartesian-prod hands standables)
        hand-above? (fn [pair]
                      (let [hand (nth pair 0)
                            standable (nth pair 1)]
                        (m/is-above? hand standable {:margin 10})))]

    (->> hand-standable-combinations
      (filter hand-above?)
      (map #(nth % 0)))))

(defn- fetch-hold#free-hand[]
  (let [holding-hands (fetch-holding-hands)
        h1 (:h1 c/climber)
        h2 (:h2 c/climber)
        hands [h1 h2]
        is-holding-hand? (fn[hand] (some #(m/same-body? % hand) holding-hands))]

    (filter
      (fn [hand]
        (not (is-holding-hand? hand)))
      hands)))

(defn- fetch-hook#free-hand []
  (let [h1-hooked (get @a/app-state :h1-hooked)
        h2-hooked (get @a/app-state :h2-hooked)
        both-hooked (and (not-nil? h1-hooked) (not-nil? h2-hooked))]

    (cond both-hooked nil
      (not (nil? h1-hooked)) (fetch-climber-part :h2)
      (not (nil? h2-hooked)) (fetch-climber-part :h1)
      :else nil)))

(defn fetch-hands [hand]
  (let [h1 (fetch-climber-part :h1)
        h2 (fetch-climber-part :h2)
        h1x (.-x (.-position h1))
        h2x (.-x (.-position h2))
        h1-is-left? (< h1x h2x)

        left-hand (if h1-is-left? h1 h2)
        right-hand (if h1-is-left? h2 h1)]

    (case hand
      :left  [left-hand]
      :right [right-hand]
      :hook#free  [(fetch-hook#free-hand)]
      :hold#free (fetch-hold#free-hand)
      :holding (fetch-holding-hands)
      :both  [left-hand right-hand])))

(defn- on-the-ground? []
  (let [body (fetch-climber-part :body)
        y (m/y body)]
    (> y 550)))

(defn- is-standing?[]
  (let [climber-body (:body c/climber)
        standables (figures/get-all-standables)
        climber-above? #(m/is-above? climber-body % {:margin 10})]

    (some climber-above? standables)))

(defn- hand-above-body?[]
  (let [hands (fetch-hands :both)
        body (fetch-climber-part :body)
        above-body? #(> (m/y body) (m/y %))]

    (some above-body? hands)))

(defn- h1-hooked? [] (not (nil? (get @a/app-state :h1-hooked))))
(defn- h2-hooked? [] (not (nil? (get @a/app-state :h2-hooked))))
(defn- hooked-both? [] (and (h1-hooked?) (h2-hooked?)))
(defn- hooked-nothing? [] (not (or (h1-hooked?) (h2-hooked?))))
(defn- hooked-one? [] (and (not (hooked-both?)) (not (hooked-nothing?))))

(defn- holds-one?[]
  (> (count (fetch-holding-hands)) 0))

(defn- lunge! [what _ where & [_ opts]]
  (println "Lunge " what " to " where)
  (let [forces-config { :hand { :horizonal 0.003
                                :vertical 0.005 }

                        :body { :vertical 0.004
                                :horizonal 0.004 }}

        bodies (case what
                  :left-hand (fetch-hands :left)
                  :right-hand (fetch-hands :right)
                  :both-hands (fetch-hands :both)
                  :hook#free-hand (fetch-hands :hook#free)
                  :hold#free-hand (fetch-hands :hold#free)
                  :holding-hands (fetch-hands :holding)
                  :body [(fetch-climber-part :body)])

        force-obj (case what
                    :left-hand (get forces-config :hand)
                    :right-hand (get forces-config :hand)
                    :both-hands (get forces-config :hand)
                    :hold#free-hand (get forces-config :hand)
                    :holding-hands (get forces-config :hand)
                    :hook#free-hand (get forces-config :hand)
                    :body (get forces-config :body))

        factor (or (:power opts) 1)

        vertical-force-component-raw (* (:vertical force-obj) factor)
        horizontal-force-component-raw (* (:horizonal force-obj) factor)

        directions (cond (vector? where) where
                      :else [where])

        vertical-force-component (if (in? directions :top) (- vertical-force-component-raw) 0)
        horizontal-force-component (cond (and (in? directions :right)
                                              (in? directions :left)) 0
                                          (in? directions :left) (- horizontal-force-component-raw)
                                          (in? directions :right)  horizontal-force-component-raw
                                          :else 0)

        force {:x horizontal-force-component :y vertical-force-component }]

    (doseq [b bodies] (m/apply-force b force))))

(defn- bind-keys! [external-keypressed-chan key-actions]
  (let [keypressed-chan (chan)]
    (tap external-keypressed-chan keypressed-chan)
    (go (while true ;TODO endless macro
          (let [key (<! keypressed-chan)
                action (get key-actions key)]

            (when-not (nil? action) (action)))))))

(defn- get-hooked-boulder-for-hand [hand-name]
  (let [boulder-key (case hand-name
                      "h1" :h1-hooked
                      "h2" :h2-hooked
                      nil)]
    (get @a/app-state boulder-key)))

(defn- remove-boulder-for-hand! [hand-name]
  (let [key-boulder (case hand-name
                      "h1" :h1-hooked
                      "h2" :h2-hooked)]

    (swap! a/app-state dissoc key-boulder)))

(defn- connect-hand-and-boulder[hand boulder engine]
  (let [hand-name (m/read-data "name" hand)
        constraint (.create m/constraint #js { :bodyA hand :bodyB boulder })
        key-hooked (case hand-name "h1" :h1-hooked
                                   "h2" :h2-hooked
                                   nil)]
    (do
      (.addConstraint m/world (.-world engine) constraint)
      (swap! a/app-state assoc key-hooked constraint))))


(defn setup-climber-release-events! [engine]
  (let [keypressed (chan)
        release-hand! (fn [hand]
                        (let [hand-name (m/read-data "name" hand)
                              boulder (get-hooked-boulder-for-hand hand-name)]

                          (if-not (nil? boulder)
                            (do
                              (.remove m/world (.-world engine) boulder)
                              (remove-boulder-for-hand! hand-name)))))]

    (tap k/keypressed keypressed)
    (go (while true
          (let [key (<! keypressed)

                hand-key (case key
                           :release-left :left
                           :release-right :right
                           :release-both :both
                           nil)]

            (when hand-key
              (let [hands (fetch-hands hand-key)]
                (doall (map release-hand! hands)))))))))

(defn setup-climber-hook-events![engine]
  (compute
    (do
      (tap k/keypressed keypressed)
      (go (while true
            ;            TODO make lets macros working
            ;            (lets [key (<! keypressed)
            ;                   hand-key (case key
            ;                                :hook-left :left
            ;                                :hook-right :right
            ;                                :hook-both :both
            ;                                nil)
            ;                   hands (fetch-hands hand-key)]
            ;
            ;                (for-each hands hook-hand!));

            (let [key (<! keypressed)
                  hand-key (case key
                             :hook-left :left
                             :hook-right :right
                             :hook-both :both
                             nil)
                  hands (if (nil? hand-key) nil (fetch-hands hand-key))]
              (for-each hands hook-hand!)))))

    :where [keypressed (chan)
            hook-hand! (fn [hand]
                         (let [hand-name (m/read-data "name" hand)
                               hand-key (case hand-name "h1" :h1
                                          "h2" :h2 nil)
                               can-hook-boulders (seq (get-in @a/app-state [:can-hook hand-key]))
                               boulder-to-hook (nth can-hook-boulders 0)
                               have-something-to-hook? (not (nil? boulder-to-hook))
                               hooked-boulder (get-hooked-boulder-for-hand hand-name)
                               already-hooked? (not (nil? hooked-boulder))
                               engine (:engine @a/app-state)]

                           (if (and have-something-to-hook? (not already-hooked?))
                             (connect-hand-and-boulder hand boulder-to-hook engine))))]))

(defn setup-climber-moves! []
  (bind-keys! k/keypressed
    {:up  #(cond
             (and (on-the-ground?)
               (hooked-nothing?))  (lunge! :both-hands :to :top)

             (hooked-both?)           (lunge! :body :to :top)
             (hooked-one?)            (lunge! :hook#free-hand :to :top)

             (and (holds-one?)
               (hand-above-body?))(lunge! :holding-hands :to :top)

             :else nil)

     :left #(cond
              (and (on-the-ground?)
                (hooked-nothing?))  (lunge! :left-hand :to :left)

              (hooked-one?)            (lunge! :hook#free-hand :to :left)
              (hooked-both?)           (lunge! :body :to :left)
              (and (holds-one?)
                (hand-above-body?))(lunge! :hold#free-hand :to :left)
              :else (lunge! :left-hand :to [:top-TODO :left] :with {:power 0.2 }))

     :right #(cond
               (and (on-the-ground?)
                 (hooked-nothing?)) (lunge! :right-hand :to :right)

               (hooked-one?)           (lunge! :hook#free-hand :to :right)
               (hooked-both?)          (lunge! :body :to :right)
               (and (holds-one?)
                 (hand-above-body?))(lunge! :hold#free-hand :to :right)
               :else (lunge! :right-hand :to [:top-TODO :right] :with {:power 0.2 })) }))

