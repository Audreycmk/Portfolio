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
              <h2 className="title">AI Project Manager & Full-Stack Engineer</h2>
              <p className="description">
                I am an AI Project Manager, design lead, and full-stack engineer bridging technology with business goals. 
                Combining engineering with applied psychology, I automate workflows and lead high-impact digital transformations.
              </p>
            </div>
          </div>

         {/* Download Resume Button OUTSIDE intro */}
        <div className="button-wrapper" style={{ textAlign: "center", marginTop: "2rem" }}>
          <a 
            href="https://drive.google.com/file/d/1WobfIR_zY6weh0p_1kSSA-RqKaKKrR79/view?usp=sharing" 
            className="resume-button" 
            download="Audrey Chung_Technology Strategist_Resume.pdf"
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
