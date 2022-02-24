import { useState, useEffect } from 'react';

// Common breakpoints
export const XL_SCREEN = 1200;
export const L_SCREEN = 1025;
export const M_SCREEN = 769;
export const S_SCREEN = 481;

// Define general type for useWindowSize hook, which includes width and height
export interface Size {
  width?: number;
  height?: number;
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
