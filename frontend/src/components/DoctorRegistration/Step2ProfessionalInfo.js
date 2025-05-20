import React from "react";

const Step2ProfessionalInfo = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Professional Information</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Specialization</label>
        <input
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your specialization"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Years of Experience</label>
        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Enter years of experience"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">License Number</label>
        <input
          type="text"
          name="licenseNumber"
          value={formData.licenseNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your license number"
          required
        />
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-md">
          Back
        </button>
        <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2ProfessionalInfo;
