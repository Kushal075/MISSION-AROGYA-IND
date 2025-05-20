import React from "react";
import { Link } from "react-router-dom";
import "../styles/PatientSidebar.css"; 

const PatientSidebar = () => {
  return (
    <aside className="patient-sidebar">
      <ul>
        <li><Link to="/patient-dashboard">🏠 Dashboard</Link></li>
        <li><Link to="/find-doctor">🔎 Find Doctor / Hospital</Link></li>
        <li><Link to="/video-consultation">📹 Video Call</Link></li>
        <li><Link to="/appointments">📅 My Appointments</Link></li>
        <li><Link to="/health-seva">💙 Health Seva</Link></li>
        <li><Link to="/mobile-van">🚐 Mobile Van Booking</Link></li>
        <li><Link to="/medical-records">📄 Medical Records</Link></li>
        <li><Link to="/insurance">🏥 Govt. Health Schemes</Link></li>
      </ul>
    </aside>
  );
};

export default PatientSidebar;
