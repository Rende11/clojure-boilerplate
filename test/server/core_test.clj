(ns server.core-test
  (:require  [clojure.test :refer :all]
             [clojure.string :as string]
             [matcho.core :as matcho]
             [app.core :as server]
             [org.httpkit.client :as client]))

(defn before-and-after-test [test-fn]
  (server/stop-server)
  (server/start-server)
  (test-fn)
  (server/stop-server))

(deftest basic-response-test

  (is (matcho/match
       @(client/get "http://localhost:8081/")
        {:status 200
         :body string?}))

  (is (matcho/match
       @(client/get "http://localhost:8081/about")
        {:status 200
         :body #(string/includes? % "It's about page!")})))

(use-fixtures :once before-and-after-test)

