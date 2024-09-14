import { sanityFetch } from '@/sanity/lib/client';
import { PAGE_BUILDER_QUERY } from '@/sanity/lib/queries';
import Hero from './Hero';
// import CallToAction from './CallToAction';
import TextWithIllustration from './TextWithIllustration';

export default async function PageBuilder() {
  const data = await sanityFetch({ query: PAGE_BUILDER_QUERY });

  if (!data) return null;

  return (
    <div>
      {data &&
        data.pageBuilder.map((section, index: number) => {
          switch (section._type) {
            case 'hero':
              return (
                <Hero
                  key={section._key || index}
                  data={section}
                />
              );
              break;
            // case 'callToAction':
            //   return (
            //     <CallToAction
            //       key={section._key || index}
            //       data={section}
            //     />
            //   );
            //   break;
            case 'textWithIllustration':
              return (
                <TextWithIllustration
                  key={section._key || index}
                  data={section}
                />
              );
              break;

            default:
              return null;
          }

          return null;
        })}
    </div>
  );
}
