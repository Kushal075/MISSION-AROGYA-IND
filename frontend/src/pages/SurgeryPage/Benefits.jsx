import React from 'react';
import '../../styles/SurgeryPage/Surgery.css';

const benefitsData = [
  {
    title: "Expert Surgeons",
    description: "Qualified & Experienced Specialists",
    icon: require('../../assets/SurgeryPage/benefits/expert_surgeons.png'),
  },
  {
    title: "Advanced Surgical Procedures",
    description: "Employing Modern & Cutting-edge Medical Technologies",
    icon: require('../../assets/SurgeryPage/benefits/advanced_procedures.png'),
  },
  {
    title: "Personal Care Assistants",
    description: "Assistance at every step of your journey\nPost-Operative Care & Support",
    icon: require('../../assets/SurgeryPage/benefits/personal_care.png'),
  },
  {
    title: "Financial Aid & Assistance",
    description: "100% transparency in Pricing and No-Cost EMI Options available",
    icon: require('../../assets/SurgeryPage/benefits/financial_aid.png'),
  },
];

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-title">AyuRaksha Care Benefits</h2>
      <div className="benefits-list">
        {benefitsData.map((item, index) => (
          <div className="benefit-item" key={index}>
            <img src={item.icon} alt={item.title} className="benefit-icon" />
            <div className="benefit-text">
              <h3 className="benefit-heading">{item.title}</h3>
              <p className="benefit-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
