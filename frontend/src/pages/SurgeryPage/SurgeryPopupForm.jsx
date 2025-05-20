import React, { useState } from 'react';
import { XCircle } from 'lucide-react';
import '../../styles/SurgeryPage/Surgery.css';

const SurgeryPopupForm = ({ surgeryName, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, age, city, surgeryName });
    alert('Appointment requested!');
    onClose();
  };

  return (
    <div className="surgery-popup-overlay">
      <div className="surgery-popup">
        <button className="popup-close-button" onClick={onClose}>
          <XCircle size={24} />
        </button>

        <h2 className="popup-title">
          Book an appointment for <strong>{surgeryName}</strong> with our expert surgeon
        </h2>

        <form onSubmit={handleSubmit} className="popup-form">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone number"
            className="form-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Age"
            className="form-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City"
            className="form-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <button type="submit" className="form-button">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default SurgeryPopupForm;
