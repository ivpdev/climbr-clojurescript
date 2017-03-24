(ns ^:figwheel-always climbr.figures.levels
  (:require [climbr.utils.utils :as u]
            [climbr.figures.level0 :as l0]
            [climbr.figures.level1 :as l1]
            [climbr.figures.level_generator :as generator]))

(defn get-level[level-name]
      (cond
          (generator/level-seed? level-name) (generator/generate-level level-name)
          (= level-name "l0") l0/level
          (= level-name "l1") l1/level
          (= level-name "random") (generator/generate-level)
          :else nil))

(defn get-current-level
  "get level according to levelname in URL"
  []
  (let [level-code (get-current-level-code)]
       (get-level level-code)))

(defn get-current-level-code[]
      (let [level-name (u/get-current-level-name)]
           (if (= level-name "random")
              generator/last-seed
              level-name)))