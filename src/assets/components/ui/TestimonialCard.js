import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-item bg-light rounded my-4">
      <p className="fs-5">
        <FontAwesomeIcon icon={faQuoteLeft} className="fa-4x text-primary mt-n4 me-3" />
        {testimonial.quote}
      </p>
      <div className="d-flex align-items-center">
        <img 
          className="img-fluid flex-shrink-0 rounded-circle" 
          src={testimonial.image} 
          alt={testimonial.name}
          style={{ width: '65px', height: '65px' }} 
        />
        <div className="ps-4">
          <h5 className="mb-1">{testimonial.name}</h5>
          <span>{testimonial.position}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;