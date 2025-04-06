import React from 'react';
import Counter from '../ui/Counter';

const Facts = () => {
  return (
    <div className="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
            <Counter value={4} icon="certificate">
              Years Experience
            </Counter>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
            <Counter value={5} icon="users-cog">
              Team Members
            </Counter>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
            <Counter value={22} icon="users">
              Satisfied Clients
            </Counter>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
            <Counter value={10} icon="check">
              Complete Projects
            </Counter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;