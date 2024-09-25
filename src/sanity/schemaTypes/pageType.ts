import { defineArrayMember, defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineField({
          name: 'hero',
          title: 'Hero Section',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          title: 'Text with Illustration Section',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'gallery',
          title: 'Gallery Section',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          title: 'Form Section',
          type: 'form',
        }),
        defineArrayMember({
          name: 'video',
          title: 'Video Section',
          type: 'video',
        }),
        defineArrayMember({
          name: 'feature',
          title: 'Feature Section',
          type: 'featureSection',
        }),
        defineArrayMember({
          name: 'callToAction',
          title: 'Call To Action Section',
          type: 'reference',
          to: [{ type: 'callToAction' }],
        }),
        defineArrayMember({
          name: 'projects',
          title: 'Project Section',
          type: 'projects',
        }),
      ],
    }),
  ],
});
