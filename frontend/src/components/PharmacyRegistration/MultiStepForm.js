
import React, { useState } from "react";
import Step1BasicDetails from "./Step1BasicDetails";
import Step2BusinessDetails from "./Step2BusinessDetails";
import Step3UploadDocuments from "./Step3UploadDocuments";
import Step4ReviewSubmit from "./Step4ReviewSubmit";
import "../../styles/PharmacyRegistration.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    licenseNumber: "",
    pharmacyName: "",
    pharmacyAddress: "",
    licenseCertificate: null,
    ownerPhoto: null,
  });

  // Handle input changes correctly
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // ✅ Fix Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pharmacy Registration Data Submitted:", formData);
    alert("Pharmacy Registration Submitted Successfully!");
  };

  return (
    <div className="pharmacy-registration-container">
      {step === 1 && <Step1BasicDetails nextStep={nextStep} handleChange={handleChange} formData={formData} />}
      {step === 2 && <Step2BusinessDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
      {step === 3 && <Step3UploadDocuments nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
      {step === 4 && <Step4ReviewSubmit prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default MultiStepForm;
