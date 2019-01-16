
# Clojure/ClojureScript application template server and client

[![CircleCI](https://circleci.com/gh/Rende11/clojure-boilerplate.svg?style=svg)](https://circleci.com/gh/Rende11/clojure-boilerplate)

[![Build Status](https://travis-ci.org/Rende11/clojure-boilerplate.svg?branch=master)](https://travis-ci.org/Rende11/clojure-boilerplate)

### Basic concepts:

* Clj/Cljs REPLS - eval your code in editor and obtain result
* Figwheel - hot reload client code
* Linter - we use Joker
* Code formatter - runner base on cljfmt
* Clojure CLI/deps.edn - dependencies manager


### How to run:
1. Run server side 
```Make run-server```

2. Run client side 
```Make run-client```
Application available on localhost:8081

3. Open dev/user.clj and connect to client repl
4. Eval buffer and run ```(start)``` - figwheel should start and build base js
5. All started, connect to repl's and coding

### Other useful commands:
* ```make lint``` - check your code with linter
* ```make test``` - run tests
* ```make format``` - check your code style
* ```make format-fix``` - fix code style issues



