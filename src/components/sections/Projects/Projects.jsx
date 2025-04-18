import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ThreeBackground from "../../effects/ThreeBackground";
import AnimatedAirplanes from "../../effects/AnimatedAirplanes";
import "../../effects/AnimatedAirplanes.css";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://http5222-assignment1-ghbo.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ThreeBackground />
      <AnimatedAirplanes />
      <div className="projects-container" style={{ position: "relative", zIndex: 1 }}>
        <h2>Projects</h2>
        </div>
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          <div className="project-card-list">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={{
                  image: project.image || "/default-image.png",
                  title: project.name,
                  date: project.date || "2025",
                  description: project.description,
                  technologies: project.technologies,
                  github: project.github || "#",
                  member: project.members || [],
                }}
              />
            ))}
          </div>
        )}
      </div>
  
  );
};

export default Projects;
