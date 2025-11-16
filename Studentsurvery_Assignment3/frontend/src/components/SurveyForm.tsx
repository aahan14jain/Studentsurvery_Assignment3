import React, { useState, FormEvent, ChangeEvent } from "react";
import { API_URL } from "../config";

interface FormData {
  first_name: string;
  last_name: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
  telephone: string;
  email: string;
  date_of_survey: string;
  liked_most: string;
  interested_in: string;
  recommendation: string;
}

export default function SurveyForm() {
  const [formData, setFormData] = useState<FormData>({
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
    recommendation: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/survey`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert("Survey submitted successfully!");
    console.log(result);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ marginBottom: "25px", textAlign: "center", color: "#333" }}>
        Student Survey Form
      </h2>

      {/* ---- Input fields ---- */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="first_name" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          First Name
        </label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          autoComplete="given-name"
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="last_name" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          Last Name
        </label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          autoComplete="family-name"
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="street_address" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          Street Address
        </label>
        <input
          id="street_address"
          type="text"
          name="street_address"
          value={formData.street_address}
          onChange={handleChange}
          autoComplete="street-address"
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="city" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          City
        </label>
        <input
          id="city"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          autoComplete="address-level2"
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="state" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          State
        </label>
        <input
          id="state"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          autoComplete="address-level1"
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="zip_code" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          Zip Code
        </label>
        <input
          id="zip_code"
          type="text"
          name="zip_code"
          value={formData.zip_code}
          onChange={handleChange}
          autoComplete="postal-code"
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="telephone" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          Telephone
        </label>
        <input
          id="telephone"
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          autoComplete="tel"
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="date_of_survey" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          Date of Survey
        </label>
        <input
          id="date_of_survey"
          type="date"
          name="date_of_survey"
          value={formData.date_of_survey}
          onChange={handleChange}
          autoComplete="off"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="liked_most" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          What you liked most about the campus <span style={{ color: "#888", fontSize: "14px", fontWeight: "400" }}>(students, location, campus, atmosphere, dorm rooms, sports)</span>
        </label>
        <select
          id="liked_most"
          name="liked_most"
          value={formData.liked_most}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        >
          <option value="">Select an option</option>
          <option value="students">Students</option>
          <option value="location">Location</option>
          <option value="campus">Campus</option>
          <option value="atmosphere">Atmosphere</option>
          <option value="dorm rooms">Dorm Rooms</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="interested_in" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          How you became interested in university <span style={{ color: "#888", fontSize: "14px", fontWeight: "400" }}>(friends, television, Internet, other)</span>
        </label>
        <select
          id="interested_in"
          name="interested_in"
          value={formData.interested_in}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        >
          <option value="">Select an option</option>
          <option value="friends">Friends</option>
          <option value="television">Television</option>
          <option value="Internet">Internet</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="recommendation" style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "#555" }}>
          Likelihood of recommending this school to other prospective students <span style={{ color: "#888", fontSize: "14px", fontWeight: "400" }}>(Very Likely, Likely, Unlikely)</span>
        </label>
        <select
          id="recommendation"
          name="recommendation"
          value={formData.recommendation}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none"
          }}
        >
          <option value="">Select an option</option>
          <option value="Very Likely">Very Likely</option>
          <option value="Likely">Likely</option>
          <option value="Unlikely">Unlikely</option>
        </select>
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500"
        }}
      >
        Submit Survey
      </button>
    </form>
  );
}

