(ns ^:figwheel-always climbr.figures.figures
  "Utilities for bodies"
  (:require [climbr.matter.matter :as m]
            [climbr.utils.utils :as u :refer [not-nil?]]))

(defn- get-boulder-color[standable? hookable?]
  (cond (and standable? hookable?) "#7A6169"
        standable? "#3D348B"
        hookable? "#E6AF2E"
        :else "#BEB7A4" ))

(defn get-all-standables[]
  (m/find-world-bodies #(true? (m/read-data "standable" %))))

;TODO macros (non-empty-props [x y width height] opts)
;TODO (boolean-props [standable? holdable?] opts)
;TODO (with-default [width 20
;                    height 20] opts)

(defn create-boulder [opts]
  (let [{:keys [x y width height]} opts
        standable? (:standable opts)
        hookable? (:hookable opts)
        color (get-boulder-color standable? hookable?)

        base-params {:isStatic true
                     :render {:fillStyle color}}

        params (if standable? base-params (assoc base-params :collisionFilter { :category "red" }))

        boulder (.rectangle m/bodies x y width height (clj->js params))]

    (do
      (when standable?
        (m/data! "standable" true boulder))
      (when hookable?
        (m/data! "hookable" true boulder))
      boulder)))