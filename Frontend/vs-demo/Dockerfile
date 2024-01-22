# Dockerfile for angular frontend

# Nodejs base image
FROM node:21-alpine3.18

# Setting working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose default port 4200
EXPOSE 4200

# Define the command to start the Angular development server
CMD ["npm", "start"]