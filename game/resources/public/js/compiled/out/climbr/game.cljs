(ns ^:figwheel-always climbr.game
  (:require
    [climbr.figures.ground :as ground]
    [climbr.figures.climber :as climber]
    [climbr.figures.levels :as levels]
    [climbr.matter.matter :as m]
    [climbr.utils.utils :as u]
    [climbr.app_state :as a]
    [climbr.behaviour.user_actions :as user-actions]
    [climbr.behaviour.climber_moves :as climber-moves]))

(defn start![]
  (let [engine (setup-engine!)
        render (setup-render! engine)]

    (do
      (setup-world-base! engine)
      (setup-level! engine)
      (setup-climber! engine)
      (watch-reaching-top! engine)
      (run-engine! engine)
      (run-render! render)
      (start-timer!))))

(defn- setup-world-base!
  "setup world base components which are the same for all the levels"
  [engine]
  (let[world (.-world engine)
       mouse-constraint (.create m/mouse-constraint engine)]
    (.add m/world world (clj->js [ground/ground mouse-constraint]))))

(defn- setup-level!
  "load level based on URL param and put it into the world"
  [engine]
  (let[level-name (u/get-level-name)
       level (levels/get level-name)
       level-composite (:composite level)
       world (.-world engine)]

    (swap! a/app-state assoc :current-level level)
    (.add m/world world (clj->js [level-composite]))))

(defn- setup-climber!
  "setup climber and put him into the world"
  [engine level]
  (let[my-world (.-world engine)
       climber (:climber climber/climber)]

    (.add m/world my-world (clj->js [climber]))
    (climber-moves/watch-hand-can-grab-boulder!)
    (user-actions/setup-climber-grab-events! engine level) ;TODO make working with explicitely passed boulders
    (user-actions/setup-climber-release-events! engine)
    (user-actions/setup-climber-moves!)))

(defn- setup-engine!
  "create matter.js engine"
  []
  (let [engine (.create m/engine)]
    (swap! a/app-state assoc :engine engine)
     engine))

(defn- setup-render!
  "create matter.js render"
  [engine]
  (let [body (.-body js/document)
        render (.create m/render (clj->js {:element body :engine engine :options {:wireframes false}}))]
    render))

(defn- run-engine![engine]
  (let [runner (.run m/engine engine)]
    (swap! a/app-state assoc :engine-runner runner)))

(defn- run-render![render]
  (.run m/render render))

(defn- stop-engine![]
  (let [runner (get @a/app-state :engine-runner)
        ;TODO
        ]
    (.stop m/runner runner)))

(defn- start-timer![]
  (println "TIMER STARTED"))

(defn- watch-reaching-top![]
  (climber-moves/watch-hand-reaches-top! win-game!))

(def game-is-over? false)

(defn win-game![]
  (when-not game-is-over?
    (do
      ;(stop-engine!)
      (.alert js/window "You won!")
      (set! (.-location js/window) "index.html")
      (set! game-is-over? true))))