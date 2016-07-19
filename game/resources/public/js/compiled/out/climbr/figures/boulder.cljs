(ns ^:figwheel-always climbr.figures.boulder
  (:require [climbr.matter.matter :as m]))

(def boulders
  (let [boulders (.create m/composite)
        b1 (.rectangle m/bodies 400 400 60 60 #js {:isStatic true })
        b2 (.rectangle m/bodies 400 200 60 60 #js {:isStatic true })]

    (do
      (utils/debug left-hand)
      (.add m/composite boulders b1)
      (.add m/composite boulders b2))

    boulders))
