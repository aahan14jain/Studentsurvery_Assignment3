// API configuration
// In Kubernetes, nginx will proxy /api/ requests to the backend service
// For local development, it defaults to localhost
// When running in Kubernetes, use /api as the base URL (nginx will proxy it)
export const API_URL = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://127.0.0.1:8000' 
    : '/api');

