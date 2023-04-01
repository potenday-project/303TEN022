# Use the official Golang image as the parent image
FROM golang:1.20

# Set the working directory inside the container
WORKDIR /go/src/app

# Copy the source code into the container
COPY . .

RUN bash build.sh
# Build the Go binary inside the container
RUN go build -o main .

# Expose port 8080 for the container
EXPOSE 8080

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ./docker-entrypoint.sh
