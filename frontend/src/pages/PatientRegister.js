import React from "react";
import MultiStepForm from "../components/PatientRegistration/MultiStepForm";
import "../styles/PatientRegistration.css"; // Import your CSS file for styling

const PatientRegister = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Registration</h1>
      <MultiStepForm />
    </div>
  );
};

export default PatientRegister;
