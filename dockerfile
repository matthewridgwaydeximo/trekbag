# Use the official lightweight Node.js 20-alpine image.
# https://hub.docker.com/_/node
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy local code to the container image.
COPY . .

EXPOSE 5000

# Run the web service on container startup.
CMD [ "npm", "run", "dev" ]