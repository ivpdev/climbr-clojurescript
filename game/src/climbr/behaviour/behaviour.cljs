(ns ^:figwheel-always climbr.behaviour.behaviour
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [climbr.matter.matter :as m]
            [climbr.app_state :as a]
            [climbr.controls.keyboard :as k]
            [climbr.utils.utils :as u]
            [cljs.core.async :refer [tap chan <!]]))

(defn init-climber-moves! []
  (bind-keys {:up  #(cond
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
                                                                              :else nil)

              :right #(cond
                        (and (on-the-ground?)
                             (holds-nothing?)) (lunge! :right-hand :to :right)

                        (holds-one?)           (lunge! :free-hand :to :right)
                        (holds-both?)          (lunge! :body :to :right)
                                                                              :else nil)}))

(defn- lunge! [what _ where]
  (println "Lunge " what " to " where)
  (let [forces-config {
                        :hand { :horizonal 0.01
                                :vertical 0.03 }

                        :body { :vertical 0.04
                                :horizonal 0.04 }}

        objects (case what
                  :left-hand [(fetch-hand :left)]
                  :right-hand [(fetch-hand :right)]
                  :both-hands [(fetch-hand :left) (fetch-hand :right)]
                  :free-hand [(fetch-hand :free)]
                  :body [(fetch-climber-part :body)])

        force-obj (case what
                    :left-hand (get forces-config :hand)
                    :right-hand (get forces-config :hand)
                    :both-hands (get forces-config :hand)
                    :free-hand (get forces-config :hand)
                    :body (get forces-config :body))

        force (case where
                :top { :x 0 :y (- (:vertical force-obj))  }
                :left { :x (- (:horizonal force-obj)) :y 0 }
                :right { :x (:horizonal force-obj) :y 0 } )]

    (doseq [o objects] (m/apply-force o force))))

(defn init-boulder-touch-events! [engine]
  (.on m/events
    engine
    "collisionStart"
    (fn[e]
      (let [pairs (.-pairs e)
            pair (if (.-length pairs) (aget pairs 0) nil)
            body-a (if pair (.-bodyA pair) nil)
            body-b (if pair (.-bodyB pair) nil)
            class-a (m/read-data "class" body-a)
            class-b (m/read-data "class" body-b)
            touched-a? (and (= "boulder" class-a) (= "hand" class-b))
            touched-b? (and (= "boulder" class-b) (= "hand" class-a))
            hand (cond touched-a? body-b
                       touched-b? body-a
                       :else nil)
            touched-boulder (cond touched-a? body-a
                             touched-b? body-b
                             :else nil)

            touched-boulder? (not= touched-boulder nil)
            hand-name (if touched-boulder? (m/read-data "name" hand) nil)
            key-boulder (case hand-name "h1" :h1-holds
                                        "h2" :h2-holds
                                         nil)
            existing-boulder (get @a/app-state key-boulder)]

        (when (and touched-boulder? (nil? existing-boulder))
          (let [boulder (.create m/constraint #js { :bodyA hand :bodyB touched-boulder })]
            (do
              (.addConstraint m/world (.-world engine) boulder)
              (swap! a/app-state assoc key-boulder boulder))))))))

(defn- fetch-climber-part [part] (get-in @a/app-state [:climber part]))

(defn- fetch-hand [hand]
             (let [h1 (fetch-climber-part :h1)
                   h2 (fetch-climber-part :h2)
                   h1x (.-x (.-position h1))
                   h2x (.-x (.-position h2))
                   h1-is-left? (< h1x h2x)

                   left-hand (if h1-is-left? h1 h2)
                   right-hand (if h1-is-left? h2 h1)]

               (case hand
                   :left left-hand
                   :right right-hand
                   :free (fetch-free-hand))))

(defn- fetch-free-hand []
  (let [h1-holds (get @a/app-state :h1-holds)
        h2-holds (get @a/app-state :h2-holds)
        both-hold (and (not (nil? h1-holds)) (not (nil? h2-holds)))]

    (cond both-hold nil
      (not (nil? h1-holds)) (fetch-climber-part :h2)
      (not (nil? h2-holds)) (fetch-climber-part :h1)
      :else nil)))

(defn- get-boulder-for-hand [hand-name]
  (let [boulder-key (case hand-name
                      "h1" :h1-holds
                      "h2" :h2-holds
                      nil)]
    (get @a/app-state boulder-key)))

(defn init-boulder-release-events! [engine]
  (let [keypressed (chan)
        release-hand! (fn [hand-key]
                          (let [hand (fetch-hand hand-key)
                                hand-name (m/read-data "name" hand)

                                boulder (get-boulder-for-hand hand-name)]

                                (if-not (nil? boulder)
                                       (do
                                         (.remove m/world (.-world engine) boulder)
                                         (remove-boulder-for-hand! hand-name)))))]

    (tap k/keypressed keypressed)
    (go (while true
          (let [key (<! keypressed)
                hand-key (case key
                       :a :left
                       :d :right
                       nil)]

            (when hand-key (release-hand! hand-key)))))))

(defn- remove-boulder-for-hand! [hand-name]
  (let [key-boulder (case hand-name
                   "h1" :h1-holds
                   "h2" :h2-holds)]

       (swap! a/app-state dissoc key-boulder)))

(defn- holds-hand? [hand]
  (let [boulder (get-boulder-for-hand hand)]
    (not (nil? boulder))))

(defn- h1-holds? [] (not (nil? (get @a/app-state :h1-holds))))
(defn- h2-holds? [] (not (nil? (get @a/app-state :h2-holds))))
(defn- holds-both? [] (and (h1-holds?) (h2-holds?)))
(defn- holds-nothing? [] (not (or (h1-holds?) (h2-holds?))))
(defn- holds-one? [] (and (not (holds-both?)) (not (holds-nothing?))))

(defn- on-the-ground? [] false)

(defn- bind-keys [key-actions]
  (let [keypressed (chan)]
    (tap k/keypressed keypressed)
    (go (while true
          (let [key (<! keypressed)
                action (get key-actions key)]

            (when-not (nil? action) (action)))))))

(defmacro def- [item value]
  `(def ^{:private true} ~item ~value))

(def- not-nil? (complement nil?))

;(with [keypressed (chan)]
;  :do
;  (tap k/keypressed keypressed)
;  (go (while true
;        (let [key (<! keypressed)
;              hand (case key
;                     :a :left
;                     :d :right
;                     nil)]
;
;          (when hand (release-hand! hand engine)))))
;
;  :where [release-hand! (fn [hand engine]
;                          (let [boulder (get-boulder-for-hand hand)]
;                            (if-not (nil? boulder)
;                              (do
;                                (.remove m/world (.-world engine) boulder)
;                                (remove-boulder-for-hand! hand)))))])

;(invert-rl on-key-left)