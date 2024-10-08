# Use Node.js as base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the app's port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]

