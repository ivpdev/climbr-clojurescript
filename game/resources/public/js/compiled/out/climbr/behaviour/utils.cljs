(ns ^:figwheel-always climbr.behaviour.utils
  (:require [climbr.app_state :as a]))

(defmacro def- [item value]
  `(def ^{:private true} ~item ~value))