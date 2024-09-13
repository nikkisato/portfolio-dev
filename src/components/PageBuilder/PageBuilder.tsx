import { sanityFetch } from '@/sanity/lib/client';
import { PAGE_BUILDER_QUERY_2 } from '@/sanity/lib/queries';
import Hero from '../Hero';

export default async function PageBuilder() {
  const data = await sanityFetch({ query: PAGE_BUILDER_QUERY_2 });

  if (!data) return null;

  return (
    <div>
      {data &&
        data.pageBuilder.map((section, index) => {
          console.log('Section', section);
          if (section._type === 'hero') {
            return (
              <Hero
                key={section._key || index}
                data={section}
              />
            );
          }
          return null;
        })}
    </div>
  );
}
