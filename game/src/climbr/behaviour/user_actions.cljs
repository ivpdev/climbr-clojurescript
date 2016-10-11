(ns ^:figwheel-always climbr.behaviour.user_actions
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [climbr.matter.matter :as m]
            [climbr.figures.climber :as c]
            [climbr.app_state :as a]
            [climbr.controls.keyboard :as k]
            [climbr.utils.utils :as u :refer [def- when-let* in?]]
            [cljs.core.async :refer [tap chan <!]]))

(defn setup-climber-moves! []
  (bind-keys! {:up  #(cond
                      (and (on-the-ground?)
                        (holds-nothing?))  (lunge! :both-hands :to :top)

                      (holds-both?)           (lunge! :body :to :top)
                      (holds-one?)            (lunge! :free-hand :to :top)
                      :else nil)

              :left #(cond
                       (and (on-the-ground?)
                         (holds-nothing?))  (lunge! :left-hand :to :left)

                       (holds-one?)            (lunge! :free-hand :to :left)
                       (holds-both?)           (lunge! :body :to :left)
                       :else (lunge! :left-hand :to [:top-TODO :left] :with {:power 0.2 }))

              :right #(cond
                        (and (on-the-ground?)
                          (holds-nothing?)) (lunge! :right-hand :to :right)

                        (holds-one?)           (lunge! :free-hand :to :right)
                        (holds-both?)          (lunge! :body :to :right)
                        :else (lunge! :right-hand :to [:top-TODO :right] :with {:power 0.2 })) }))

(defn setup-climber-grab-events![engine]
  (let [keypressed (chan)
        grab-hand! (fn [hand]
                     (let [hand-name (m/read-data "name" hand)
                           hand-key (case hand-name "h1" :h1
                                      "h2" :h2 nil)
                           can-grab-boulders (seq (get-in @a/app-state [:can-grab hand-key]))
                           boulder-to-grab (nth can-grab-boulders 0)
                           have-something-to-grab? (not (nil? boulder-to-grab))
                           holds-boulder (get-boulder-for-hand hand-name)
                           already-holds? (not (nil? holds-boulder))
                           engine (:engine @a/app-state)]

                       (if (and have-something-to-grab? (not already-holds?))
                         (connect-hand-and-boulder hand boulder-to-grab engine))))]

    (tap k/keypressed keypressed)
    (go (while true
          (let [key (<! keypressed)

                hand-key (case key
                           :grab-left :left
                           :grab-right :right
                           :grab-both :both
                           nil)]

            (when hand-key ;TODO when-let
              (let [hands (fetch-hands hand-key)]
                (doall (map grab-hand! hands))))))))) ;TODO for-each

(defn setup-climber-release-events! [engine]
  (let [keypressed (chan)
        release-hand! (fn [hand]
                        (let [hand-name (m/read-data "name" hand)
                              boulder (get-boulder-for-hand hand-name)]

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

(defn- on-the-ground? []
  (let [body (fetch-climber-part :body)
        y (m/y body)]
    (> y 550)))

(defn- holds-nothing? [] (not (or (h1-holds?) (h2-holds?))))
(defn- holds-one? [] (and (not (holds-both?)) (not (holds-nothing?))))
(defn- holds-both? [] (and (h1-holds?) (h2-holds?)))
(defn- h1-holds? [] (not (nil? (get @a/app-state :h1-holds))))
(defn- h2-holds? [] (not (nil? (get @a/app-state :h2-holds))))

(defn- holds-hand? [hand]
  (let [boulder (get-boulder-for-hand hand)]
    (not (nil? boulder))))

(defn- lunge! [what _ where _ opts]
  (println "Lunge " what " to " where)
  (let [forces-config { :hand { :horizonal 0.003
                                :vertical 0.005 }

                        :body { :vertical 0.004
                                :horizonal 0.004 }}

        objects (case what
                  :left-hand (fetch-hands :left)
                  :right-hand (fetch-hands :right)
                  :both-hands (fetch-hands :both)
                  :free-hand (fetch-hands :free)
                  :body [(fetch-climber-part :body)])

        force-obj (case what
                    :left-hand (get forces-config :hand)
                    :right-hand (get forces-config :hand)
                    :both-hands (get forces-config :hand)
                    :free-hand (get forces-config :hand)
                    :body (get forces-config :body))

        factor (or (:power opts) 1)

        vertical-force-component-raw (* (:vertical force-obj) factor)
        horizontal-force-component-raw (* (:horizonal force-obj) factor)

        targets (cond (vector? where) where
                      :else [where])

        vertical-force-component (if (in? targets :top) (- vertical-force-component-raw) 0)
        horizontal-force-component (cond (and (in? targets :right)
                                              (in? targets :left)) 0
                                          (in? targets :left) (- horizontal-force-component-raw)
                                          (in? targets :right)  horizontal-force-component-raw
                                          :else 0)

        force {:x horizontal-force-component :y vertical-force-component }]

    (doseq [o objects] (m/apply-force o force))))

(defn- bind-keys! [key-actions]
  (let [keypressed (chan)]
    (tap k/keypressed keypressed)
    (go (while true
          (let [key (<! keypressed)
                action (get key-actions key)]

            (when-not (nil? action) (action)))))))

(defn- get-boulder-for-hand [hand-name]
  (let [boulder-key (case hand-name
                      "h1" :h1-holds
                      "h2" :h2-holds
                      nil)]
    (get @a/app-state boulder-key)))

(defn- remove-boulder-for-hand! [hand-name]
  (let [key-boulder (case hand-name
                      "h1" :h1-holds
                      "h2" :h2-holds)]

    (swap! a/app-state dissoc key-boulder)))

(defn- connect-hand-and-boulder[hand boulder engine]
  (let [hand-name (m/read-data "name" hand)
        constraint (.create m/constraint #js { :bodyA hand :bodyB boulder })
        key-holds (case hand-name "h1" :h1-holds
                                  "h2" :h2-holds
                                  nil)]
    (do
      (.addConstraint m/world (.-world engine) constraint)
      (swap! a/app-state assoc key-holds constraint))))

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
      :free  [(fetch-free-hand)]
      :both  [left-hand right-hand])))

(defn- fetch-climber-part [part] (get-in @a/app-state [:climber part]))

(defn- fetch-free-hand []
  (let [h1-holds (get @a/app-state :h1-holds)
        h2-holds (get @a/app-state :h2-holds)
        both-hold (and (not (nil? h1-holds)) (not (nil? h2-holds)))]

    (cond both-hold nil
      (not (nil? h1-holds)) (fetch-climber-part :h2)
      (not (nil? h2-holds)) (fetch-climber-part :h1)
      :else nil)))
