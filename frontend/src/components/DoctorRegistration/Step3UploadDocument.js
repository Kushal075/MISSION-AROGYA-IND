import React from "react";

const Step3UploadDocuments = ({ nextStep, prevStep, handleFileChange, formData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Upload Documents</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Upload License PDF</label>
        <input
          type="file"
          name="licensePdf"
          accept=".pdf"
          onChange={handleFileChange}
          className="w-full p-2 border rounded-md"
          required
        />
        {formData.licensePdf && <p className="text-sm text-green-600 mt-1">File selected: {formData.licensePdf.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Upload Your Photo</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border rounded-md"
          required
        />
        {formData.photo && <p className="text-sm text-green-600 mt-1">File selected: {formData.photo.name}</p>}
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

export default Step3UploadDocuments;
