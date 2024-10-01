import { sanityFetch } from '@/sanity/lib/client';
import { PAGE_BUILDER_QUERY } from '@/sanity/lib/queries';
import Hero from '@/components/section/Hero';
import CallToAction from '@/components/section/CallToAction';
import TextWithIllustration from '@/components/section/TextWithIllustration';
import Project from '@/components/section/Project';
import Feature from '@/components/section/Feature';
import Stats from '@/components/section/Stats';

import { Section } from '@/sanity/lib/types';

export default async function PageBuilder() {
  const data = await sanityFetch({ query: PAGE_BUILDER_QUERY });

  if (!data) return null;

  return (
    <div className="space-y-10">
      {data &&
        data.pageBuilder.map((section: Section) => {
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
            case 'stats':
              return (
                <Stats
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
            case 'feature':
              return (
                <Feature
                  key={key}
                  data={section}
                />
              );
            default:
              return null;
          }
        })}
    </div>
  );
}
