(ns ^:figwheel-always climbr.app_state
  (:require ))

(defonce app-state
  (atom { :h1-near nil
          :h2-near nil

          :h1-holds nil
          :h2-holds nil

          :climber { :body nil
                     :h1 nil
                     :h2 nil}}))