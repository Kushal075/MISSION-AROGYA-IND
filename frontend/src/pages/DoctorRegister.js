import React from "react";
import MultiStepForm from "../components/DoctorRegistration/MultiStepForm";
import "../styles/DoctorRegistration.css";


const DoctorRegister = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4">Doctor Registration</h2>
        <MultiStepForm />
      </div>
    </div>
  );
};

export default DoctorRegister;
