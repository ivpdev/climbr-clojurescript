(defproject climbr "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"
  
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"
                  :exclusions [org.clojure/tools.reader]]
                 [reagi "0.10.1"]
                 [com.cemerick/url "0.1.1"]]
  
  :plugins [[lein-figwheel "0.5.0-6"]
            [lein-cljsbuild "1.1.2" :exclusions [[org.clojure/clojure]]]
            [lein-npm "0.6.1"]
            [lein-resource "15.10.2"]]


  :npm {:dependencies [[matter-js "0.9.1"]
                       ;; Other types of dependencies (github, private npm, etc.) can be passed as a string
                       ;["your_username/your-module" "0.1.O"]
                       ]}


  ;; to run "lein resource"
  :resource { ;;TODO hook into cljsbuild

              :resource-paths [ ["node_modules/matter-js/build/"
                                 {
                                   ;; :includes ["matter.js"]  ;; list of regex
                                   :excludes []  ;; list of regex
                                   :target-path "resources/public/js/compiled/out/lib/matter-js" ;; directory to store files
                                   }]]

              :update   false      ;; if true only process files with src newer than dest
              :silent false ;; if true, only print errors
              :verbose false ;; if true, print debugging information ;; optional - default to nil
              }

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]

                ;; If no code is to be run, set :figwheel true for continued automagical reloading
                :figwheel {:on-jsload "climbr.core/on-js-reload"}

                :compiler {:main climbr.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/climbr.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/climbr.js"
                           :main climbr.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
