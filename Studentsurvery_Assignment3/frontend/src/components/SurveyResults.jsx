/**
 * Survey Results Component
 * ========================
 * This component displays all submitted surveys in a table format.
 * It fetches survey data from the backend API and provides functionality to:
 * - View all survey submissions in a table
 * - Edit a survey (navigates to edit page)
 * - Delete a survey (with confirmation dialog)
 * 
 * Features:
 * - Loading state while fetching data
 * - Error handling and display
 * - Responsive table layout
 * - Navigation to edit page for each survey
 * 
 * The component automatically fetches surveys when mounted and refreshes
 * after delete operations.
 * 
 * Authors:
 * Aahan Jain - G01522443
 * Aditya Samir Vaidya - G01501989
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

export default function SurveyResults() {
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all surveys
  const fetchSurveys = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(`${API_URL}/surveys`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched surveys:", data);
      setSurveys(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching surveys:", error);
      setError("Failed to load surveys. Make sure the backend is running on port 8000.");
    } finally {
      setLoading(false);
    }
  };

  // Delete survey
  const handleDelete = async (id) => {
    if (!window.confirm(`Are you sure you want to delete survey #${id}?`)) return;

    try {
      const response = await fetch(`${API_URL}/survey/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Survey deleted successfully!");
        fetchSurveys();
      } else {
        const error = await response.json();
        alert(`Error: ${error.detail || "Failed to delete survey"}`);
      }
    } catch (error) {
      console.error("Error deleting survey:", error);
      alert("Failed to delete survey. Please try again.");
    }
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p>Loading surveys...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
          textAlign: "center",
          color: "red",
        }}
      >
        <p>{error}</p>
        <button
          onClick={fetchSurveys}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#000000",
          fontWeight: "600",
        }}
      >
        All Surveys
      </h2>

      {surveys.length === 0 ? (
        <p style={{ textAlign: "center", color: "#000000" }}>No surveys recorded yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>City</th>
              <th style={thStyle}>State</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {surveys.map((s) => (
              <tr key={s.id}>
                <td style={tdStyle}>{s.id}</td>
                <td style={tdStyle}>
                  {s.first_name} {s.last_name}
                </td>
                <td style={tdStyle}>{s.city}</td>
                <td style={tdStyle}>{s.state}</td>
                <td style={tdStyle}>{s.email}</td>
                <td style={tdStyle}>
                  <button
                    style={editBtn}
                    onClick={() => navigate(`/edit/${s.id}`)}
                  >
                    Edit
                  </button>
                  <button style={deleteBtn} onClick={() => handleDelete(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Styles
const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "left",
  fontWeight: "600",
  color: "#000000",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  color: "#000000",
};

const editBtn = {
  padding: "6px 12px",
  marginRight: "8px",
  background: "#0275d8",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "6px 12px",
  background: "#d9534f",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
