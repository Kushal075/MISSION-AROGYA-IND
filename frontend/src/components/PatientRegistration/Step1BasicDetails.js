// src/components/PatientRegistration/Step1BasicDetails.js
import React from "react";

const Step1BasicDetails = ({ nextStep, handleChange, formData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Basic Details</h2>

      <label className="block mb-2">Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      <label className="block mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      <label className="block mb-2">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      <label className="block mb-2">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      <label className="block mb-2">Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      <label className="block mb-2">Gender</label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full p-2 border rounded-md mb-4"
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <button
        onClick={nextStep}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default Step1BasicDetails;
