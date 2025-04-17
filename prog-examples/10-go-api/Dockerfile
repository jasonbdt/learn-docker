# Datei: prog-examples/10-go-api/Dockerfile
# Development Stage
FROM golang:1.24-alpine AS dev

RUN apk add --no-cache tzdata

ENV TZ="Europe/Berlin"

WORKDIR /app

RUN go install github.com/air-verse/air@latest
RUN go install github.com/go-delve/delve/cmd/dlv@latest

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY . .
RUN go build -o ./api-server

CMD ["air", "-c", ".air.toml"]

# Production Stage
FROM alpine:latest AS runner

RUN apk add --no-cache tzdata

ENV TZ="Europe/Berlin"

WORKDIR /app

COPY --from=dev /app/api-server .

EXPOSE 8000

ENTRYPOINT ["./api-server"]
