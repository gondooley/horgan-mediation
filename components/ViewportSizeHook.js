import { useState, useEffect } from 'react';

function useViewportSize() {
  const [viewportSize, setViewportSize] = useState({
    screenWidth: 0,
    screenHeight: 0,
  });

  useEffect(() => {
    if (typeof window != 'undefined') {
      const handleResize = () => {
        setViewportSize({
          screenWidth: window.innerWidth,
          screenHeight: window.innerHeight,
        });
      };

      console.log('Add event listener for window resize');
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return viewportSize;
}

export default useViewportSize;
