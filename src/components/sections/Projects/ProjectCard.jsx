import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.image && (
        <img src={project.image} alt={project.title} />
      )}
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech-stack">
          {project.technologies?.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
           <a
           className="github-button"
           href={project.github}
           target="_blank"
           rel="noopener noreferrer"
          >
           <i className="fab fa-github me-1"></i>
            GitHub
         </a>
          )}
          <span>{project.date}</span>
        </div>
        <div className="view-project">
          <a href={project.website}>
            View Project 
          </a>
        </div>

        {/* <div className="project-members">
        <p>{project.members}</p>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
