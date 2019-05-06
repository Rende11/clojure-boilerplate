FROM clojure:alpine

COPY app.jar /app.jar

ENV PORT=8080

CMD java -cp /app.jar clojure.main -m app.core

