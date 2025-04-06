import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  return (
    <div className="wow fadeInUp" data-wow-delay="0.1s">
      <h2 className="mb-4">Contact Information</h2>
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center mb-4">
          <div className="icon-container bg-primary rounded-circle flex-shrink-0">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
          </div>
          <div className="ms-3">
            <h5 className="mb-1">Location</h5>
            <p className="mb-0">123 Street, New York, USA</p>
          </div>
        </div>
        
        <div className="d-flex align-items-center mb-4">
          <div className="icon-container bg-primary rounded-circle flex-shrink-0">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-white" />
          </div>
          <div className="ms-3">
            <h5 className="mb-1">Call Us</h5>
            <p className="mb-0">+012 345 67890</p>
          </div>
        </div>
        
        <div className="d-flex align-items-center">
          <div className="icon-container bg-primary rounded-circle flex-shrink-0">
            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
          </div>
          <div className="ms-3">
            <h5 className="mb-1">Email Us</h5>
            <p className="mb-0">info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;