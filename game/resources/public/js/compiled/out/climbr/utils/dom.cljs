(ns ^:figwheel-always climbr.utils.dom)

(defn $
      [selector]
      (js/$ selector))

(defn set-inner-html[content selector]
    (.html ($ selector) content))

(defn remove-class[class selector]
      (.removeClass ($ selector) class))