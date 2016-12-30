(ns ^:figwheel-always climbr.behaviour.climber_moves
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [climbr.utils.macros :refer [compute]])

  (:require [climbr.figures.climber :as climber]
            [climbr.matter.matter :as m]
            [climbr.app_state :as a]
            [climbr.controls.keyboard :as k]
            [climbr.figures.levels :as levels]
            [climbr.behaviour.position_watches :as p]
            [cljs.core.async :refer [tap chan <!]]))

(defmacro def- [item value]
  `(def ^{:private true} ~item ~value))

(defn watch-hand-can-hook-boulder!
  "Watch when hands are getting close enough to boulders for being able to hook them."
  []
  (let [climber (:climber climber/climber)
        hand1 (:h1 climber/climber)
        hand2 (:h2 climber/climber)
        level (levels/get-current-level)
        boulders (:parts level)
        hookable-boulders (filter #(m/hookable? %) boulders)]

    (p/watch-approaching! {:watch [hand1 :or hand2]
                           :approaching hookable-boulders
                           :with {:distance 20}

                           :when-near (partial update-hand-can-hook! :add)
                           :when-far (partial update-hand-can-hook! :remove) })))

(defn update-hand-can-hook![action hand boulder]
  (let [hand-name (m/read-data "name" hand)
        hand-key (case hand-name "h1" :h1
                                  "h2" :h2 nil)
        update-func (case action :add conj
                                 :remove disj nil)]

    (do
      (swap! a/app-state update-in [:can-hook hand-key] update-func boulder))))

(defn watch-hand-reaches-top!
  "Watch when a hand is reaching top. When this happens the on-reach! function is called."
  [on-reach]
  (compute
    (p/watch-position! {:watch [hand1 :or hand2]
                        :is over-top?

                        :when-true on-reach })

    :where [climber (:climber climber/climber)
            hand1 (:h1 climber/climber)
            hand2 (:h2 climber/climber)
            over-top? (fn[x y]
                        (< y 0))]))

;(with [keypressed (chan)]
;  :do
;     (tap k/keypressed keypressed)
;     (go (while true
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
