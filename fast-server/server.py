from dotenv import dotenv_values
from fastapi import FastAPI, Body
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import openai
import time

# Set OpenAI API key
config = dotenv_values(".env")
openai.api_key = config["OPENAI_API_KEY"]

# Create FastAPI app
app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a home route
@app.get("/")
async def home():
    return {"Welcome to the DALL-E API"}

# Define a route for the DALL-E API
@app.post("/dalle")
async def dalle_api(prompt: str = Body(..., embed=True)):
    print("Prompt:", prompt)
    try:
        # Generate image using OpenAI API
        # response = openai.Image.create(
        #     prompt=prompt,
        #     n=1,
        #     size="256x256"
        # )
        
        # Return image as binary data
        # print(response["data"][0]["url"])
        # return response["data"][0]["url"]
        
        return "https://raw.githubusercontent.com/potenday-project/303TEN022/main/fast-server/images/111.png"
    except Exception as e:
        return JSONResponse(content={"error": str(e)})
    
# Define a test API
@app.post("/test")
async def test_api(prompt: str = Body(..., embed=True)):
    print("Prompt:", prompt)
    try:
        time.sleep(3)
        fake_image = "https://cdn.mos.cms.futurecdn.net/oPDgNkqHzWuJrw5Q5DKmZ4-1920-80.jpg"
        return fake_image
    except Exception as e:
        return JSONResponse(content={"error": str(e)})

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
