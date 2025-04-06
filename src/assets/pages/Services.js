import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesList from '../components/sections/ServicesList';


const Services = () => {
  return (
    <>
      <Hero 
        title="Our Services" 
        breadcrumbs={[
          { text: 'Home', link: '/' },
          { text: 'Services', active: true }
        ]}
      />
      <ServicesList />
     
    </>
  );
};

export default Services;