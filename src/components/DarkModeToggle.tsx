'use client';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import React, { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply the dark mode class to the body
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 border-b-2 border-transparent hover:border-black dark:hover:border-white"
    >
      {isDarkMode ? (
        <>
          <LightModeIcon />
          <span
            className="sr-only"
            aria-label="Switch to Light Mode"
          >
            Light Mode
          </span>
        </>
      ) : (
        <>
          <DarkModeIcon />
          <span
            className="sr-only"
            aria-label="Switch to Dark Mode"
          >
            Dark Mode
          </span>
        </>
      )}
    </button>
  );
}
