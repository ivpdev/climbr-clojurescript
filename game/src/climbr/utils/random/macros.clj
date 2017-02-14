(ns climbr.utils.random.macros)

(defmacro with-seed
   "provides context for calling random value generation functions based on seeded PRNG"
   [seed body]

  `(let [~'rng (js/MersenneTwister. ~seed)]
      ~body))

(defmacro random-int-with
  "generate random int. options:
    - range: desired range for generated number (e.g.[10 20])
    - exclude: range (or ranges) of number which should never appear as generated-value (e.g. [5 30], or [[5 30] [35 45]])"
  [opts]
  `(let [random-int# (fn [rng# n#]
                         (let [random-raw# (.random rng#)]
                                        (* random-raw# n#)))

         random-int-from-range# (fn [rng# range#]
                                    (let [min# (if range# (nth range# 0) 0)
                                          max# (if range# (nth range# 1) 1)]

                                         (- (random-int# rng# (+ min# max#)) min#)))

         random-value-with-exclude# (fn [next-random-val-fn# should-be-rejected?#]
                                      (let [random-value# (next-random-val-fn#)
                                            excluded?# (should-be-rejected?# random-value#)]

                                           (if (not excluded?#)
                                             random-value#
                                             (do
                                               (println "rejected: " random-value#)
                                               (recur next-random-val-fn# should-be-rejected?#)))))

         random-int-with# (fn [opts#]
                                   (let [range# (:range opts#)
                                         exclude# (:exclude opts#)

                                         in-range?#
                                            (fn [val# range#]
                                                (let [min# (nth range# 0)
                                                      max# (nth range# 1)]
                                                     (and (>= val# min#) (<= val# max#))))

                                         should-be-rejected?#
                                            (fn [val#]
                                               (cond
                                                 (not (vector? exclude#)) false
                                                 (every? number? exclude#) (in-range?# val# exclude#) ;exlude is a single interval (e.g. [10 20])
                                                 (every? vector? exclude#) (every? #(partial in-range?# val#) exclude#) ;exlude is multiple intervals (e.g. [[10 20] [5 10]])
                                                 :else false))

                                         next-random-int-fn# (partial random-int-from-range#  ~'rng range#)]

                                        (random-value-with-exclude# next-random-int-fn# should-be-rejected?#)))

         value# (random-int-with# ~opts)]

        (do
          (println "value" value#)
          value# )))

(defmacro random-boolean[]
   `(let [random-int# (.random ~'rng)
          random-boolean# (> random-int# 0.5)]
         (do
           (println "random-boolean: " random-boolean#))))

;TODO cross-platform
;TODO optimize value exclusion algorithm
;TODO enable usage of random functions without seed (when called outside of (with-seed ..) macro)
;TODO enable weights for random boolean