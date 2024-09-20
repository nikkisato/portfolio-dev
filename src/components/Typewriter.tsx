'use client';

import { Typewriter } from 'react-simple-typewriter';

interface TypewriterComponentProps {
  words: string[];
}

export default function TypewriterComponent({ words }: TypewriterComponentProps) {
  return (
    <Typewriter
      words={words}
      loop={25}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
}
