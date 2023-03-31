package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Create a new Gin router
	router := gin.Default()

	// Add CORS middleware
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	router.Use(cors.New(config))

	// Define a "Hello World" endpoint
	router.GET("/hello", func(c *gin.Context) {
		c.String(http.StatusOK, "World")
	})

	// Start the server
	if err := router.Run(":8080"); err != nil {
		panic(err)
	}
}
