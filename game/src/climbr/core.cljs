(ns ^:figwheel-always climbr.core
  (:require [climbr.figures.ground :as ground]
            [climbr.figures.climber :as climber]
            [climbr.figures.boulders :as boulders]
            [climbr.matter.matter :as m]
            [climbr.behaviour.user_actions :as user-actions]
            [climbr.behaviour.climber_moves :as climber-moves]
            ))

(enable-console-print!)

[:TODO
 "new climber behaviour"]

(println "Hello Climber!")

(let [engine (.create m/engine (.-body js/document))
      mouse-constraint (.create m/mouse-constraint engine)
      climber (:climber climber/climber)
      left-hand (:left-hand climber/climber)
      right-hand (:right-hand climber/climber)
      body (:body climber/climber) ]

  (do
    (.add m/world (.-world engine) (clj->js [ground/ground boulders/boulders climber mouse-constraint]))

    (climber-moves/init-boulder-touch-events! engine)
    (user-actions/setup-boulder-release-events! engine)
    (user-actions/setup-user-controls!)
    (.run m/engine engine)))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
