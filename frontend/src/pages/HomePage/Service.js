import React from "react";
import "../../styles/HomePage/Service.css";

// Importing images locally
import appointment from "../../assets/HomePage/services/appointment.png";
import consultation from "../../assets/HomePage/services/consultation.png";
import labtest from "../../assets/HomePage/services/labtest.png";
import pharmacy from "../../assets/HomePage/services/pharmacy.png";
import ambulance from "../../assets/HomePage/services/ambulance.png";
import healthPackages from "../../assets/HomePage/services/health-packages.png";
import wellness from "../../assets/HomePage/services/wellness.png";
import mentalHealth from "../../assets/HomePage/services/mental-health.png";
import fitness from "../../assets/HomePage/services/fitness.png";
import dentalCare from "../../assets/HomePage/services/dental-care.png";
import eyeCare from "../../assets/HomePage/services/eye-care.png";
import surgery from "../../assets/HomePage/services/surgery.png";

const services = [
  { name: "Book Appointment", image: appointment },
  { name: "Online Consultation", image: consultation },
  { name: "Lab Test", image: labtest },
  { name: "Pharmacy Delivery", image: pharmacy },
  { name: "Ambulance Service", image: ambulance },
  { name: "Health Packages", image: healthPackages },
  { name: "Wellness Programs", image: wellness },
  { name: "Mental Health Support", image: mentalHealth },
  { name: "Fitness & Nutrition", image: fitness },
  { name: "Dental Care", image: dentalCare },
  { name: "Eye Care", image: eyeCare },
  { name: "Surgery Assistance", image: surgery },
];

const Service = () => {
  return (
    <div className="our-services-section">
      <h2 className="our-services-title">Our Services</h2>
      <div className="our-services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <img src={service.image} alt={service.name} className="service-box-icon" />
            <h3 className="service-box-name">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
