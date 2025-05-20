import React, { useState } from "react";
import "../styles/Cards.css";

const ElderlyModeCard = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleMode = () => {
    setEnabled(!enabled);
    document.body.classList.toggle("elderly-mode");
  };

  return (
    <div className={`dashboard-card ${enabled ? "active-mode" : ""}`} onClick={toggleMode}>
      <h3>👵 Elderly Mode</h3>
      <p>{enabled ? "Disable" : "Enable"} big fonts and voice prompts.</p>
    </div>
  );
};

export default ElderlyModeCard;
