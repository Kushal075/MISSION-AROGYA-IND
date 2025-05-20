import React from "react";
import "../styles/Cards.css";

const HealthEducationCard = () => {
  const handleLearn = () => {
    alert("📚 Opening health education portal...");
    // Redirect to education hub or display modal
  };

  return (
    <div className="dashboard-card" onClick={handleLearn}>
      <h3>📚 Health Education</h3>
      <p>Learn about diabetes, heart care, nutrition & more.</p>
    </div>
  );
};

export default HealthEducationCard;
