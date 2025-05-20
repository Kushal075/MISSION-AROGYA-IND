import React from "react";
import Sidebar from "../../components/Sidebar";
import StatsCard from "../../components/StatsCard";
import "./DoctorDashboard.css"; // Styles for this page

const DoctorDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar role="Doctor" />
      <div className="dashboard-content">
        <h1>Welcome, Doctor</h1>
        <div className="stats-container">
          <StatsCard title="Total Appointments" value="25" />
          <StatsCard title="Pending Appointments" value="5" />
          <StatsCard title="Completed Appointments" value="20" />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
