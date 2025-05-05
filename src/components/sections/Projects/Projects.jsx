import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ThreeBackground from "../../effects/ThreeBackground";
import AnimatedAirplanes from "../../effects/AnimatedAirplanes";
import "../../effects/AnimatedAirplanes.css";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetch("https://practical-kindness-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // 確保只有這邊印出
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("❌ Unexpected format (not an array):", data);
        }
      })
      .catch((err) => console.error("🚨 Failed to fetch projects:", err));
  }, []);
  

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ThreeBackground />
      <AnimatedAirplanes />
      <div
        className="projects-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h2>Projects</h2>
        <p className="scroll-indicator">← Scroll →</p>
        {projects.length === 0 ? (
          <div className="loading">
            <p>Loading projects...</p>
          </div>
        ) : (
          <div className="project-scroll-wrapper">
          <div className="project-card-list" ref={scrollRef}>
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={{
                  image: project.media || "/default-image.png",
                  title: project.name,
                  date: new Date(project.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "short",
                  }),
                  description: project.description,
                  technologies: project.technologies || [],
                  github: project.github || "#",
                  website: project.website || "#",
                }}
              />
            ))}
          </div>
        
          {/* Scroll buttons below the cards */}
          <div className="scroll-button-row">
            <button className="scroll-btn" onClick={scrollLeft}>◀</button>
            <button className="scroll-btn" onClick={scrollRight}>▶</button>
          </div>
        </div>        
        )}
      </div>
    </div>
  );
};

export default Projects;