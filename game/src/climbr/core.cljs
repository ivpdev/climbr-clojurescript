(ns ^:figwheel-always climbr.core
  (:require [climbr.game :as game]
            [climbr.utils.utils :as u]))

(enable-console-print!)

(game/start!)
(u/hide-loading-banner!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
