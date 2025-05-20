import React from "react";
import MultiStepForm from "../components/PharmacyRegistration/MultiStepForm";

const PharmacyRegister = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Pharmacy Registration</h1>
      <MultiStepForm />
    </div>
  );
};

export default PharmacyRegister;
