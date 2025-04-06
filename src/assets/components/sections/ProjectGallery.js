import React from 'react';
import ProjectCard from '../ui/ProjectCard';

const ProjectGallery = ({ projects, filter }) => {
  const filteredProjects = filter === '*' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4 portfolio-container">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;