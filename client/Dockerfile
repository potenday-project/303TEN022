# Use an official Node.js runtime as a parent image
FROM node:16.17.1-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the rest of the application code to the container
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose port 3000 for the app to listen on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]