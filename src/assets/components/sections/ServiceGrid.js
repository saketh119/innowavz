// src/components/sections/ServicesGrid.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServicesGrid = ({ title, description, services }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">{title}</h2>
          {description && <p className="text-muted">{description}</p>}
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`col-lg-4 col-md-6 wow fadeInUp`} 
              data-wow-delay={`${service.delay}s`}
            >
              <div className="feature-item bg-light rounded text-center p-4">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={service.icon} size="3x" className="text-primary mb-4" />
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p className="m-0">{service.description}</p>
                <a href="#" className="btn btn-square mt-3">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;