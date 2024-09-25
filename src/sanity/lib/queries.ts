import { defineQuery } from 'next-sanity';
export const PAGE_BUILDER_QUERY = defineQuery(`*[_type == "page"][0] {
  pageBuilder
}`);

export const HEADER_QUERY = defineQuery(`*[_type == "header"][0]`);
export const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0]`);

export const PROJECT_QUERY = defineQuery(`*[_type == "project"]`);
