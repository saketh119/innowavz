// src/components/ui/ServiceCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <div className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${delay}s`}>
      <div className="service-item d-flex flex-column text-center rounded">
        <div className="service-icon flex-shrink-0">
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
        <h5 className="mb-3">{title}</h5>
        <p className="m-0">{description}</p>
        <a className="btn btn-square" href="">
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;