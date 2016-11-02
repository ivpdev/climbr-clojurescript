(ns ^:figwheel-always climbr.app_state
  (:require ))

(defonce app-state
  (atom { :can-grab {
            :h1 #{}
            :h2 #{}}

          :h1-holds nil
          :h2-holds nil

          :climber { :body nil
                     :h1 nil
                     :h2 nil}

          :eninge nil ;TODO technical stuff move to matter namespace
          :engine-runner nil
          :current-level nil }))
