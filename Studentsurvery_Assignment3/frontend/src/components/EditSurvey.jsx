import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditSurvey() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: "",
    telephone: "",
    email: "",
    date_of_survey: "",
    liked_most: "",
    interested_in: "",
    recommendation: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load survey data
  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/survey/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        } else {
          setError("Survey not found");
        }
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to load survey");
      } finally {
        setLoading(false);
      }
    };

    fetchSurvey();
  }, [id]);

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`http://127.0.0.1:8000/survey/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Survey updated successfully!");
        navigate("/results");
      } else {
        const err = await response.json();
        alert(`Error: ${err.detail}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to update survey.");
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (error)
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p style={{ color: "red" }}>{error}</p>
        <button
          onClick={() => navigate("/results")}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "25px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Edit Survey #{id}
      </h2>

      {Object.keys(formData).map((key) => (
        <div key={key} style={{ marginBottom: "18px" }}>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            {key.replace(/_/g, " ").toUpperCase()}
          </label>

          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
        </div>
      ))}

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Update Survey
      </button>
    </form>
  );
}

