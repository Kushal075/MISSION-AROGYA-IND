import React from "react";

const ProgressBar = ({ step }) => {
  const steps = ["Basic Details", "Professional Info", "Upload Documents", "Review & Submit"];
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        {steps.map((label, index) => (
          <div key={index} className="text-center w-1/4">
            <div
              className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full text-white ${
                step > index ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            <p className="text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="relative w-full h-2 bg-gray-300 rounded-md">
        <div
          className="absolute h-2 bg-blue-600 rounded-md transition-all"
          style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
