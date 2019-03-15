(ns ^:figwheel-no-load client.dev
  (:require [client.main.core :as core]
            [figwheel.client :as figwheel :include-macros true]
            [re-frisk.core :refer [enable-re-frisk!]]
            [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(figwheel/watch-and-reload
 :websocket-url "ws://localhost:3449/figwheel-ws"
 :jsload-callback core/main)

(enable-re-frisk!)
(core/main)
