import React from "react";

const AppointmentCard = ({ doctor, date, status }) => {
  return (
    <div className="appointment-card">
      <h3>{doctor}</h3>
      <p>Date: {date}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default AppointmentCard;
