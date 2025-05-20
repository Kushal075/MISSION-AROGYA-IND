import React, { useState } from "react";

const DoctorSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by Doctor, Hospital, or Specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default DoctorSearch;
