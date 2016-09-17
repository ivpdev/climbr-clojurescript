(ns ^:figwheel-always climbr.utils.utils
  "Utilities")

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
