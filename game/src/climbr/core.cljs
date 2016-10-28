(ns ^:figwheel-always climbr.core
  (:require [climbr.figures.ground :as ground]
            [climbr.figures.climber :as climber]
            [climbr.figures.levels :as levels]
            [climbr.matter.matter :as m]
            [climbr.app_state :as a]
            [climbr.utils.utils :as u]
            [climbr.behaviour.user_actions :as user-actions]
            [climbr.behaviour.climber_moves :as climber-moves]))

(enable-console-print!)

[:TODO rename "boulders" to "holds"]
(println "Hello Climber!")

(defn set-level![level-name world]
  (let [level (levels/get level-name)
        level-composite (:composite level)]

    (do
      (swap! a/app-state assoc :current-level level)
      (.add m/world world (clj->js [level-composite])))))

(let [engine (.create m/engine (.-body js/document))
      mouse-constraint (.create m/mouse-constraint engine)
      climber (:climber climber/climber)
      my-world (.-world engine)
      level-name (u/get-level-name)]

  (do
    (.add m/world my-world (clj->js [ground/ground climber mouse-constraint]))

    (set-level! level-name my-world)

    (swap! a/app-state assoc :engine engine)

    (climber-moves/init-approaching-watch! engine)
    (user-actions/setup-climber-release-events! engine)
    (user-actions/setup-climber-grab-events! engine)
    (user-actions/setup-climber-moves!)

    (.run m/engine engine)))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

