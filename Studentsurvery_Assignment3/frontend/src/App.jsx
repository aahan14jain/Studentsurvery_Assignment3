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
