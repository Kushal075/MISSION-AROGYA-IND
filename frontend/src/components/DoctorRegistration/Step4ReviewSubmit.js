import React from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate

const Step4ReviewSubmit = ({ prevStep, formData }) => {
  const navigate = useNavigate();  // ✅ Initialize navigation

  const handleSubmit = () => {
    console.log("Submitting Data:", formData);
    alert("Registration Submitted Successfully!");
    
    // ✅ Redirect to Doctor Dashboard
    navigate("/doctor-dashboard");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Review & Submit</h2>

      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-semibold">Personal Details</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mt-4">
        <h3 className="text-lg font-semibold">Professional Information</h3>
        <p><strong>Specialization:</strong> {formData.specialization}</p>
        <p><strong>Experience:</strong> {formData.experience} years</p>
        <p><strong>License Number:</strong> {formData.licenseNumber}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mt-4">
        <h3 className="text-lg font-semibold">Uploaded Documents</h3>
        <p><strong>License PDF:</strong> {formData.licensePdf ? formData.licensePdf.name : "Not uploaded"}</p>
        <p><strong>Photo:</strong> {formData.photo ? formData.photo.name : "Not uploaded"}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-md">
          Back
        </button>
        <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4ReviewSubmit;
