import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item ${project.category} wow fadeInUp`} data-wow-delay={project.delay}>
      <div className="rounded overflow-hidden">
        <div className="position-relative overflow-hidden">
          <img className="img-fluid w-100" src={project.image} alt={project.title} />
          <div className="portfolio-overlay">
            <a className="btn btn-square btn-outline-light mx-1" href={project.image} data-lightbox="portfolio">
              <FontAwesomeIcon icon={faEye} />
            </a>
            <a className="btn btn-square btn-outline-light mx-1" href={project.link}>
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
        <div className="bg-light p-4">
          <p className="text-primary fw-medium mb-2">{project.type}</p>
          <h5 className="lh-base mb-0">{project.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;