(ns ^:figwheel-always climbr.figures.level_generator
  (:require-macros [climbr.utils.macros :refer [coalesce TODO]]
                   [climbr.utils.random.macros :refer [random-int-with random-boolean with-seed]])

  (:require [climbr.utils.utils :as u]))

(defn generate-boulder-candidate[seed]
    (with-seed seed
      (let [x (random-int-with {:range [0 500] :exclude [150 400]})
            y (random-int-with {:range [0 300] :exclude [150 400]})
            width (random-int-with {:range [10 50]})
            height (random-int-with {:range [10 50]})
            standable (random-boolean)
            holdable (random-boolean)]

          (println {:x x :y y :width width :height height :standable standable :holdable holdable}))))


(defn fits? [level boulder-candidate]
      nil)

(defn next-rand[seed]
      nil)

;
;(defn generate-level[& [seed]]
;  (let [;level []
;        effective-seed (coalesce seed (rand))
;        max-fails-allowed 5
;        ;insertion-fails 0
;        ]
;    (loop [level []
;           insertion-fails 0
;           seed seed]
;      (let [boulder-candidate (generate-boulder-candidate effective-seed)
;            next-seed (next-rand seed)
;            fits-into-level? (fits? boulder-candidate level)]
;
;        (if (< insertion-fails max-fails-allowed)
;          (if fits-into-level?
;            (recur (add-boulder boulder-candidate level) 0 next-seed)
;            (recur level (inc insertion-fails) next-seed))
;
;          {:level level
;           :seed effective-seed })))))