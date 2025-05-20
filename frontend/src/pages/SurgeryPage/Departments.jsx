import React from 'react';
import '../../styles/SurgeryPage/Surgery.css';
import generalSurgeryIcon from '../../assets/SurgeryPage/departments/general_surgery.png';
import proctologyIcon from '../../assets/SurgeryPage/departments/proctology.png';
import ophthalmologyIcon from '../../assets/SurgeryPage/departments/ophthalmology.png';
import urologyIcon from '../../assets/SurgeryPage/departments/urology.png';
import cosmeticIcon from '../../assets/SurgeryPage/departments/cosmetic.png';
import orthopedicsIcon from '../../assets/SurgeryPage/departments/orthopedics.png';
import entIcon from '../../assets/SurgeryPage/departments/ent.png'; // NEW
import gastroIcon from '../../assets/SurgeryPage/departments/gastroenterology.png'; // NEW

const Departments = () => {
  const departments = [
    { name: "General Surgery", icon: generalSurgeryIcon },
    { name: "Proctology", icon: proctologyIcon },
    { name: "Ophthalmology", icon: ophthalmologyIcon },
    { name: "Urology", icon: urologyIcon },
    { name: "Cosmetic", icon: cosmeticIcon },
    { name: "Orthopedics", icon: orthopedicsIcon },
    { name: "Otolaryngology", icon: entIcon },
    { name: "Gastroenterology", icon: gastroIcon },
  ];

  return (
    <div className="departments-box">
      <h2 className="departments-title">Our Departments</h2>
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div key={index} className="department-item">
            <img src={dept.icon} alt={dept.name} className="department-icon" />
            <h3>{dept.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
