import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useSlideIn = (fromDirection = 'left', delay = 1) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: {
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    });
  }, [controls, fromDirection, delay]);

  return controls;
};

export default useSlideIn;
