(ns ^:figwheel-always climbr.behaviour.climber_moves
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [climbr.figures.climber :as climber]
            [climbr.figures.boulders :as boulders]
            [climbr.matter.matter :as m]
            [climbr.app_state :as a]
            [climbr.controls.keyboard :as k]
            [climbr.utils.utils :as u]
            [cljs.core.async :refer [tap chan <!]]))

(defmacro def- [item value]
  `(def ^{:private true} ~item ~value))

[:TODO remove after new behaviour is ready]
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

(defn init-approaching-watch![]
  (let [;hand-left (ua/fetch-climber-part :h1)
        ;hand-right (ua/fetch-climber-part :h2)
        climber (:climber climber/climber)
        hand1 (:h1 climber/climber)
        hand2 (:h2 climber/climber)
        boulders (:components boulders/boulders)]

    (u/watch-approaching! {:watch [hand1 :or hand2]
                           :approaching boulders
                           :with {:distance 20}
                           :on (fn [hand boulder]
                                 (let [hand-key nil]
                                   ; (swap! a/app-state assoc hand-key boulder-obj)
                                   (println "approached!")
                                   (.log js/console hand)))
                           :off (fn [hand boulder]
                                  (println "away!"))
                           })))



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