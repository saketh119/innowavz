import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { 
  faRocket, 
  faChartLine, 
  faCode,
  faLightbulb,
  faShieldAlt,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const features = [
    {
      icon: faRocket,
      title: "Next-Gen Digital Marketing",
      description: "Harness cutting-edge digital strategies driven by data analytics and AI.",
      delay: "0.1"
    },
    {
      icon: faChartLine,
      title: "AI-Powered SEO & Analytics",
      description: "Optimize your online presence with machine learning techniques.",
      delay: "0.3"
    },
    {
      icon: faCode,
      title: "Innovative Design & Development",
      description: "Transform ideas into reality with futuristic design solutions.",
      delay: "0.5"
    },
    {
      icon: faLightbulb,
      title: "Smart Automation",
      description: "Streamline business processes with intelligent automation.",
      delay: "0.2"
    },
    {
      icon: faShieldAlt,
      title: "Enterprise Security",
      description: "Protect your digital assets with comprehensive security.",
      delay: "0.4"
    },
    {
      icon: faMobileAlt,
      title: "Mobile-First Solutions",
      description: "Create seamless mobile experiences across all devices.",
      delay: "0.6"
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">OUR FEATURES</h2>
          <p className="text-muted">Discover what makes our solutions stand out</p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-4 wow fadeInUp" key={index} data-wow-delay={`${feature.delay}s`}>
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;