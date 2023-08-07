# Use the official Node.js 14 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Gatsby application
RUN npm run build

# Expose the port that the Gatsby application will run on
EXPOSE 8000

# Start the Gatsby development server
CMD ["npm", "start"]
WORKDIR /usr/share/nginx/html
# COPY --from=build /app/public .
ENTRYPOINT ["nginx","-g","daemon off;"]
