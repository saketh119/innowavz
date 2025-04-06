// src/components/common/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0">DGital</h1>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <NavLink to="/" className="nav-item nav-link" end>Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="/services" className="nav-item nav-link">Service</NavLink>
            <NavLink to="/projects" className="nav-item nav-link">Project</NavLink>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0">
                <Link to="/team" className="dropdown-item">Our Team</Link>
                <Link to="/testimonials" className="dropdown-item">Testimonial</Link>
                <Link to="/404" className="dropdown-item">404 Page</Link>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
          </div>
          <Link to="/contact" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;