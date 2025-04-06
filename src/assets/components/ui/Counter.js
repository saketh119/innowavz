// src/components/ui/Counter.jsx
import React, { useEffect, useRef } from 'react';
import CountUp from 'counterup2';

const Counter = ({ value, children }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const el = counterRef.current;
    if (el) {
      const counter = new CountUp(el, value, {
        duration: 2000,
        separator: ',',
      });
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              counter.start();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(el);

      return () => {
        observer.unobserve(el);
      };
    }
  }, [value]);

  return (
    <div className="text-center wow fadeIn">
      <div ref={counterRef} className="text-white mb-2">0</div>
      <p className="text-white mb-0">{children}</p>
    </div>
  );
};

export default Counter;