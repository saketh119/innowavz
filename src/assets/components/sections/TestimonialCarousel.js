import React, { useState, useEffect } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="owl-carousel testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-item bg-light rounded my-4 ${index === currentIndex ? 'active' : ''}`}
            >
              <p className="fs-5">
                <FaQuoteLeft className="fa-4x text-primary mt-n4 me-3" />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;