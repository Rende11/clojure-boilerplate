run-server:
		clj -A:nrepl

run-client:
		clj -A:dev -r

develop:
		run-server &
		run-client

test:
		clj -A:test

lint:
		./linter.sh

.PHONY: test
