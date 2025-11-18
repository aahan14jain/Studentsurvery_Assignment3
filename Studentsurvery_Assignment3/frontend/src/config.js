/**
 * API Configuration
 * =================
 * This module exports the base API URL for backend communication.
 * 
 * The API URL is determined based on the environment:
 * - If VITE_API_URL environment variable is set, it uses that value
 * - For local development (localhost/127.0.0.1), it defaults to http://127.0.0.1:8000
 * - In Kubernetes/production, it uses '/api' which is proxied by nginx to the backend service
 * 
 * This allows the same frontend code to work in both development and production environments.
 * 
 * Authors:
 * Aahan Jain - G01522443
 * Aditya Samir Vaidya - G01501989
 */

// API configuration
// Simple and reliable: Use /api for all production builds (Docker/Kubernetes)
// Only use direct backend URL for local Vite dev server (port 5174)
const getApiUrl = () => {
  // If explicitly set via environment variable, use that (highest priority)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // For production builds (Docker/Kubernetes), always use /api
  // nginx will proxy /api/ requests to the backend service
  if (import.meta.env.MODE === 'production') {
    return '/api';
  }
  
  // For local development (Vite dev server on port 5174), use direct backend URL
  const port = window.location.port;
  if (port === '5174') {
    return 'http://127.0.0.1:8000';
  }
  
  // Default: Use /api for any other case (safer for production)
  return '/api';
};

export const API_URL = getApiUrl();

