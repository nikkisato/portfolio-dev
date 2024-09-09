import { defineQuery } from 'next-sanity';

export const PAGE_BUILDER_QUERY = defineQuery(`*[_type == "page"]{
  pageBuilder[]{
    // "hero" in an "object" from which we can "pick" fields
    _type == "hero" => {
      _type,
      heading,
      tagline,
      image
    },
  },
}`);
