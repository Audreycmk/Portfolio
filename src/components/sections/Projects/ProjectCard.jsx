
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
          <a href={project.github}>
            GitHub Repo
          </a>
          <span>{project.date}</span>
        </div>
        <div className="project-members">
          {project.member?.map((member, index) => (
            <img
              key={index}
              className="project-avatar"
              src={member.img}
              alt={`Member ${index + 1}`}
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                marginRight: 5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
