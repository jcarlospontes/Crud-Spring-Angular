FROM golang:1.20 AS build

WORKDIR /app

COPY . .

# Compilação estática
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags "-s -w" -o main .

# Fase de execução
FROM scratch

COPY --from=build /app/main /

CMD ["/main"]
