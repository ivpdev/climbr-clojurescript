(ns ^:figwheel-always climbr.behaviour.position_watches
  (:require [reagi.core :as r]
            [climbr.utils.utils :as u]))

(defmacro def- [item value]
  `(def ^{:private true} ~item ~value))

(defn not-keyword?[val] (not (keyword? val)))

(defn without-keywords[col] (filter not-keyword? col))

(defn signal-from-property![prop]
  (let [behaviour (r/behavior prop)]
    [:TODO factor time into config]
    (r/sample 10 behaviour)))

(defn create-body-position-watch!
  "creates watch(signal + data) body position"
  [body]
  { :data body
    :signal (signal-from-property! (.-position body))})

(defn- sqrt [x] (.sqrt js/Math x))

(defn- sqr [x] (* x x))

(defn- create-distance-watch!
  "from pair of body position watches creates a watch of body distances"
  [position-watches-pair]
  (let [pos1-watch (get position-watches-pair 0)
        pos2-watch (get position-watches-pair 1)

        body1 (:data pos1-watch)
        body2 (:data pos2-watch)

        pos1-sig (:signal pos1-watch)
        pos2-sig (:signal pos2-watch)

        pos<1+2>sig (r/zip pos1-sig pos2-sig)
        distance-sig (r/map (fn[positions]
                              (let [pos1 (get positions 0)
                                    pos2 (get positions 1)
                                    x1 (.-x pos1)
                                    y1 (.-y pos1)
                                    x2 (.-x pos2)
                                    y2 (.-y pos2)]
                                (sqrt (+ (sqr (- x2 x1)) (sqr (- y2 y1))))))
                       pos<1+2>sig)]

    {:data [body1 body2]
     :signal distance-sig }))

[:TODO create map and map2 functions for watches]

(defn- create-position-predicate-watch![predicate position-watch]
  (let [position-signal (:signal position-watch)
        predicate-signal (r/map (fn[position]
                                  (let [x (.-x position)
                                        y (.-y position)]
                                    (predicate x y)))
                           position-signal)]
    {:data (:data position-watch)
     :signal predicate-signal}))

(defn create-nearing-watch!
  "creates watch(signal + data) detecting if two bodies are near or not"
  [threshold distance-watch]
  (let [data (:data distance-watch)
        distance-sig (:signal distance-watch)
        near-sig (r/map #(< % threshold) distance-sig)
        near-change-sig (r/uniq near-sig)]
    { :data data
      :signal near-change-sig }))

(defn watch-approaching! [config]
  (let [bodies1 (without-keywords (:watch config))
        bodies2 (without-keywords (:approaching config))
        distance-threshold (get-in config [:with :distance])
        action-on (:when-near config)
        action-off (:when-far config)

        bodies1-position-watches (map create-body-position-watch! bodies1)
        bodies2-position-watches (map create-body-position-watch! bodies2)

        bodies-pairs-to-watch (u/cartesian-prod bodies1-position-watches bodies2-position-watches)
        distance-watches (map create-distance-watch! bodies-pairs-to-watch)
        nearing-watches (map (partial create-nearing-watch! distance-threshold) distance-watches)]

    (doall
      (map (fn[watch]
             (let [signal (:signal watch)
                   data (:data watch)]
               (r/map (fn[near]
                        (if near (apply action-on data)
                          (apply action-off data)))
                 signal)))
        nearing-watches))))

(defn watch-position! [config]
  (let [bodies (without-keywords (:watch config))
        position-predicate (:is config)
        action-on (:when-true config)

        bodies-position-watches (map create-body-position-watch! bodies)
        bodies-position-predicate-watches (map (partial create-position-predicate-watch! position-predicate)
                                            bodies-position-watches)]

    (doall
      (map (fn[watch]
             (let [signal (:signal watch)]
               (r/map (fn[is-true]
                        (when is-true (action-on)))
                 signal)))
        bodies-position-predicate-watches))))