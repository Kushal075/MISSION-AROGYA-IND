// /pages/Patient/HealthEducation.js
import React from "react";
import HealthEducationCard from "../../components/HealthEducationCard";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";

const HealthEducation = () => {
  return (
    <div className="dashboard-container">
      <PatientSidebar />
      <div className="dashboard-content">
        <PatientNavbar />
        <div className="page-content">
          <h2>Health Learning Resources</h2>
          <HealthEducationCard />
        </div>
      </div>
    </div>
  );
};

export default HealthEducation;
