# Use the official Python image as the base image
FROM nikolaik/python-nodejs:python3.9-nodejs16-bullseye

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the container
COPY requirements.txt .

# Install the required packages
RUN pip install -r requirements.txt

# Copy the application code to the container
COPY . .

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Expose the default port for FastAPI
EXPOSE 8080

# Define the command to run the application
CMD ["uvicorn", "server:app", "--reload", "--host", "0.0.0.0", "--port=8000"]
