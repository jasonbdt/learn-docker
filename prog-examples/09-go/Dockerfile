# Datei: prog-examples/09-go/Dockerfile
FROM golang:1.20

ENV TZ="Europe/Berlin"
WORKDIR /app

# Cache Modules
COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY printheadlines.go .
RUN go build -v -o printheadlines ./printheadlines.go

CMD ["/app/printheadlines"]
