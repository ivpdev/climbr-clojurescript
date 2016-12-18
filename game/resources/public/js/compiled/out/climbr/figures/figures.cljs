(ns ^:figwheel-always climbr.figures.figures
  "Utilities for bodies"
  (:require [climbr.matter.matter :as m]
            [climbr.utils.utils :as u :refer [not-nil?]]))

(defn- get-boulder-color[standable? holdable?]
  (cond (and standable? holdable?) "#57846d"
        standable? "#1abc68"
        holdable? "#bcbcbc"
        :else "#e2e2e2" ))

(defn get-all-standables[]
  (m/find-world-bodies #(true? (m/read-data "standable" %))))

(defn create-boulder [opts]
  (let [{:keys [x y]} opts
        width 20
        height 20
        standable? (not-nil? (:standable opts))
        holdable? (not-nil? (:holdable opts))
        color (get-boulder-color standable? holdable?)

        base-params {:isStatic true
                     :render {:fillStyle color}}

        params (if standable? base-params (assoc base-params :collisionFilter { :category "red" }))

        boulder (.rectangle m/bodies x y width height (clj->js params))]

    (do
      (when standable?
        (m/data! "standable" true boulder))
      boulder)))