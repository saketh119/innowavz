import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { 
  faCogs, 
  // faBrain, 
  // faUsersCog,
  // faNetworkWired,
  // faIndustry,
  // faMicrochip,
  // faPaintBrush,
  // faRobot,
  // faServer
} from '@fortawesome/free-solid-svg-icons';

const ServicesList = () => {
  const services = [
    {
      icon: faCogs,
      title: "Enterprise IoT Solution Builder",
      description: "Architect scalable IoT frameworks using customizable workflows...",
      delay: "0.1"
    },
    // Add all other services...
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">OUR SERVICES</h2>
          <p className="text-muted">Comprehensive digital solutions for your business</p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;