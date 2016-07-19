(ns ^:figwheel-always climbr.figures.ground
  (:require [climbr.matter.matter :as m]))

(def ground (.rectangle m/bodies 400 610 810 60 #js {:isStatic true }))
