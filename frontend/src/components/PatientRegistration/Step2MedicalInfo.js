import React from "react";

const Step2MedicalInfo = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Medical Information</h2>

      <label className="block mb-2">Blood Group</label>
      <select
        name="bloodGroup"
        value={formData.bloodGroup}
        onChange={handleChange}
        className="w-full p-2 border rounded-md mb-4"
        required
      >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>

      <label className="block mb-2">Existing Medical Conditions</label>
      <input
        type="text"
        name="conditions"
        value={formData.conditions}
        onChange={handleChange}
        placeholder="E.g., Diabetes, Hypertension"
        className="w-full p-2 border rounded-md mb-4"
      />

      <label className="block mb-2">Allergies</label>
      <input
        type="text"
        name="allergies"
        value={formData.allergies}
        onChange={handleChange}
        placeholder="E.g., Peanuts, Penicillin"
        className="w-full p-2 border rounded-md mb-4"
      />

      <label className="block mb-2">Emergency Contact</label>
      <input
        type="tel"
        name="emergencyContact"
        value={formData.emergencyContact}
        onChange={handleChange}
        placeholder="Emergency Contact Number"
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2MedicalInfo;
