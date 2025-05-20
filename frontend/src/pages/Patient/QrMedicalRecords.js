// /pages/Patient/QrMedicalRecords.js
import React from "react";
import QrMedicalRecordCard from "../../components/QrMedicalRecordCard";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";

const QrMedicalRecords = () => {
  return (
    <div className="dashboard-container">
      <PatientSidebar />
      <div className="dashboard-content">
        <PatientNavbar />
        <div className="page-content">
          <h2>My Health Records (QR / PDF)</h2>
          <QrMedicalRecordCard />
        </div>
      </div>
    </div>
  );
};

export default QrMedicalRecords;
