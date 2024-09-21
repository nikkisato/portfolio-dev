import { useState } from 'react';

export function ToggleButton() {
  const [isPressed, setIsPressed] = useState(false);

  const toggleIsPressed = () => {
    setIsPressed(!isPressed);
  };

  return (
    <>
      <button
        aria-pressed={isPressed}
        onClick={toggleIsPressed}
      >
        Toggle text
        <span
          aria-hidden="true"
          className="icon"
        >
          ▼
        </span>
      </button>

      {isPressed && <p>The button is pressed!</p>}
    </>
  );
}
