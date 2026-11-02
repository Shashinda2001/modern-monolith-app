# 1. Base Image: Use a lightweight official Node.js 20 Linux image
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy dependency definitions first (leverages Docker cache)
COPY package*.json ./

# 4. Install production dependencies cleanly
RUN npm ci --only=production

# 5. Copy the rest of the application code
COPY src/ ./src/

# 6. Expose port 3000 to the container network
EXPOSE 3000

# 7. Define the default startup command
CMD ["node", "src/server.js"]