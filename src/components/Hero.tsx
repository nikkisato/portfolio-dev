'use client';

import TypewriterComponent from '@/components/Typewriter';

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
          <ul className="flex">
            {buttons &&
              buttons.map((button) => (
                <li key={button._key}>
                  <a
                    href={button.url}
                    className={`${button.style} p-2 border-b-2 border-transparent hover:border-black dark:hover:border-white`}
                    target={button.isExternal ? '_blank' : '_self'}
                    rel={button.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {button.text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
