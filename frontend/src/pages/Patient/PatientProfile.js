import React from "react";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";

const PatientProfile = () => {
  return (
    <div className="flex h-screen">
      <PatientSidebar />  {/* Updated to use PatientSidebar */}
      <div className="flex-1 flex flex-col">
        <PatientNavbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">My Profile</h1>
          <p>View and update your personal information.</p>
          {/* Later, we will add a profile edit feature */}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
