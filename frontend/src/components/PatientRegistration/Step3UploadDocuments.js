import React from "react";

const Step3UploadDocuments = ({ nextStep, prevStep, handleFileChange, formData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>

      <label className="block mb-2">Upload Medical Reports (PDF)</label>
      <input
        type="file"
        name="medicalReports"
        accept="application/pdf"
        onChange={handleFileChange}
        className="w-full p-2 border rounded-md mb-4"
      />
      {formData.medicalReports && <p className="text-green-600">File uploaded: {formData.medicalReports.name}</p>}

      <label className="block mb-2">Upload Profile Photo</label>
      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 border rounded-md mb-4"
      />
      {formData.photo && <p className="text-green-600">File uploaded: {formData.photo.name}</p>}

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

export default Step3UploadDocuments;
