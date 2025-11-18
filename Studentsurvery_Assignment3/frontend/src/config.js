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
// In Kubernetes, nginx will proxy /api/ requests to the backend service
// For local development, it defaults to localhost
// When running in Kubernetes, use /api as the base URL (nginx will proxy it)
export const API_URL = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://127.0.0.1:8000' 
    : '/api');

