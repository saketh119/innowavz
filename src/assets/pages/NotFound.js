// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <>
      <div className="container-xxl py-5 bg-primary hero-header">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated slideInDown">Not Found</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Pages</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">404</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container px-lg-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <FontAwesomeIcon icon={faExclamationTriangle} className="display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We're sorry, the page you have looked for does not exist in our website! 
                Maybe go to our home page or try to use a search?
              </p>
              <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">
                Go Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;