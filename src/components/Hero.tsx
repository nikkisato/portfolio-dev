'use client';

import TypewriterComponent from '@/components/Typewriter';
import ButtonLink from './ButtonLink';

interface HeroProps {
  data: {
    eyebrow: string;
    heading: string;
    content: string;
    backgroundImage: string;
    ShowTypewriter: boolean;
    buttons: Array<{
      text: string;
      url: string;
      style: string;
      isExternal: boolean;
      _key: string;
    }>;
  };
}

export default function Hero({ data }: HeroProps) {
  const { eyebrow, heading, content, buttons, ShowTypewriter } = data;

  return (
    <section className="container mx-auto hero-height">
      <div className="flex items-center justify-center flex-col h-full space-y-6">
        <p>{eyebrow}</p>
        <h2 className="text-5xl">{heading}</h2>
        <div>{content}</div>
        {ShowTypewriter === true && (
          <div className="text-3xl">
            I&apos;m a{' '}
            <TypewriterComponent words={['UI Developer', 'A11y Advocate', 'Photographer']} />
          </div>
        )}

        <div>
          <ButtonLink buttons={buttons} />
        </div>
      </div>
    </section>
  );
}
