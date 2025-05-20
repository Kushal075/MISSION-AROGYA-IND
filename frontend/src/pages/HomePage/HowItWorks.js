import React from 'react';
import selectIcon from '../../assets/HomePage/howitworks/select.png';
import consultIcon from '../../assets/HomePage/howitworks/consulting.png';
import prescriptionIcon from '../../assets/HomePage/howitworks/prescription.png';
import '../../styles/HomePage/HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps-container">

        <div className="step">
          <img src={selectIcon} alt="Select" className="step-icon" />
          <p className="step-text">Select a speciality or symptom</p>
        </div>

        <div className="line" />

        <div className="step">
          <img src={consultIcon} alt="Consult" className="step-icon" />
          <p className="step-text">Audio/video call with a verified doctor</p>
        </div>

        <div className="line" />

        <div className="step">
          <img src={prescriptionIcon} alt="Prescription" className="step-icon" />
          <p className="step-text">Get a digital prescription & a free follow-up</p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
