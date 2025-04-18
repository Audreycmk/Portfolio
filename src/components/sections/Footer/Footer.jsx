import React from "react";
import { Link } from "react-scroll";
import {
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import "./Footer.css";

const Bio = {
  linkedin: "https://www.linkedin.com/in/man-kwan-karen-chung-116718356/",
  github: "https://github.com/Audreycmk",
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <Link 
          to="about" 
          className="footer-logo" 
          smooth={true} 
          duration={500}
          offset={-80}
        >
          Audrey Chung
        </Link>
        <ul className="footer-nav">
          <li>
            <Link 
              to="about" 
              className="footer-link" 
              smooth={true} 
              duration={500}
              offset={-80}
            >
              About
            </Link>
          </li>
          |
          <li>
            <Link 
              to="projects" 
              className="footer-link" 
              smooth={true} 
              duration={500}
              offset={-80}
            >
              Projects
            </Link>
          </li>
          |
          <li>
            <Link 
              to="skills" 
              className="footer-link" 
              smooth={true} 
              duration={500}
              offset={-80}
            >
              Skills
            </Link>
          </li>   
          |    
          <li>
            <Link 
              to="contact" 
              className="footer-link" 
              smooth={true} 
              duration={500}
              offset={-80}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="footer-icons">
          <a
            href={Bio.linkedin}
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href={Bio.github}
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </div>
        <p className="footer-copy">&copy; 2025 Audrey Chung. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;