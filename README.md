
## Clojure/ClojureScript application template server and client
*****

[![CircleCI](https://circleci.com/gh/Rende11/clojure-boilerplate.svg?style=svg)](https://circleci.com/gh/Rende11/clojure-boilerplate)
[![Build Status](https://travis-ci.org/Rende11/clojure-boilerplate.svg?branch=master)](https://travis-ci.org/Rende11/clojure-boilerplate)

<br/>

### Basic concepts:

* Clj/Cljs REPLS - eval your code in editor and obtain result
* Figwheel - hot reload client code
* Linter - we use Joker
* Code formatter - runner base on cljfmt
* Clojure CLI/deps.edn - dependencies manager
* Clojure CLI/deps.edn - dependencies manager


### How to run:
1. Run server side <code>make run-servers</code>

2. Run client side <code>make run-client</code>

_Now application available on localhost:8081_

3. Open <code>dev/user.clj</code> and connect to client repl
4. Eval buffer and run <code>(start)</code> - figwheel should start and build base js
5. All started, connect to repl's and coding

### Other useful commands:
* <code>make lint</code> - check your code with linter
* <code>make test</code> - run tests
* <code>make format</code> - check your code style
* <code>make format-fix</code> - fix code style issues



