// /pages/Patient/EmergencyHelp.js
import React from "react";
import EmergencyHelpCard from "../../components/EmergencyHelpCard";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";

const EmergencyHelp = () => {
  return (
    <div className="dashboard-container">
      <PatientSidebar />
      <div className="dashboard-content">
        <PatientNavbar />
        <div className="page-content">
          <h2>Emergency Assistance</h2>
          <EmergencyHelpCard />
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelp;
