# Use the correct Node.js image for your system
FROM node:18-alpine 

# Set the working directory inside the container
WORKDIR /app 

# Install dependencies required for npm packages
RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json before running npm install
COPY package*.json ./ 

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project to the container
COPY . . 

# Expose the backend port
EXPOSE 5000 

# Start the backend server
CMD ["node", "server.js"]
