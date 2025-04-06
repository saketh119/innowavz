// src/hooks/useAnimation.js
import { useEffect } from 'react';
import WOW from 'wowjs';

const useAnimation = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();

    return () => {
      // Cleanup if needed
    };
  }, []);
};

export default useAnimation;