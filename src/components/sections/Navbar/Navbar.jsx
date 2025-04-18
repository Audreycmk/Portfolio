import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link 
          to="about" 
          className="navbar-logo" 
          smooth={true} 
          duration={500}
          offset={-80}
        >
          Audrey Chung
        </Link>
        <ul className="navbar-menu">
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
      </div>
    </nav>
  );
};

export default Navbar;