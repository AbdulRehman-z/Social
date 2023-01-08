#Base image
FROM node:alpine

ENV CI=true

# Set working directory
WORKDIR /usr/app

# Install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]