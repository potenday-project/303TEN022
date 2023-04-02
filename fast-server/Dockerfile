# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Expose the port the server will listen on
EXPOSE 8888

# Run the server using Uvicorn
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8888"]
