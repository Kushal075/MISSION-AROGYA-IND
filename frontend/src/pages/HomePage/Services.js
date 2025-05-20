import React from "react";
import "../../styles/HomePage/Services.css";

// Importing images from the assets folder
import dentistImage from "../../assets/HomePage/specialties/dentist.png";
import dermatologistImage from "../../assets/HomePage/specialties/dermatologist.png";
import pediatricianImage from "../../assets/HomePage/specialties/pediatrician.png";
import cardiologistImage from "../../assets/HomePage/specialties/cardiologist.png";
import gynecologistImage from "../../assets/HomePage/specialties/gynecologist.png";
import neurologistImage from "../../assets/HomePage/specialties/neurologist.png";
import orthopedicImage from "../../assets/HomePage/specialties/orthopedic.png";
import generalPhysicianImage from "../../assets/HomePage/specialties/general-physician.png";
import sexologyImage from "../../assets/HomePage/specialties/sexology.png";
import urologyImage from "../../assets/HomePage/specialties/urology.png";
import stomachAndDigestionImage from "../../assets/HomePage/specialties/stomach-digestion.png";
import psychiatryImage from "../../assets/HomePage/specialties/psychiatry.png";

// Specialties array with references to the local images
const specialties = [
  { name: "Dentist", image: dentistImage },
  { name: "Dermatologist", image: dermatologistImage },
  { name: "Pediatrician", image: pediatricianImage },
  { name: "Cardiologist", image: cardiologistImage },
  { name: "Gynecologist", image: gynecologistImage },
  { name: "Neurologist", image: neurologistImage },
  { name: "Orthopedic", image: orthopedicImage },
  { name: "General Physician", image: generalPhysicianImage },
  { name: "Sexology", image: sexologyImage },
  { name: "Urology", image: urologyImage },
  { name: "Stomach and Digestion", image: stomachAndDigestionImage },
  { name: "Psychiatry", image: psychiatryImage },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Popular Specialties</h2>
      <div className="services-container">
        {/* First Row with 6 cards */}
        <div className="services-row">
          {specialties.slice(0, 6).map((specialty, index) => (
            <div className="service-card" key={index}>
              <img src={specialty.image} alt={specialty.name} className="service-icon" />
              <h3>{specialty.name}</h3>
            </div>
          ))}
        </div>

        {/* Second Row with the remaining 6 cards */}
        <div className="services-row">
          {specialties.slice(6).map((specialty, index) => (
            <div className="service-card" key={index}>
              <img src={specialty.image} alt={specialty.name} className="service-icon" />
              <h3>{specialty.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
