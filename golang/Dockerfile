FROM golang:alpine as builder

WORKDIR /app

COPY  . .

RUN go build hello-world.go

FROM scratch

COPY --from=builder /app/hello-world ./

ENTRYPOINT [ "./hello-world" ]