import React from 'react';
import '../../styles/SurgeryPage/Surgery.css'; // Make sure path matches your structure

const SurgeryFooter = () => {
  return (
    <footer className="surgery-footer">
      <div className="footer-content">
        <h2 className="footer-title">AyuRaksha</h2>
        
        <p className="footer-vision">
          Our vision is to help mankind live healthier, longer lives by making<br />
          quality healthcare accessible, affordable and convenient.
        </p>
        
        <p className="footer-credit">Made by AyuRaksha @Bangalore.</p>
      </div>
    </footer>
  );
};

export default SurgeryFooter;
