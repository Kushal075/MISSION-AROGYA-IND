import React from "react";

const Step4ReviewSubmit = ({ prevStep, formData, handleSubmit }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>

      {/* Personal Details */}
      <h3 className="font-semibold">Personal Details</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>

      {/* Business Details */}
      <h3 className="font-semibold mt-4">Business Details</h3>
      <p><strong>Pharmacy Name:</strong> {formData.pharmacyName}</p>
      <p><strong>Pharmacy Address:</strong> {formData.pharmacyAddress}</p>
      <p><strong>License Number:</strong> {formData.licenseNumber}</p>

      {/* Uploaded Documents */}
      <h3 className="font-semibold mt-4">Uploaded Documents</h3>
      <p><strong>License Certificate:</strong> {formData.licenseCertificate ? formData.licenseCertificate.name : "Not Uploaded"}</p>
      <p><strong>Owner Photo:</strong> {formData.ownerPhoto ? formData.ownerPhoto.name : "Not Uploaded"}</p>

      {/* Navigation Buttons */}
      <div className="form-navigation">
        <button onClick={prevStep} className="bg-gray-400 px-4 py-2 rounded-md">Back</button>
        <button onClick={handleSubmit} className="bg-green-600 px-4 py-2 rounded-md">Submit</button>
      </div>
    </div>
  );
};

export default Step4ReviewSubmit;
