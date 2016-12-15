(ns ^:figwheel-always climbr.figures.figures
  "Utilities for bodies"
  (:require [climbr.matter.matter :as m]))

(defn get-all-standables[]
  (m/find-world-bodies #(true? (m/read-data "standable" %))))