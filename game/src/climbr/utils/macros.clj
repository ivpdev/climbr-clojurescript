(ns climbr.utils.macros)

;
;(defmacro my-print
;  [expression]
;  (list 'let ['result expression]
;    (list 'println 'result)
;    'result))
;
;(with [a 1]
;  :compute
;  (println "ololo")
;  (println a b)
;  :where [b 2])
;
;(compute
;  (println a b)
;  :where [a 1
;          b 2])

;let-expr :compute body-exprs :where where-expr
;let-expr:vect :compute body-exprs:list-els :where where-expr:vect

;(defmacro with
;  [& args]
;
;  (let [let-expr (get args 0)
;        where-idx (idx args :where)
;        args-length (length args)
;        body-to-idx (or (= -1 where-idx) args-length)
;        body-exprs (slice args 2 body-to-idx)
;        where-exprs (if (not= where-idx -1) (slice args where-idx args-length) nil)]
;
;    `(let ~(concat let-expr where-expr)
;       body-exprs)))
;
;(defmacro with
;  [& args]
;
;  (let [pre-defs (nth args 0)
;        where-idx (.indexOf args :where)]
;    (println args)
;    (list 'let pre-defs
;      ('println where-idx))))
;
;(defmacro compute [&args]
;  `(with []
;     :compute
;     ~args))

(defmacro compute[arg _ & bindings]
  `(let ~@bindings ~arg))

(defmacro for-each[objects func]
  `(doall (map ~func ~objects)))

(defmacro lets
  ([bindings & body]
    (if (seq bindings)
      `(when-let [~(first bindings) ~(second bindings)]
         (when-let* ~(drop 2 bindings) ~@body))
      `(do ~@body))))

(defmacro def- [item value] ;TODO remove ?
  `(def ^{:private true} ~item ~value))

(defmacro coalesce
  ([] nil)
  ([x] x)
  ([x & next]
    `(let [v# ~x]
       (if (not (nil? v#)) v# (coalesce ~@next)))))

(defmacro TODO
  "Ignores body, yields nil"
  [& body])

(TODO sometimes macros doesn't work as expected - fix is removing compiled files)

