package main

import (
	"bytes"
	"encoding/json"
	"image"
	"image/png"
	"log"
	"net/http"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type DalleRequest struct {
	Text string `json:"text"`
	Size *int   `json:"size"`
}

type DalleResponse struct {
	Data string `json:"data"`
}

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

	// Define a DALL-E endpoint
	router.POST("/dalle", func(c *gin.Context) {
		// Parse the request body
		var request DalleRequest
		if err := c.ShouldBindJSON(&request); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// Log the request data
		log.Printf("Received DALL-E request: %+v", request)

		// Set default size to 256 if it is not provided
		if request.Size == nil {
			size := 256
			request.Size = &size
		}

		// Create the request to the DALL-E API
		apiUrl := "https://api.openai.com/v1/images/generations"
		data := gin.H{
			"prompt":          request.Text,
			"n":               1, // number of images to generate
			"size":            request.Size,
			"response_format": "url",
		}
		payload, _ := json.Marshal(data)
		req, _ := http.NewRequest("POST", apiUrl, bytes.NewBuffer(payload))
		req.Header.Set("Content-Type", "application/json")
		req.Header.Set("Authorization", "Bearer YOUR_API_KEY_HERE")

		// Send the request to the DALL-E API
		client := &http.Client{}
		resp, err := client.Do(req)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer resp.Body.Close()

		// Decode the response into an image
		var response DalleResponse
		if err := json.NewDecoder(resp.Body).Decode(&response); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		imageUrl := response.Data
		imageUrl = strings.Replace(imageUrl, "https://api.openai.com/", "", -1)
		imageUrl = "https://image-proxy-service.herokuapp.com/" + imageUrl
		imageResp, err := http.Get(imageUrl)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer imageResp.Body.Close()

		// Decode the image into a PNG
		img, _, err := image.Decode(imageResp.Body)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		// Return the image to the client
		buffer := new(bytes.Buffer)
		if err := png.Encode(buffer, img); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.Data(http.StatusOK, "image/png", buffer.Bytes())
	})

	// Start the server
	if err := router.Run(":8080"); err != nil {
		panic(err)
	}
}
