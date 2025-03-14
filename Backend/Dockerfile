# Use official Node.js LTS image
FROM node:18-alpine  

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source files to container
COPY . .

# Expose port 8080 for the backend API
EXPOSE 8080

# Start the backend server
CMD ["node", "server.js"]
