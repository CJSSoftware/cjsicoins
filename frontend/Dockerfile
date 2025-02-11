# Use Node.js LTS image for building the React app
FROM node:20 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend files
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the built frontend
FROM nginx:latest AS production

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built frontend from the previous step
COPY --from=build /app/build .

# Copy the Nginx config file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose the ports
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
