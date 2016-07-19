(ns ^:figwheel-always climbr.figures.climber
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [climbr.matter.matter :as m]
            [climbr.app_state :as a]))

(def climber
  (let [climber (.create m/composite)
        body (.circle m/bodies 400 400 20)
        left-hand (.circle m/bodies 300 400 15)
        right-hand (.circle m/bodies 500 400 15)
        left-arm (.create m/constraint #js {:bodyA left-hand :bodyB body :stiffness 0.1 })
        right-arm (.create m/constraint #js {:bodyA right-hand :bodyB body :stiffness 0.1 })]

      (do
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


