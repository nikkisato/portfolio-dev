import { PAGE_BUILDER_QUERY } from '@/sanity/lib/queries';
import PageBuilder from '@/components/PageBuilder/PageBuilder';
import { sanityFetch } from '@/sanity/lib/client';

export default async function Home() {
  const pageBuilder = await sanityFetch({
    query: PAGE_BUILDER_QUERY,
  });

  return <PageBuilder pageBuilder={pageBuilder} />;
}
