import React, { useState } from "react";
import '../../pages/DoctorSearch/DoctorSearchPage.css';

const DoctorFilters = () => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [allFiltersOpen, setAllFiltersOpen] = useState(false);
  const [relevanceOpen, setRelevanceOpen] = useState(false);

  const toggleDropdown = (filter) => {
    setGenderOpen(filter === "gender" ? !genderOpen : false);
    setExperienceOpen(filter === "experience" ? !experienceOpen : false);
    setAllFiltersOpen(filter === "allFilters" ? !allFiltersOpen : false);
    setRelevanceOpen(filter === "relevance" ? !relevanceOpen : false);
  };

  const renderDivider = () => <hr />;

  return (
    <div className="filter-bar-wrapper">
      <div className="filter-bar">
        {/* Gender Filter */}
        <div className="filter-card" onClick={() => toggleDropdown("gender")}>
          Gender ▾
          {genderOpen && (
            <div className="dropdown">
              <div className="dropdown-item">
                <span>Male</span>
                <input type="radio" name="gender" />
              </div>
              <div className="dropdown-item">
                <span>Female</span>
                <input type="radio" name="gender" />
              </div>
              {renderDivider()}
            </div>
          )}
        </div>

        {/* Experience Filter */}
        <div className="filter-card" onClick={() => toggleDropdown("experience")}>
          Experience ▾
          {experienceOpen && (
            <div className="dropdown">
              <div className="dropdown-item">
                <span>0-5 years</span>
                <input type="radio" name="experience" />
              </div>
              <div className="dropdown-item">
                <span>5-10 years</span>
                <input type="radio" name="experience" />
              </div>
              <div className="dropdown-item">
                <span>10+ years</span>
                <input type="radio" name="experience" />
              </div>
              {renderDivider()}
            </div>
          )}
        </div>

        {/* All Filters */}
        <div className="filter-card" onClick={() => toggleDropdown("allFilters")}>
          All Filters ▾
        </div>

        {/* Relevance */}
        <div className="filter-card" onClick={() => toggleDropdown("relevance")}>
          Relevance ▾
          {relevanceOpen && (
            <div className="dropdown">
              <div className="dropdown-item">
                <span>Most Relevant</span>
                <input type="radio" name="relevance" />
              </div>
              <div className="dropdown-item">
                <span>Highest Rated</span>
                <input type="radio" name="relevance" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expanded All Filters Section */}
      {allFiltersOpen && (
        <div className="all-filters-section">
          {/* Associated Hospitals */}
          <div className="filters-group">
            <strong>Associated with top hospitals</strong>
            <div className="filter-inline"><span>Manipal Hospitals</span><input type="checkbox" /></div>
            <div className="filter-inline"><span>Apollo White Dental</span><input type="checkbox" /></div>
          </div>

          {/* Fees */}
          <div className="filters-group">
            <strong>Fees</strong>
            <div className="filter-inline"><span>₹0 - ₹500</span><input type="radio" name="fees" /></div>
            <div className="filter-inline"><span>Above ₹500</span><input type="radio" name="fees" /></div>
            <div className="filter-inline"><span>Above ₹1000</span><input type="radio" name="fees" /></div>
            <div className="filter-inline"><span>Above ₹2000</span><input type="radio" name="fees" /></div>
          </div>

          {/* Availability */}
          <div className="filters-group">
            <strong>Availability</strong>
            <div className="filter-inline"><span>Next 4 hours</span><input type="radio" name="availability" /></div>
            <div className="filter-inline"><span>Today</span><input type="radio" name="availability" /></div>
            <div className="filter-inline"><span>Tomorrow</span><input type="radio" name="availability" /></div>
            <div className="filter-inline"><span>Next 7 days</span><input type="radio" name="availability" /></div>
          </div>

          {/* Consult Type */}
          <div className="filters-group">
            <strong>Consult Type</strong>
            <div className="filter-inline"><span>Video Consult</span><input type="radio" name="consult" /></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorFilters;
