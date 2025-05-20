import React from "react";
import "../styles/Cards.css";

const QrMedicalRecordCard = () => {
  const handleDownload = () => {
    alert("📄 Medical records downloaded as QR/PDF.");
    // Trigger download logic or QR display here
  };

  return (
    <div className="dashboard-card" onClick={handleDownload}>
      <h3>📄 Medical Records QR</h3>
      <p>Download or share your records securely via QR code.</p>
    </div>
  );
};

export default QrMedicalRecordCard;
