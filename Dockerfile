# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose port and run the app
EXPOSE 3000
CMD ["npm", "start"]
