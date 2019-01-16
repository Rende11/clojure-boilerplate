run-server:
		clj -A:nrepl

run-client:
		clj -A:dev -r

test:
		clojure -A:test

lint:
		./linter.sh

format:
		clj -A:format

format-fix:
		clj -A:format/fix

.PHONY: test
