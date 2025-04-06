import React from 'react';
import Hero from '../components/sections/Hero';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
      name: "Client Name",
      position: "Profession",
      image: "/img/testimonial-1.jpg"
    },
    // Add more testimonials...
  ];

  return (
    <>
      <Hero 
        title="Client Testimonials" 
        breadcrumbs={[
          { text: 'Home', link: '/' },
          { text: 'Pages', link: null },
          { text: 'Testimonials', active: true }
        ]}
      />
      <TestimonialCarousel testimonials={testimonials} />
    </>
  );
};

export default Testimonials;