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

          {/* View My Work Button OUTSIDE intro */}
          <div className="button-wrapper" style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="#projects" className="view-work-button">
              View My Work <ArrowDown size={18} />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
