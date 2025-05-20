import React from "react";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";

const PatientMedicalHistory = () => {
  return (
    <div className="flex h-screen">
      <PatientSidebar />  {/* Corrected Sidebar for patients */}
      <div className="flex-1 flex flex-col">
        <PatientNavbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Medical History</h1>
        </div>
      </div>
    </div>
  );
};


export default PatientMedicalHistory;
