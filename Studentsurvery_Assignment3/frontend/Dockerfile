# Step 1: Build the frontend
FROM node:20 AS build

# Set build argument for API URL - always use /api for production (Docker/Kubernetes)
# nginx will proxy /api/ requests to the backend service
ARG VITE_API_URL=/api
ENV VITE_API_URL=$VITE_API_URL

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Set default environment variables for backend
ENV BACKEND_HOST=survey-backend-service
ENV BACKEND_PORT=8000

# Copy build output to Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration template
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expose nginx port
EXPOSE 80

# Nginx will automatically substitute environment variables in .template files
CMD ["nginx", "-g", "daemon off;"]
