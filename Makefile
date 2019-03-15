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

.PHONY: test
