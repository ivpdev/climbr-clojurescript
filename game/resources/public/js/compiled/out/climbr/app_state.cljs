(ns ^:figwheel-always climbr.app_state
  (:require ))

(defonce app-state
  (atom { :can-hook {
            :h1 #{}
            :h2 #{}}

          :h1-hooked nil
          :h2-hooked nil

          :climber { :body nil
                     :h1 nil
                     :h2 nil}

          :eninge nil ;TODO technical stuff move to matter namespace
          :engine-runner nil
          :current-level nil }))