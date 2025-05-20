// /pages/Patient/ElderlyMode.js
import React from "react";
import ElderlyModeCard from "../../components/ElderlyModeCard";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";

const ElderlyMode = () => {
  return (
    <div className="dashboard-container">
      <PatientSidebar />
      <div className="dashboard-content">
        <PatientNavbar />
        <div className="page-content">
          <h2>Elder-Friendly Mode</h2>
          <ElderlyModeCard />
        </div>
      </div>
    </div>
  );
};

export default ElderlyMode;
