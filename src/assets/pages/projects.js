import React, { useState } from 'react';
import Hero from '../components/sections/Hero';

import ProjectGallery from '../components/sections/ProjectGallery';

const Projects = () => {
  const [filter, setFilter] = useState('*');
  
  const projects = [
    {
      id: 1,
      title: 'Digital Agency Website',
      category: 'web',
      image: '/img/portfolio-1.jpg',
      description: 'Complete website redesign for a digital marketing agency'
    },
    // Add more projects...
  ];

  return (
    <>
      <Hero 
        title="Our Projects" 
        breadcrumbs={[
          { text: 'Home', link: '/' },
          { text: 'Projects', active: true }
        ]}
      />
      
      <ProjectGallery projects={projects} filter={filter} />
    </>
  );
};

export default Projects;