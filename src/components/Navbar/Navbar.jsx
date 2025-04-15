import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Audrey Chung</Link>
        <ul className="navbar-menu">
          <li><Link to="/about" className="navbar-link">About</Link></li>
          <li><Link to="/skills" className="navbar-link">Skills</Link></li>
          <li><Link to="/projects" className="navbar-link">Projects</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;