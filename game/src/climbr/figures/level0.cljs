(ns ^:figwheel-always climbr.figures.level0
  (:require [climbr.matter.matter :as m]
            [climbr.utils.utils :as u :refer [not-nil?]]))

(defn create-boulder [x y opts]
  (let [standable? (not-nil? (:standable opts))
        boulder (.rectangle m/bodies x y 20 20 #js {:isStatic true :collisionFilter { :category "red"} })]
    (do
     ; (m/data! "class" "boulder" boulder) ;TODO holdable
      (m/data! "standable" true boulder))

    boulder))

(def level
  (let [boulders (.create m/composite)
        b1 (create-boulder 300 400 nil)
       ; b2 (create-boulder 500 300 nil)
        b3 (create-boulder 100 200 nil)
        b4 (create-boulder 400 200 nil)]

    (do
      ;(m/data! ["class" "boulder"
      ;          "name 1"] b0)

      (m/data! "name" "4" b1)
     ; (m/data! "name" "3" b2)
      (m/data! "name" "2" b3)
      (m/data! "name" "1" b4)
      (.add m/composite boulders b1)
      ;(.add m/composite boulders b2)
      (.add m/composite boulders b3)
      (.add m/composite boulders b4))

    {:composite boulders
     :parts [b1
             ;b2
             b3 b4]}))
