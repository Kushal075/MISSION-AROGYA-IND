import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-5 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">MediCare</h1>
        <ul className="flex space-x-8">
          <li><Link to="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><Link to="/services" className="text-lg font-medium text-gray-700 hover:text-blue-600">Services</Link></li>
          <li><Link to="/testimonials" className="text-lg font-medium text-gray-700 hover:text-blue-600">Testimonials</Link></li>
          <li><Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-600">Contact</Link></li>
        </ul>
        <Link to="/login" className="ml-6 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
          Login/Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
