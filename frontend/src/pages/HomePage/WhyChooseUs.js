import React from "react";
import "../../styles/HomePage/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      <h2 className="why-choose-us-title">Why Choose Us</h2>
      <div className="stats-row">
        <div className="stat-box">
          <h3>2,00,000+</h3>
          <p>Happy Users</p>
        </div>
        <div className="stat-box">
          <h3>20,000+</h3>
          <p>Verified Doctors</p>
        </div>
        <div className="stat-box">
          <h3>25+</h3>
          <p>Specialities</p>
        </div>
        <div className="stat-box">
          <h3>4.5 / 5</h3>
          <p>App Rating</p>
        </div>
        <div className="stat-box">
      <h3>2,000+</h3>
      <p>Patients Cured</p>
    </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
