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
    <section id="about" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient">
              Audrey Chung
            </h1>
            <h2 className="text-h2">
              Creative Developer & Designer
            </h2>
            <p className="text">
              Hello! I'm a passionate developer who combines technical skills with creative design 
              to build immersive digital experiences.
            </p>
            <div className="pt-4">
              <a 
                href="#projects" 
                className="view-work-button"
              >
                View My Work <ArrowDown size={18} />
              </a>
          </div>

          </div>
          
          {/* <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-purple-light to-purple-dark blur-xl opacity-50 absolute -z-10"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 glass-morphism rounded-xl animate-fade-in">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-2xl font-bold text-white">Your Photo Here</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;