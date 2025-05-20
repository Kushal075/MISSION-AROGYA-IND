// src/pages/HomePage/Footer.js

import React from 'react';
import '../../styles/HomePage/Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h4>AyuRaksha</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For patients</h4>
          <ul>
            <li>Search for doctors</li>
            <li>Search for clinics</li>
            <li>Search for hospitals</li>
            <li>Book Diagnostic Tests</li>
            <li>Read health articles</li>
            <li>Read about medicines</li>
            <li>Online doctor consultation</li>
            <li>Order medicines</li>
            <li>AyuRaksha Drive</li>
            <li>Health app</li>
            <li>Book Full Body Checkups</li>
            <li>AyuRaksha Plus</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For doctors</h4>
          <ul>
            <li>AyuRaksha Consult</li>
            <li>AyuRaksha Health Feed</li>
            <li>AyuRaksha Profile</li>
            <li>Online Doctor Consultation</li>
          </ul>
          <h4>For clinics</h4>
          <ul>
            <li>Ray by AyuRaksha</li>
            <li>AyuRaksha Reach</li>
            <li>Ray Tab</li>
            <li>AyuRaksha Pro</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For hospitals</h4>
          <ul>
            <li>Insta by AyuRaksha</li>
            <li>Qikwell by AyuRaksha</li>
            <li>AyuRaksha Profile</li>
            <li>AyuRaksha Reach</li>
          </ul>
          <h4>For Corporates</h4>
          <ul>
            <li>Wellness Plans</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <h2 className="footer-brand">AyuRaksha</h2>
        <p className="footer-copy">© 2025 AyuRaksha. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
