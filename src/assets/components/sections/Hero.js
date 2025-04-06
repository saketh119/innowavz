import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, breadcrumbs, showButton, buttonText, buttonLink }) => {
  return (
    <div className="container-xxl py-5 bg-primary hero-header">
      <div className="container my-5 py-5 px-lg-5">
        <div className="row g-5 py-5">
          <div className="col-12 text-center">
            <h1 className="text-white animated slideInDown">{title}</h1>
            {subtitle && (
              <p className="text-white mb-4">{subtitle}</p>
            )}
            <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
            {breadcrumbs && (
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  {breadcrumbs.map((crumb, index) => (
                    <li 
                      key={index} 
                      className={`breadcrumb-item ${crumb.active ? 'text-white active' : ''}`}
                      aria-current={crumb.active ? 'page' : undefined}
                    >
                      {crumb.link ? (
                        <Link className="text-white" to={crumb.link}>{crumb.text}</Link>
                      ) : (
                        crumb.text
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            {showButton && (
              <Link to={buttonLink} className="btn btn-secondary py-3 px-5 mt-3">
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;