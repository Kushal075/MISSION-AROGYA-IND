import React from "react";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSidebar from "../../components/PatientSidebar";

const PatientAppointments = () => {
  return (
    <div className="flex h-screen">
      <PatientSidebar />  {/* Updated to use PatientSidebar */}
      <div className="flex-1 flex flex-col">
        <PatientNavbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
          <p>View your upcoming and past doctor appointments.</p>
          {/* Later, add appointment fetching logic */}
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
