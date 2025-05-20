// components/HomePage/TestimonialCard.js
import React from "react";
import "../../styles/HomePage/Testimonials.css";

const TestimonialCard = ({ image, name, role, feedback }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-img" />
      <h4 className="testimonial-name">{name}</h4>
      <p className="testimonial-role">{role}</p>
      <p className="testimonial-feedback">"{feedback}"</p>
    </div>
  );
};

export default TestimonialCard;
