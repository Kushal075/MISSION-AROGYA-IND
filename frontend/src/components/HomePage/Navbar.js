// src/components/HomePage/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/HomePage/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side - Logo/Title */}
      <div className="navbar-left">
        <span className="navbar-title">AyuRaksha</span>
      </div>

      {/* Center Navigation */}
      <ul className="navbar-center">
        <li><Link to="/find-doctors">Find Doctors</Link></li>
        <li><Link to="/surgeries">Surgeries</Link></li>
        <li><Link to="/order-medicines">Order Medicines</Link></li>
      </ul>

      {/* Right Navigation */}
      <ul className="navbar-right">
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/lab-tests">Lab Tests</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/consult-ai">Consult with AI</Link></li>
        <li>
          <Link to="/login" className="login-btn">Login / SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
