import { defineQuery } from 'next-sanity';
export const PAGE_BUILDER_QUERY = defineQuery(`*[_type == "page"][0] {
  pageBuilder
}`);
