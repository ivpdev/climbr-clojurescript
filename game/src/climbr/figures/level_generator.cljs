(ns ^:figwheel-always climbr.figures.level_generator
  (:require-macros [climbr.utils.macros :refer [for-each]]
                   [climbr.utils.random.macros :refer [with-seed]])

  (:require [climbr.utils.utils :as u]
            [climbr.utils.random.random :as r]
            [climbr.figures.figures :as figures]
            [climbr.matter.matter :as m]))

(def max-seed 1000000)
(def max-seed-size (count (str max-seed)))

(def last-seed nil)

(defn level-seed? [level-name]
      (and
        (u/numeric? level-name)
        (< (count level-name) max-seed-size)))

(defn- generate-boulder-candidate[rng]
      (let [x (r/random-int-with {:range [0 (u/get-canvas-width)]} rng)
            y (r/random-int-with {:range [0 (u/get-canvas-height)]} rng)
            width (r/random-int-with {:range [10 50]} rng)
            height (r/random-int-with {:range [10 50]} rng)
            standable (r/random-boolean rng)
            holdable (r/random-boolean rng)]

           {:x x :y y :width width :height height :standable standable :holdable holdable}))

(defn- fits? [boulder-candidate level]
      (let [offset-x 20
            offset-y 10
            candidate-x (:x boulder-candidate)
            candidate-x-min candidate-x
            candidate-x-max (+ candidate-x-min (:width boulder-candidate))

            candidate-y (:y boulder-candidate)
            candidate-y-min candidate-y
            candidate-y-max (+ candidate-y-min (:height boulder-candidate))

            intersects (some (fn[boulder]
                                (let [boulder-x (:x boulder)
                                      boulder-x-min boulder-x
                                      boulder-x-max (+ boulder-x-min (:width boulder))

                                      boulder-y (:y boulder)
                                      boulder-y-min boulder-y
                                      boulder-y-max (+ boulder-y-min (:height boulder))

                                      interects-horizontally (u/intersects? boulder-x-min boulder-x-max
                                                                          candidate-x-min candidate-x-max offset-x)

                                      interects-vertically (u/intersects? boulder-y-min boulder-y-max
                                                                        candidate-y-min candidate-y-max offset-y)]

                                      (or interects-horizontally interects-vertically)))
                             level)]

           (not intersects)))

(defn- generate-level-definition[seed]
  (let [level []
        max-fails-allowed 5
        max-boulders-allowed 20
        insertion-fails 0
        rng (js/MersenneTwister. seed)]

        (loop [level []
               insertion-fails 0
               boulders-inserted 0]

              (if (or (>= insertion-fails max-fails-allowed)
                      (>= boulders-inserted max-boulders-allowed))
                level

                (let [boulder-candidate (generate-boulder-candidate rng)
                      fits-into-level (fits? boulder-candidate level)]

                     (if fits-into-level
                       (recur (conj level boulder-candidate) 0 (inc boulders-inserted))
                       (recur level (inc insertion-fails) (inc boulders-inserted))))))))

(defn- generate-level-with-seed [seed]
       (let [boulder-defs (generate-level-definition seed)
             composite (.create m/composite)
             boulders (map figures/create-boulder boulder-defs)]

            (do
              (set! last-seed seed)
              (for-each boulders #(.add m/composite composite %))
              {:composite composite
               :parts boulders })))

(defn generate-level
      ([] (generate-level-with-seed (rand-int max-seed)))
      ([seed] (generate-level-with-seed seed)))