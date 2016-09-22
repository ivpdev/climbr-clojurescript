(ns ^:figwheel-always climbr.matter.matter
  "Clojure wrappers for matter.js objects and methods + utilitary methods for working with matter.js objects"
  (:require ))

(def bodies (.-Bodies js/Matter))
(def body (.-Body js/Matter))
(def composite (.-Composite js/Matter))
(def constraint (.-Constraint js/Matter))
(def engine (.-Engine js/Matter))
(def world (.-World js/Matter))
(def mouse-constraint (.-MouseConstraint js/Matter))
(def events (.-Events js/Matter))

(defn data! [key value object]
  "attach some data (key, value) to an object"
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