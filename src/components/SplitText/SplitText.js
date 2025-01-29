import React, { useState, useEffect, forwardRef } from 'react';
import  SplitTextInner  from './SplitTextInner.js';

function debounce(callback, wait, immediate = false) {
  let timeout;

  return function(...args) {
    const context = this;
    const callNow = immediate && !timeout;
    const next = () => callback.apply(context, args);

    clearTimeout(timeout);
    timeout = setTimeout(next, wait);

    if (callNow) {
      next();
    }
  };
}

const SplitText = forwardRef(function SplitText({ children, mode, ...props }, ref) {
  const [key, setKey] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null); // Set initial width to null

  useEffect(() => {
    // Set initial width on client side
    setWindowWidth(window.innerWidth);

    const onResize = debounce(() => {
      const newWidth = window.innerWidth;
      if (newWidth !== windowWidth) {
        setWindowWidth(newWidth);
        setKey(v => v + 1);
      }
    }, 500);

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [windowWidth]); // Dependency on windowWidth

  return (
    <SplitTextInner key={key + children} mode={mode} {...props} ref={ref}>
      {children}
    </SplitTextInner>
  );
});

export default SplitText;
