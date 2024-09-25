'use client';

import ReduceMotion from '@/components/ReduceMotion';

import { Typewriter } from 'react-simple-typewriter';

interface TypewriterComponentProps {
  words: string[];
}

export default function TypewriterComponent({ words }: TypewriterComponentProps) {
  const isReduceMotion = ReduceMotion();

  if (isReduceMotion) {
    // if User has enabled reduced motion in their OS
    return (
      <span>
        {words[0]}, {words[1]}, and {words[2]}
      </span>
    );
  } else {
    return (
      <>
        <Typewriter
          words={words}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={4000}
          aria-live="polite"
        />
      </>
    );
  }
}
