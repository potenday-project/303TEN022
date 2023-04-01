from dotenv import dotenv_values
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import openai
import os

# Set OpenAI API key
config = dotenv_values("../.env")
openai.api_key = config["OPENAI_API_KEY"]

# Create FastAPI app
app = FastAPI()

# Define a home route
@app.get("/")
async def home():
    return {"Welcome to the DALL-E API"}

# Define a route for the DALL-E API
@app.post("/dalle")
async def dalle_api(prompt: str):
    try:
        # Generate image using OpenAI API
        response = openai.Image.create(
            prompt=prompt,
            n=1,
            size="256x256"
        )
        # Return image as binary data
        return response.choices[0].content
    except Exception as e:
        return JSONResponse(content={"error": str(e)})

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
