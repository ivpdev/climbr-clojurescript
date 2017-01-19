(ns ^:figwheel-always climbr.figures.level0
  (:require [climbr.matter.matter :as m]
            [climbr.figures.figures :as figures]
            [climbr.utils.utils :as u :refer [not-nil?]]))

(def level
  (let [boulders (.create m/composite)
        b1 (figures/create-boulder {:x 300 :y 350 :height 20 :width 30 :standable true :hookable true})
        b2 (figures/create-boulder {:x 400 :y 350 :height 20 :width 30 :hookable true})
        b21 (figures/create-boulder {:x 500 :y 350 :height 20 :width 30 :hookable true})
        b3 (figures/create-boulder {:x 100 :y 200 :height 20 :width 20 :hookable true})
        b4 (figures/create-boulder {:x 400 :y 200 :height 20 :width 20 :standable true})]

    (do
      (m/data! "name" "4" b1)
      (m/data! "name" "3" b2)
      (m/data! "name" "31" b21)
      (m/data! "name" "2" b3)
      (m/data! "name" "1" b4)
      (.add m/composite boulders b1)
      (.add m/composite boulders b2)
      (.add m/composite boulders b21)
      (.add m/composite boulders b3)
      (.add m/composite boulders b4))

    {:composite boulders
     :parts [b1
             b2
             b21
             b3 b4]}))
