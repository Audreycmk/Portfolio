import React from "react";
import "./About.css";
import { ArrowDown } from 'lucide-react';
import ThreeBackground from "../../effects/ThreeBackground";
import AnimatedAirplanes from "../../effects/AnimatedAirplanes";

const About = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ThreeBackground />
      <AnimatedAirplanes />

      <section id="about" className="about">
        <div className="section-container">
          <div className="about-content">

            {/* Icon */}
            <div className="icon">
              <img
                src="/icon.png"
                alt="Audrey Portfolio"
                className="icon-img"
              />
            </div>

            {/* Intro text */}
            <div className="intro">
              <h1 className="name">Audrey Chung</h1>
              <h2 className="title">Creative Developer & Designer</h2>
              <p className="description">
                Hello! I'm a passionate developer who combines technical skills with creative design 
                to build immersive digital experiences.
              </p>
            </div>
          </div>

         {/* Download Resume Button OUTSIDE intro */}
        <div className="button-wrapper" style={{ textAlign: "center", marginTop: "2rem" }}>
          <a 
            href="https://drive.google.com/file/d/1aCJ0B4tpG6Y_gC7MSvRZSPNT2nehdFAX/view?usp=drive_link" 
            className="resume-button" 
            download="Audrey Chung Resume.pdf"
          >
            Download My Resume
          </a>
        </div>


        </div>
      </section>
    </div>
  );
};

export default About;
