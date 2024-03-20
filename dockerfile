# Use the official Node.js 14 image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the Next.js app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run","dev" ]
