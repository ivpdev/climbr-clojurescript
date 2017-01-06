(ns ^:figwheel-always climbr.figures.level1
  (:require [climbr.matter.matter :as m]))

;TODO via figures

(defn create-boulder [x y & [width heights]]
  (let [boulder (.rectangle m/bodies x y 20 20 #js {:isStatic true :collisionFilter { :category "red"}})]
    (do
      (m/data! "class" "boulder" boulder))

    boulder))

(def level
  (let [boulders (.create m/composite)
        b1 (create-boulder 300 350)
        b2 (create-boulder 500 400)
        b3 (create-boulder 100 200)
        b4 (create-boulder 400 200)]

    (do
      (m/data! "name" "4" b1)
      (m/data! "name" "3" b2)
      (m/data! "name" "2" b3)
      (m/data! "name" "1" b4)
      (.add m/composite boulders b1)
      (.add m/composite boulders b2)
      (.add m/composite boulders b3)
      (.add m/composite boulders b4))

    {:composite boulders
     :parts [b1 b2 b3 b4]}))