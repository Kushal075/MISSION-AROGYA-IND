// /pages/Patient/SymptomChecker.js
import React from "react";
import SymptomCheckerCard from "../../components/SymptomCheckerCard";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";

const SymptomChecker = () => {
  return (
    <div className="dashboard-container">
      <PatientSidebar />
      <div className="dashboard-content">
        <PatientNavbar />
        <div className="page-content">
          <h2>Check Your Symptoms</h2>
          <SymptomCheckerCard />
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
