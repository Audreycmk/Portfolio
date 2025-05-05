import React, { useEffect, useState } from "react";
import ThreeBackground from "../../effects/ThreeBackground";
import AnimatedAirplanes from "../../effects/AnimatedAirplanes";
import "../../effects/AnimatedAirplanes.css";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://practical-kindness-production.up.railway.app/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills))
      .catch((err) => console.error("Failed to fetch skills:", err));
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ThreeBackground />
      <AnimatedAirplanes />
    <div className="skills-container" style={{ position: "relative", zIndex: 1 }}>
      <h2>Skills</h2>
      </div>
      {skills.length === 0 ? (
        <p>Loading skills...</p>
      ) : (
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill._id} className="skill-item">
              {skill.name}<strong>{skill.level}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Skills;
