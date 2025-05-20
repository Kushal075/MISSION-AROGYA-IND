import React from "react";
import "../../styles/SurgeryPage/Surgery.css";
import Navbar from "../../components/HomePage/Navbar";
import backgroundImage from "../../assets/SurgeryPage/back.png";

const SurgeryHeader = () => {
  return (
    <div className="surgery-header-wrapper">
      <Navbar />
      <div className="surgery-header">
        <img
          src={backgroundImage}
          alt="Surgery Background"
          className="surgery-background"
        />
        <div className="surgery-header-caption">
          <h1 className="surgery-title">AyuRaksha</h1>
          <p className="surgery-subtitle">
            End to end care from <br />
            Top Surgeons at our Practo Care Clinics
          </p>
          <p className="surgery-description">
            Talk to our care expert today to book your consultation. <br />
            All insurance accepted & No-cost EMI available.
          </p>
          <div className="phone-box">
            Reach out to us on&nbsp;&nbsp;|&nbsp;&nbsp;08045685554
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgeryHeader;
