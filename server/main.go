package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// Create a new Gin router
	router := gin.Default()

	// Define a "Hello World" endpoint
	router.GET("/hello", func(c *gin.Context) {
		c.String(http.StatusOK, "World")
	})

	// Start the server
	if err := router.Run(":8080"); err != nil {
		panic(err)
	}
}
