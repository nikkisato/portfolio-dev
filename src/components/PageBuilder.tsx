import { sanityFetch } from '@/sanity/lib/client';
import { PAGE_BUILDER_QUERY } from '@/sanity/lib/queries';
import Hero from './Hero';
import CallToAction from './CallToAction';
import TextWithIllustration from './TextWithIllustration';
import Project from './Project';

interface sectionProp {
  _key?: string;
  _id?: string;
  _type?: string;

  data: {
    _ref?: string;
  };

  _ref?: string;
  alignment?: string;
  image?: { asset: { _ref: string }; alt: string };
  image_alignment?: 'left' | 'right';
  text_alignment?: 'center' | 'left' | 'right';

  eyebrow?: string;
  heading?: string;
  content?: string;
  backgroundImage?: string;
  ShowTypewriter?: boolean;
  buttons?: Array<{
    text: string;
    url: string;
    style: string;
    isExternal: boolean;
    _key: string;
  }>;
}

export default async function PageBuilder() {
  const data = await sanityFetch({ query: PAGE_BUILDER_QUERY });

  if (!data) return null;

  return (
    <div className="space-y-10">
      {data &&
        data.pageBuilder.map((section: sectionProp) => {
          const key = section._key || section._id || `section-${Math.random()}`;

          switch (section._type) {
            case 'hero':
              return (
                <Hero
                  key={key}
                  data={section}
                />
              );
              break;
            case 'projects':
              return (
                <Project
                  key={key}
                  data={section}
                />
              );
              break;
            case 'callToAction':
              return (
                <CallToAction
                  key={key}
                  data={section}
                />
              );
              break;
            case 'textWithIllustration':
              return (
                <TextWithIllustration
                  key={key}
                  data={section}
                />
              );
              break;
            default:
              return null;
          }
        })}
    </div>
  );
}
