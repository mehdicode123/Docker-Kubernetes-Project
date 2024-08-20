# Use official Node.js image as a base image
FROM node:12

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your application runs on (adjust if necessary)
EXPOSE 3000

# Command to run the seed scripts and then start the application
CMD ["npm", "start"]
