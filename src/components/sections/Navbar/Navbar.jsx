import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link 
          to="about" 
          className="navbar-logo" 
          smooth={true} 
          duration={500}
          offset={-80}
        >
          Audrey Chung
        </Link>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Desktop Menu */}
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link 
              to="about" 
              className="navbar-link" 
              smooth={true} 
              duration={500}
              offset={-80}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              className="navbar-link" 
              smooth={true} 
              duration={500}
              offset={-80}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="skills" 
              className="navbar-link" 
              smooth={true} 
              duration={500}
              offset={-80}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              className="navbar-link" 
              smooth={true} 
              duration={500}
              offset={-80}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu (visible when toggled) */}
        <div className={`navbar-menu-mobile ${isMenuOpen ? "open" : ""}`}>
          <Link 
            to="about" 
            className="navbar-link" 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            About
          </Link>
          <Link 
            to="projects" 
            className="navbar-link" 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            Projects
          </Link>
          <Link 
            to="skills" 
            className="navbar-link" 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            Skills
          </Link>
          <Link 
            to="contact" 
            className="navbar-link" 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
