import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const Step4ReviewSubmit = ({ prevStep, formData }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = () => {
    alert("Patient Registration Submitted Successfully!");
    console.log("Submitted Data:", formData);

    // Redirect to the Patient Dashboard after successful submission
    navigate("/patient-dashboard");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>

      <h3 className="text-lg font-semibold mt-4">Personal Details</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>

      <h3 className="text-lg font-semibold mt-4">Health Information</h3>
      <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
      <p><strong>Medical History:</strong> {formData.medicalHistory}</p>

      <h3 className="text-lg font-semibold mt-4">Uploaded Documents</h3>
      <p><strong>Medical Reports:</strong> {formData.medicalReports ? formData.medicalReports.name : "Not uploaded"}</p>
      <p><strong>Photo:</strong> {formData.photo ? formData.photo.name : "Not uploaded"}</p>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4ReviewSubmit;
