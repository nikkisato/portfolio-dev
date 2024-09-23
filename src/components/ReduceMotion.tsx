import { useEffect, useState } from 'react';

export default function ReduceMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(mediaQuery.matches);

      const handleChange = () => {
        setReduceMotion(mediaQuery.matches);
      };

      // Listen for changes in the 'prefers-reduced-motion' setting
      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return reduceMotion;
}
