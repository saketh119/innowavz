// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          {/* Address Section */}
          <div className="col-md-6 col-lg-3">
            <h5 className="section-title text-white h5 mb-4">Address<span></span></h5>
            <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="btn btn-outline-light btn-social" href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="btn btn-outline-light btn-social" href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="btn btn-outline-light btn-social" href="/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3">
            <h5 className="section-title text-white h5 mb-4">Quick Link<span></span></h5>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <Link className="btn btn-link" to="/privacy">Privacy Policy</Link>
            <Link className="btn btn-link" to="/terms">Terms & Condition</Link>
            <Link className="btn btn-link" to="/careers">Career</Link>
          </div>

          {/* Gallery */}
          <div className="col-md-6 col-lg-3">
            <h5 className="section-title text-white h5 mb-4">Gallery<span></span></h5>
            <div className="row g-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="col-4" key={item}>
                  <img 
                    className="img-fluid" 
                    src={`/img/portfolio-${item}.jpg`} 
                    alt={`Portfolio ${item}`} 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-6 col-lg-3">
            <h5 className="section-title text-white h5 mb-4">Newsletter<span></span></h5>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="position-relative w-100 mt-3">
              <input 
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5" 
                type="text" 
                placeholder="Your Email" 
                style={{ height: '48px' }} 
              />
              <button 
                type="button" 
                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="text-primary fs-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="border-bottom" to="/">DGital</Link>, All Right Reserved.
              <br /><br />
              Designed By <a className="border-bottom" href="https://htmlcodex.com" target="_blank" rel="noreferrer">HTML Codex</a>
              <br />
              Distributed By <a className="border-bottom" href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/">Home</Link>
                <Link to="/cookies">Cookies</Link>
                <Link to="/help">Help</Link>
                <Link to="/faq">FQAs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;