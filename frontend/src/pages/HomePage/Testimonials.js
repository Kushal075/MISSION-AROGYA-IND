import React from 'react';
import '../../styles/HomePage/Testimonials.css';

// Import doctor images
import doctor1 from '../../assets/HomePage/testimonials/doctor1.jpg';
import doctor2 from '../../assets/HomePage/testimonials/doctor2.jpg';
import doctor3 from '../../assets/HomePage/testimonials/doctor3.jpg';
import doctor4 from '../../assets/HomePage/testimonials/doctor4.jpg';
import doctor5 from '../../assets/HomePage/testimonials/doctor5.jpg';
import doctor6 from '../../assets/HomePage/testimonials/doctor6.jpg';

const doctors = [
  {
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    experience: '15 Years',
    image: doctor1
  },
  {
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    experience: '10 Years',
    image: doctor2
  },
  {
    name: 'Dr. David Wilson',
    specialization: 'Neurologist',
    experience: '12 Years',
    image: doctor3
  },
  {
    name: 'Dr. Lisa Adams',
    specialization: 'Pediatrician',
    experience: '8 Years',
    image: doctor4
  },
  {
    name: 'Dr. Michael Brown',
    specialization: 'Orthopedic Surgeon',
    experience: '18 Years',
    image: doctor5
  },
  {
    name: 'Dr. Emma White',
    specialization: 'Psychiatrist',
    experience: '9 Years',
    image: doctor6
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">Our Expert Doctors</h2>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-specialization">{doctor.specialization}</p>
            <p className="doctor-experience">{doctor.experience}</p>
          </div>
        ))}
      </div>
      <div className="video-consultation">
        <h2>Experience Video Consultation</h2>
        <div className="videos">
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hfFW3v1pvyo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4cT6GE5g8aw"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uWX55hUoZSM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
