import React, { useState, useEffect } from "react";
import doctorsData from "../data/doctors"; // if data is in a separate file

function TestDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors(doctorsData); // Load your 468 doctors here
  }, []);

  const selectedSpecialization = "Dentist"; // This could be dynamic based on user filter

  const specializationCount = doctors.filter(
    (doc) => doc.specialization === selectedSpecialization
  ).length;

  return (
    <div>
      {/* Filter Bar Component Here */}

      {/* 👇 New lines you add after the filter bar */}
      <div style={{ padding: "1rem 2rem" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          {specializationCount} {selectedSpecialization}s available in Bangalore
        </h2>
        <p>Book appointments with minimum wait-time & verified doctor details</p>
      </div>

      {/* Rest of doctor list rendering */}
    </div>
  );
}

export default TestDoctors;
