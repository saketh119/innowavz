// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import About from './About';
import Services from './Services';
import Features from '../components/sections/Features';

import Projects from './projects';
import Testimonials from './Testimonials';
import Team from './Team';


const Home = () => {
  return (
    <>
      <Hero 
        title="Digital Solutions for Your Business" 
        subtitle="We help businesses grow with innovative digital strategies"
        showButton={true}
      />
      
      <About 
        title="#1 Digital Solution With 10 Years of Experience"
        description="We provide comprehensive digital solutions tailored to your business needs."
        skills={[
          { name: "Digital Marketing", percentage: 85, color: "primary" },
          { name: "SEO & Backlinks", percentage: 90, color: "secondary" },
          { name: "Design & Development", percentage: 95, color: "dark" }
        ]}
        image="/img/about.png"
      />
      
      <Services 
        title="Our Comprehensive Services"
        services={[
          {
            icon: "rocket",
            title: "Next-Gen Digital Marketing",
            description: "Harness cutting-edge digital strategies driven by data analytics and AI."
          },
          {
            icon: "chart-line",
            title: "AI-Powered SEO & Analytics",
            description: "Optimize your online presence with machine learning-powered SEO techniques."
          },
          {
            icon: "code",
            title: "Innovative Design & Development",
            description: "Transform ideas into reality with futuristic design solutions."
          }
        ]}
      />
      
      <Features 
        title="Why Choose Us"
        features={[
          "10+ Years Experience",
          "50+ Professional Team",
          "500+ Projects Completed",
          "99% Client Satisfaction"
        ]}
      />
      
      <Facts 
        facts={[
          { icon: "certificate", value: 4, label: "Years Experience" },
          { icon: "users-cog", value: 5, label: "Team Members" },
          { icon: "users", value: 22, label: "Satisfied Clients" },
          { icon: "check", value: 10, label: "Completed Projects" }
        ]}
      />
      
      <Projects 
        title="Our Recent Projects"
        projects={[
          { 
            id: 1, 
            title: "Digital Agency Website", 
            category: "Web Design", 
            image: "/img/portfolio-1.jpg" 
          },
          // Add more projects...
        ]}
      />
      
      <Testimonials 
        title="What Our Clients Say"
        testimonials={[
          {
            name: "Client Name",
            role: "Profession",
            content: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
            image: "/img/testimonial-1.jpg"
          },
          // Add more testimonials...
        ]}
      />
      
      <Team 
        title="Our Expert Team"
        members={[
          {
            name: "John Doe",
            role: "CEO & Founder",
            image: "/img/team-1.jpg",
            social: {
              facebook: "#",
              twitter: "#",
              instagram: "#",
              linkedin: "#"
            }
          },
          // Add more team members...
        ]}
      />
      
      <Newsletter 
        title="Stay Always In Touch"
        description="Subscribe to our newsletter for the latest updates and offers."
      />
    </>
  );
};

export default Home;