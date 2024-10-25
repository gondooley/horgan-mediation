import { useState, useEffect } from 'react';

export function useViewportSize() {
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
      handleResize();
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return viewportSize;
}

export const PortraitView = ({ children }) => {
  const isPortraitOrSquare = useViewportSize().screenHeight >= useViewportSize().screenWidth;
  if (isPortraitOrSquare) {
    return (
    <>
      {children}
    </>
  )} else {
    return (
    <>
     {null}
    </>
  );}
}

export const LandscapeView = ({ children }) => {
  const isLandscape = useViewportSize().screenHeight < useViewportSize().screenWidth;
  if (isLandscape) {
    return (
      <>
        {children}
      </>
    );
  } else {
    return (
      <>
        {null}
      </>
    );
  }
}

export const WideView = ({ children }) => {
  const isWide = useViewportSize().screenWidth >= 800;
  if (isWide) {
    return (
    <>
      {children}
    </>
  )} else {
    return (
    <>
     {null}
    </>
  );}
}

export const NarrowView = ({ children }) => {
  const isNarrow = useViewportSize().screenWidth < 800;
  if (isNarrow) {
    return (
      <>
        {children}
      </>
    );
  } else {
    return (
      <>
        {null}
      </>
    );
  }
}
