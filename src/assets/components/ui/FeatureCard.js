import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div className={`feature-card wow fadeInUp`} data-wow-delay={`${delay}s`}>
      <div className="feature-icon">
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.string
};

FeatureCard.defaultProps = {
  delay: '0.1'
};

export default FeatureCard;