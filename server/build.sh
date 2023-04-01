export PATH=$(go env GOPATH)/bin:$PATH
go mod tidy
go mod vendor