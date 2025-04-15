import React, { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://http5222-assignment1-ghbo.onrender.com/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills))
      .catch((err) => console.error("Failed to fetch skills:", err));
  }, []);

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      {skills.length === 0 ? (
        <p>Loading skills...</p>
      ) : (
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill._id} className="skill-item">
              {skill.name} - <strong>{skill.level}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Skills;
