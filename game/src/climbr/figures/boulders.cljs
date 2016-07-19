(ns ^:figwheel-always climbr.figures.boulders
  (:require [climbr.matter.matter :as m]))

(def boulders
  (let [boulders (.create m/composite)
        b1 (.rectangle m/bodies 300 400 20 20 #js {:isStatic true})
        b2 (.rectangle m/bodies 500 400 20 20 #js {:isStatic true})
        b3 (.rectangle m/bodies 100 200 20 20 #js {:isStatic true})
        b4 (.rectangle m/bodies 400 200 20 20 #js {:isStatic true})]

    (do
      (m/data! "class" "boulder" b1)
      (m/data! "class" "boulder" b2)
      (m/data! "class" "boulder" b3)
      (m/data! "class" "boulder" b4)
      (.add m/composite boulders b1)
      (.add m/composite boulders b2)
      (.add m/composite boulders b3)
      (.add m/composite boulders b4))

    boulders))