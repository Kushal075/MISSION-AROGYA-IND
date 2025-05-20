import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./DoctorPatients.css";

const DoctorPatients = () => {
  const [patients] = useState([
    { id: 1, name: "John Doe", age: 30, lastVisit: "2025-03-15" },
    { id: 2, name: "Jane Smith", age: 27, lastVisit: "2025-02-28" },
  ]);

  return (
    <div className="dashboard-container">
      <Sidebar role="Doctor" />
      <div className="dashboard-content">
        <h1>My Patients</h1>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.name} - {patient.age} years old (Last Visit: {patient.lastVisit})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorPatients;
