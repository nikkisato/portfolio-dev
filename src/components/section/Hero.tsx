'use client';

import TypewriterComponent from '@/components/Typewriter';
import ButtonLink from '@/components/ButtonLink';
import { ButtonsItemProp } from '@/sanity/lib/types';

interface HeroProps {
  data: {
    eyebrow: string;
    heading: string;
    content: string;
    backgroundImage: string;
    ShowTypewriter: boolean;
    buttons: ButtonsItemProp[];
  };
}

export default function Hero({ data }: HeroProps) {
  const { eyebrow, heading, content, buttons, ShowTypewriter } = data;

  return (
    <section className="container mx-auto hero-height">
      <div className="flex items-center justify-center flex-col h-full space-y-6">
        <p>{eyebrow}</p>
        <h2 className="text-5xl text-center">{heading}</h2>
        <div>{content}</div>
        {ShowTypewriter === true && (
          <div className="text-3xl">
            I&apos;m a{' '}
            <TypewriterComponent words={['UI Developer', 'A11y Advocate', 'Photographer']} />
          </div>
        )}

        <div>
          <ButtonLink
            buttons={buttons}
            mobileDirection="row"
            mobileSpacing="horizontal"
            desktopDirection="row"
            desktopSpacing="horizontal"
          />
        </div>
      </div>
    </section>
  );
}
