import {useEffect, useState} from 'react';

// Common screen sizes for tablet and desktop
// https://mediag.com/blog/popular-screen-resolutions-designing-for-all/
const TABLET = 768;
const DESKTOP = 992;

// Interface for return type definition
interface IWindowInfo {
  windowSize: { width: number, height: number };
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  portrait: boolean;
}

function getWindowSize(): { innerWidth: number, innerHeight: number } {
  return {
    innerHeight: (typeof window !== 'undefined') ? window.innerHeight : 0,
    innerWidth: (typeof window !== 'undefined') ? window.innerWidth : 0,
  };
}

export function useWindowInfo(): IWindowInfo {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleResize(): void {
      // get window size and store it in the state.
      setWindowSize(getWindowSize());
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return {
    windowSize: {width: windowSize.innerWidth, height: windowSize.innerHeight},
    mobile: Boolean(windowSize.innerWidth < TABLET),
    tablet: Boolean(windowSize.innerWidth >= TABLET && windowSize.innerWidth < DESKTOP),
    desktop: Boolean(windowSize.innerWidth >= DESKTOP),
    portrait: Boolean(windowSize.innerWidth < windowSize.innerHeight),
  };
}
