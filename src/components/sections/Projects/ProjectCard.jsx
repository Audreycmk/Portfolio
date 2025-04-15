import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img className="project-image" src={project.image} alt={project.title} />
      <div className="project-tags"></div>
      <div className="project-details">
        <div className="project-title">{project.title}</div>
        <div className="project-date">{project.date}</div>
        <div className="project-description">{project.description}</div>
      </div>
      <div className="project-members">
        {project.member?.map((member, index) => (
          <img
            key={index}
            className="project-avatar"
            src={member.img}
            alt="member"
          />
        ))}
      </div>
      <a
        className="project-button"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Code
      </a>
    </div>
  );
};

export default ProjectCard;
