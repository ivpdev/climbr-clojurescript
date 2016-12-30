(ns ^:figwheel-always climbr.figures.climber
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [climbr.matter.matter :as m]
            [climbr.app_state :as a]
            [climbr.utils.utils :as u]))

;TODO figures => bodies

(def climber
  (let [climber (.create m/composite)
        body (.circle m/bodies 400 400 10) ;TODO body=> torso, corpus
        left-hand (.circle m/bodies 350 400 5  #js {:friction 0.8})
        right-hand (.circle m/bodies 450 400 5  #js {:friction 0.8})

        left-arm (.create m/constraint #js {:bodyA left-hand :bodyB body :stiffness 0.3 })
        right-arm (.create m/constraint #js {:bodyA right-hand :bodyB body :stiffness 0.3 })]

      (do
        ;(m/set-density left-hand 0.0012)
        ;(m/set-density right-hand 0.0012)

        (m/data! "class" "hand" left-hand)
        (m/data! "name" "h1" left-hand)
        (m/data! "class" "hand" right-hand)
        (m/data! "name" "h2" right-hand)

        (swap! a/app-state assoc-in [:climber :body] body)
        (swap! a/app-state assoc-in [:climber :h1] left-hand)
        (swap! a/app-state assoc-in [:climber :h2] right-hand)

        (.add m/composite climber left-hand)
        (.add m/composite climber right-hand)
        (.add m/composite climber body)
        (.add m/composite climber left-arm)
        (.add m/composite climber right-arm)

        { :climber climber
          :h1 left-hand
          :h2 right-hand
          :body body })))

(defn get[]
  (:climber climber))


