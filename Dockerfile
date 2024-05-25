# Use an official Node.js runtime as the base image
FROM node:16.13.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Expose port 4000 to be accessible outside the container
EXPOSE 4000

# Command to run the application
CMD ["serve", "-s", "build", "-l", "4000"]
