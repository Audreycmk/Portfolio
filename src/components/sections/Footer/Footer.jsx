import React from "react";
import { Link } from "react-router-dom";
import {
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import "./Footer.css";

// Replace with your own social links
const Bio = {
  linkedin: "https://www.linkedin.com/in/man-kwan-karen-chung-116718356/",
  github: "https://github.com/Audreycmk",
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-logo">Audrey Chung</div>
        <ul className="footer-nav">
          <li>
            <Link className="footer-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="footer-link" to="/skills">Skills</Link>
          </li>
          <li>
            <Link className="footer-link" to="/projects">Projects</Link>
          </li>
          <li>
            <Link className="footer-link" to="/contact">Contact</Link>
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
