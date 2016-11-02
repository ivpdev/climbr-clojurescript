(ns ^:figwheel-always climbr.core
  (:require [climbr.game :as game]))

(enable-console-print!)
(println "Hello Climber!")

(game/start!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

