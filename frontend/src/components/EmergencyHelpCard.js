import React from "react";
import "../styles/Cards.css";

const EmergencyHelpCard = () => {
  const handleEmergencyClick = () => {
    alert("🚨 Emergency help requested! Your location and details have been shared.");
    // Here, you would trigger a backend or alert service
  };

  return (
    <div className="dashboard-card emergency-card" onClick={handleEmergencyClick}>
      <h3>🚨 Emergency Help</h3>
      <p>Click to send immediate alert to the nearest hospital.</p>
    </div>
  );
};

export default EmergencyHelpCard;
