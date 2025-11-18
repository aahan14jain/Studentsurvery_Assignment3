/**
 * Main Entry Point for React Application
 * =======================================
 * This is the entry point of the React frontend application.
 * It renders the root App component wrapped in BrowserRouter for client-side routing,
 * and mounts the application to the DOM element with id "root".
 * 
 * The application uses React Router for navigation between different pages
 * (Survey Form, Results, Edit Survey).
 * 
 * Authors:
 * Aahan Jain - G01522443
 * Aditya Samir Vaidya - G01501989
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
