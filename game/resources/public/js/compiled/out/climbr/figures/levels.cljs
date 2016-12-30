(ns ^:figwheel-always climbr.figures.levels
  (:require [climbr.utils.utils :as u]
            [climbr.figures.level0 :as l0]
            [climbr.figures.level1 :as l1]))

(defn get[level-name]
  (case level-name
    "l0" l0/level
    "l1" l1/level
    "default"))

(defn get-current-level
  "get level according to levelname in URL"
  []
  (let [level-name (u/get-current-level-name)]
    (get level-name)))
