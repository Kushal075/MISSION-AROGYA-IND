import React from "react";

const Step3UploadDocuments = ({ nextStep, prevStep, handleChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>

      <label className="block mb-2">Pharmacy License (PDF)</label>
      <input type="file" name="licenseFile" onChange={handleChange} className="w-full p-2 border rounded-md mb-4" required />

      <label className="block mb-2">Pharmacy Photo</label>
      <input type="file" name="pharmacyPhoto" onChange={handleChange} className="w-full p-2 border rounded-md mb-4" required />

      <button onClick={prevStep} className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md mr-2">Back</button>
      <button onClick={nextStep} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Next</button>
    </div>
  );
};

export default Step3UploadDocuments;
