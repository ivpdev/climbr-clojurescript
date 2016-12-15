(ns ^:figwheel-always climbr.matter.matter
  "Clojure wrappers for matter.js objects and methods + utilitary methods for working with matter.js objects"
  (:require [climbr.app_state :as a]
            [climbr.utils.utils :as u]))

(def bodies (.-Bodies js/Matter))
(def body (.-Body js/Matter))
(def composite (.-Composite js/Matter))
(def constraint (.-Constraint js/Matter))
(def engine (.-Engine js/Matter))
(def runner (.-Runner js/Matter))
(def world (.-World js/Matter))
(def mouse-constraint (.-MouseConstraint js/Matter))
(def events (.-Events js/Matter))

(defn bounds-contain? [bounds point]
  (.contains (.-Bounds js/Matter) bounds point))

(defn data! [key value object]
  "attach some data (key, value) to an object"
  (assert object "object should be not null")
  (let [data (.-climbr-data object)]
    (set! (.-climbr-data object) (assoc data key value))))

(defn read-data [key object]
  "get data by key from an object"
  (let [data (.-climbr-data object)]
    (get data key)))

(defn apply-force [body force]
  (let [{:keys [x y]} force]
    (.applyForce (.-Body js/Matter) body (.-position body) #js {:x x :y y})))

(defn y [body]
  (get (js->clj (.-position body)) "y"))

(defn x [body]
  (get (js->clj (.-position body)) "x"))

(defn set-density[target density]
  (.setDensity body target density))

(defn get-all-world-bodies[]
  (let [engine (:engine @a/app-state)
        my-world (.-world engine)]
      (.allBodies composite my-world)))

(defn find-world-bodies[predicate]
  (let [world-bodies (get-all-world-bodies)]
    (filter predicate world-bodies)))

;TODO defn with print result

(defn is-above?[testee target opts]
  (let[testee-center-x (x testee)
       testee-cetner-y (y testee)
       ;TODO lower point
       target-bounds (.-bounds target)
       margin (:margin opts)
       y-border (+ testee-cetner-y margin)
       result (bounds-contain? target-bounds #js {:x testee-center-x :y y-border})]

    (bounds-contain? target-bounds #js {:x testee-center-x :y y-border})))
