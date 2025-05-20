import React from "react";

const Step2PharmacyDetails = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pharmacy Details</h2>

      <label className="block mb-2">Pharmacy Name</label>
      <input type="text" name="pharmacyName" value={formData.pharmacyName} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" required />

      <label className="block mb-2">License Number</label>
      <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" required />

      <label className="block mb-2">Address</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" required />

      <button onClick={prevStep} className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md mr-2">Back</button>
      <button onClick={nextStep} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Next</button>
    </div>
  );
};

export default Step2PharmacyDetails;
