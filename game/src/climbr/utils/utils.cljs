(ns ^:figwheel-always climbr.utils.utils
  "Utilities"
  (:require [reagi.core :as r]))

(defmacro def- [item value]
  `(def ^{:private true} ~item ~value))

(defn debug [x]
  (set! (.-debug1 js/window) x)
  (.log js/console x))

(defn println [x]
   (.log js/console x))

(defmacro TODO
  "Ignores body, yields nil"
  [& body])

(defn not-keyword?[val] (not (keyword? val)))

(defn without-keywords[col] (filter not-keyword? col))

(defn signal-from-property![prop]
  (let [behaviour (r/behavior prop)]
    (TODO factor time into config)
    (r/sample 1000 behaviour)))

(defn create-body-position-watch!
  "creates watch(signal + data) body position"
  [body]
  { :data body
    :signal (signal-from-property! (.-position body))})

(defn sqrt [x] (.sqrt js/Math x))

(defn sqr [x] (* x x))

(defn create-distance-watch!
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
                            (sqrt (sqr (- x2 x1) (sqr (- y2 y1))))))
                   pos<1+2>sig)]

     {:data [body1 body2]
      :signal distance-sig }))

(defn create-nearing-watch!
  "creates watch(signal + data) detecting if two bodies are near or not"
  [threshold distance-watch]
  (let [data (:data distance-watch)
        distance-sig (:signal distance-watch)
        near-sig (r/map #(< % threshold) distance-sig)
        near-change-sig (r/uniq near-sig)]
    { :data data
      :signal near-change-sig }))

(defn cartesian-prod[col1 col2]
  (for [x col1
        y col2]
    [x y]))

(defn watch-approaching! [config]
  (let [bodies1 (without-keywords (:watch config))
        bodies2 (without-keywords (:approaching config))
        distance-threshold (get-in config [:with :distance])
        action-on (:on config)
        action-off (:off config)

        bodies1-position-watches (map create-body-position-watch! bodies1)
        bodies2-position-watches (map create-body-position-watch! bodies2)

        bodies-pairs-to-watch (cartesian-prod bodies1-position-watches bodies2-position-watches)
        distance-watches (map create-distance-watch! bodies-pairs-to-watch)

        nearing-watches (map (partial create-nearing-watch! distance-threshold) distance-watches)



        xx (doall
             (map (fn[watch]
                    (let [signal (:signal watch)
                          data (:data watch)]
                      (r/map (fn[near]
                               (if near (apply action-on data) (apply action-off data)))
                        signal)))
               nearing-watches))

        ; x2 (println (count approachings-to-watch))


        bodies-near (TODO create boolean signals which are true when two bodies are close)

        any-bodies-near (TODO create signal exposing all pairs of bodies which are near )]


    any-bodies-near))

(TODO move all bodies approaching watch into matter package)

(TODO create script which parses source code end extracts all TODOs)

(TODO create issue macro)

;(def y (is (+ x 1)
;          :where
;            [x (+ a 1)
;             a 42]))
;
;(defmacro is
;  "Inverted 'let'"
;  [expr & extras]
;
;  (let [has-where (contains? extras :where)]
;    (println has-where)))
;
;
;(defmacro when
;  "Evaluates test. If logical true, evaluates body in an implicit do."
;  {:added "1.0"}
;  [test & body]
;  (list 'if test (cons 'do body)))
;
;(defmacro unless
;  "Inverted 'if'"
;  [test & branches]
;  (conj (reverse branches) test 'if))


;TODO macros ???
;
;
;
