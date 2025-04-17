
import React, { useEffect } from "react";
import "./AnimatedAirplanes.css";

const AnimatedAirplanes = () => {
  useEffect(() => {
    const container = document.getElementById("airplane-container");

    if (container.childNodes.length === 0) {
      const animations = ["fly-top-left", "fly-bottom-right", "fly-horizontal", "fly-diagonal"];

      for (let i = 0; i < 5; i++) {
        const plane = document.createElement("div");
        plane.className = "airplane";
        plane.style.animationName = animations[i % animations.length];
        plane.style.animationDuration = `${10 + Math.random() * 5}s`;
        plane.style.animationDelay = `${Math.random() * 3}s`;
        plane.style.top = `${Math.random() * 80 + 10}%`;
        container.appendChild(plane);
      }
    }
  }, []);

  return <div id="airplane-container" className="airplane-wrapper"></div>;
};

export default AnimatedAirplanes;
