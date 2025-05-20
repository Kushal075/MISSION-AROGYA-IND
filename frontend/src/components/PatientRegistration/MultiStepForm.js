import React, { useState } from "react";
import Step1BasicDetails from "./Step1BasicDetails";
import Step2MedicalInfo from "./Step2MedicalInfo";
import Step3UploadDocuments from "./Step3UploadDocuments";
import Step4ReviewSubmit from "./Step4ReviewSubmit";


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    conditions: "",
    allergies: "",
    emergencyContact: "",
    photo: null,
    medicalReports: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-md">
      {step === 1 && <Step1BasicDetails nextStep={nextStep} handleChange={handleChange} formData={formData} />}
      {step === 2 && <Step2MedicalInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
      {step === 3 && <Step3UploadDocuments nextStep={nextStep} prevStep={prevStep} handleFileChange={handleFileChange} formData={formData} />}
      {step === 4 && <Step4ReviewSubmit prevStep={prevStep} formData={formData} />}
    </div>
  );
};

export default MultiStepForm;
