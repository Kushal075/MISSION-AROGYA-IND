import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./DoctorProfile.css";

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState({
    name: "Dr. Smith",
    email: "drsmith@example.com",
    specialization: "Cardiology",
  });

  return (
    <div className="dashboard-container">
      <Sidebar role="Doctor" />
      <div className="dashboard-content">
        <h1>Doctor Profile</h1>
        <p><strong>Name:</strong> {doctor.name}</p>
        <p><strong>Email:</strong> {doctor.email}</p>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
      </div>
    </div>
  );
};

export default DoctorProfile;
