// src/pages/About.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/About';
import Facts from '../components/sections/Facts';
import Team from '../components/sections/Team';

const About = () => {
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Pages', link: null },
    { text: 'About', active: true }
  ];

  return (
    <>
      <Hero title="Want to Know More About Us" breadcrumbs={breadcrumbs} />
      <AboutSection />
      <Facts />
      <Team title="Our Team Members" />
    </>
  );
};

export default About;