/**
 * Main App Component
 * ==================
 * This is the root component of the React application that sets up routing
 * and navigation. It provides a navigation bar with links to the survey form
 * and results page, and defines routes for:
 * - "/" - Survey Form page
 * - "/results" - View all survey results
 * - "/edit/:id" - Edit a specific survey by ID
 * 
 * The component uses React Router for client-side navigation and provides
 * a consistent layout and styling across all pages.
 * 
 * Authors:
 * Aahan Jain - G01522443
 * Aditya Samir Vaidya - G01501989
 */

import { Routes, Route, Link } from "react-router-dom";
import SurveyForm from "./components/SurveyForm";
import SurveyResults from "./components/SurveyResults";
import EditSurvey from "./components/EditSurvey";

function App() {
  return (
    <div
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Simple Navigation */}
      <nav
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>📝 Survey Form</Link>
        <Link to="/results" style={{ textDecoration: "none" }}>📄 View Results</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SurveyForm />} />
        <Route path="/results" element={<SurveyResults />} />
        <Route path="/edit/:id" element={<EditSurvey />} />
      </Routes>
    </div>
  );
}

export default App;
