(ns ^:figwheel-always climbr.figures.levels
  (:require [climbr.figures.level0 :as l0]
            [climbr.figures.level1 :as l1]))

(defn get[level-name]
  (case level-name
    "l1" l1/level
    "default"))
