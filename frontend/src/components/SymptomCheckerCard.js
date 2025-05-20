import React from "react";
import "../styles/Cards.css";

const SymptomCheckerCard = () => {
  const handleCheckSymptoms = () => {
    alert("🤖 Redirecting to symptom checker...");
    // Open symptom checker or route to another page
  };

  return (
    <div className="dashboard-card" onClick={handleCheckSymptoms}>
      <h3>🤖 Symptom Checker</h3>
      <p>Check symptoms & get suggestions on what to do next.</p>
    </div>
  );
};

export default SymptomCheckerCard;
