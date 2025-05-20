import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Select Your Role</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Patient Register */}
        <Link to="/register/patient" className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Patient</h2>
          <p className="text-gray-600 mt-4">Register as a Patient</p>
        </Link>

        {/* Doctor Register */}
        <Link to="/register/doctor" className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Doctor</h2>
          <p className="text-gray-600 mt-4">Register as a Doctor</p>
        </Link>

        {/* Pharmacy Register */}
        <Link to="/register/pharmacy" className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Pharmacy</h2>
          <p className="text-gray-600 mt-4">Register as a Pharmacy</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
