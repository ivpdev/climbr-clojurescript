(ns ^:figwheel-always climbr.app_state
  (:require ))

(defonce app-state
  (atom { :h1-holds nil
          :h2-holds nil

          :climber { :body nil
                     :h1 nil
                     :h2 nil}}))