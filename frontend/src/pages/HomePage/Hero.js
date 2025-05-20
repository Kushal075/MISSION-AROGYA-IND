// src/pages/HomePage/Hero.js
import React from "react";
import "../../styles/HomePage/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1 className="hero-title">Caring for Your Health, Anytime, Anywhere</h1>
        <h2 className="hero-subtitle">Find and Book</h2>

        {/* Corrected Search Bar */}
        <div className="hero-search-wrapper">
          <input type="text" placeholder="Select Location" className="hero-location-input" />
          <input type="text" placeholder="Search Doctors, Hospitals..." className="hero-doctor-input" />
          <button className="hero-search-button">Search</button>
        </div>

        <div className="hero-popular-searches">
          <span>Popular searches:</span> 
          <a href="#">Dermatologist</a> 
          <a href="#">Pediatrician</a> 
          <a href="#">Gynecologist/Obstetrician</a> 
          <a href="#">Others</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
