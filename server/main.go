package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// Create a new Gin router
	r := gin.Default()

	// Define a "Hello World" endpoint
	r.GET("/hello", func(c *gin.Context) {
		c.String(http.StatusOK, "World")
	})

	// Start the server
	if err := r.Run(); err != nil {
		panic(err)
	}
}
