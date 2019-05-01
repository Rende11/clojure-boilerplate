server:
		clj -A:nrepl

client:
		clj -A:dev -r

test:
		clojure -A:test

lint:
		./linter.sh

format:
		clojure -A:format

format-fix:
		clj -A:format/fix

build:
		clojure -A:depstar:webassets -m hf.depstar.uberjar app.jar

run:
		java -cp app.jar clojure.main -m app.core

.PHONY: test
