// src/pages/DoctorSearch/DoctorSearchPage.jsx
import React from "react";
import DoctorSearchNavbar from "../../components/DoctorSearch/DoctorSearchNavbar";
import DoctorFilters from "../../components/DoctorSearch/DoctorFilters"; // ✅ import this

const DoctorSearchPage = () => {
  const handleSearch = (location, specialization) => {
    console.log("🔍 Search Triggered:", location, specialization);
    // In the real app, you'd fetch doctors here using these values.
  };

  return (
    <div>
      {/* Top search bar */}
      <DoctorSearchNavbar onSearch={handleSearch} />

      {/* ✅ Dark blue filter bar */}
      <DoctorFilters />

      {/* Dummy content for now */}
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Doctor List will appear here...
      </p>
    </div>
  );
};

export default DoctorSearchPage;
