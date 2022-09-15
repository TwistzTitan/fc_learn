FROM golang:alpine as builder

WORKDIR /app

COPY  . .

RUN go build hello-world.go

FROM alpine

WORKDIR /root/

COPY --from=builder /app/hello-world ./

ENTRYPOINT [ "./hello-world" ]