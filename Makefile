run-server:
		clj -A:nrepl

run-client:
		clj -A:dev -r

test:
		clojure -A:test

lint:
		./linter.sh

.PHONY: test
