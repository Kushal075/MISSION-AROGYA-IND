import React from 'react';
import '../../styles/SurgeryPage/Surgery.css';
import icon1 from '../../assets/SurgeryPage/howItWorks/step1.png'; // replace with actual paths
import icon2 from '../../assets/SurgeryPage/howItWorks/step2.png';
import icon3 from '../../assets/SurgeryPage/howItWorks/step3.png';
import icon4 from '../../assets/SurgeryPage/howItWorks/step4.png';
import icon5 from '../../assets/SurgeryPage/howItWorks/step5.png';
import icon6 from '../../assets/SurgeryPage/howItWorks/step6.png';
import icon7 from '../../assets/SurgeryPage/howItWorks/step7.png';

const steps = [
  {
    icon: icon1,
    text: "Connect with us. A dedicated Practo Care Assistant will guide you at every step",
  },
  {
    icon: icon2,
    text: "Schedule a consultation with an expert Practo Care Doctor near you",
  },
  {
    icon: icon3,
    text: "Get Diagnosis & Treatment advice from our expert doctors",
  },
  {
    icon: icon4,
    text: "In some cases, a procedure or a surgery might be recommended",
  },
  {
    icon: icon5,
    text: "Choose one of our partner hospitals that meets your requirements",
  },
  {
    icon: icon6,
    text: "Get complete assistance from Admission to Discharge\nTravel, Insurance Paperwork, Admission Procedure, Discharge Formalities, Pre-surgery tests",
  },
  {
    icon: icon7,
    text: "Receive Post-Operative support and Follow-up Consultations",
  },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2 className="how-it-works-title">How it works</h2>
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="step-icon-container">
              <img src={step.icon} alt={`Step ${index + 1}`} className="step-icon" />
              {index < steps.length - 1 && <div className="dotted-line" />}
            </div>
            <div className="step-text">{step.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
