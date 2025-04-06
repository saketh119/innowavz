import React from 'react';
import Hero from '../components/sections/Hero';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/sections/ContactInfo';

const Contact = () => {
  return (
    <>
      <Hero 
        title="Get in Touch" 
        breadcrumbs={[
          { text: 'Home', link: '/' },
          { text: 'Contact', active: true }
        ]}
      />
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <ContactForm />
            </div>
            <div className="col-lg-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;