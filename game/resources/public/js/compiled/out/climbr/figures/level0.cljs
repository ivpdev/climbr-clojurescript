(ns ^:figwheel-always climbr.figures.level0
  (:require [climbr.matter.matter :as m]))

(defn create-boulder [x y with heights]
  (let [boulder (.rectangle m/bodies x y 20 20 #js {:isStatic true :collisionFilter { :category "red"}})]
    (do
      (m/data! "class" "boulder" boulder))

    boulder))

(def level
  (let [boulders (.create m/composite)
        b1 (create-boulder 300 400)
        b2 (create-boulder 500 300)
        b3 (create-boulder 100 200)
        b4 (create-boulder 400 200)]

    (do
      (m/data! "class" "boulder" b1)
      (m/data! "class" "boulder" b2)
      (m/data! "class" "boulder" b3)
      (m/data! "class" "boulder" b4)
      (m/data! "name" "4" b1)
      (m/data! "name" "3" b2)
      (m/data! "name" "2" b3)
      (m/data! "name" "1" b4)
      (.add m/composite boulders b1)
      ;(.add m/composite boulders b2)
      (.add m/composite boulders b3)
      (.add m/composite boulders b4))

    {:composite boulders
     :parts [b1 b2 b3 b4]}))
