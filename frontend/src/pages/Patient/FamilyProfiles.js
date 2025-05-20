// /pages/Patient/FamilyProfiles.js
import React from "react";
import FamilyProfileCard from "../../components/FamilyProfileCard";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";

const FamilyProfiles = () => {
  return (
    <div className="dashboard-container">
      <PatientSidebar />
      <div className="dashboard-content">
        <PatientNavbar />
        <div className="page-content">
          <h2>Family Health Profiles</h2>
          <FamilyProfileCard />
        </div>
      </div>
    </div>
  );
};

export default FamilyProfiles;
