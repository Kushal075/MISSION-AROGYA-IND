import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Make sure Sidebar.css also exists

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/doctor-dashboard">Dashboard</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
