import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./DoctorAppointments.css";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "John Doe", date: "2025-04-01", status: "Pending" },
    { id: 2, patient: "Jane Smith", date: "2025-04-02", status: "Completed" },
  ]);

  return (
    <div className="dashboard-container">
      <Sidebar role="Doctor" />
      <div className="dashboard-content">
        <h1>Appointments</h1>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id}>
                <td>{appt.patient}</td>
                <td>{appt.date}</td>
                <td>{appt.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorAppointments;
