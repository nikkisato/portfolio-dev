// ./schemas/textWithIllustration.js

import { defineField, defineType } from 'sanity';

export const textWithIllustrationType = defineType({
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text with Illustration',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'text',
    }),
    defineField({
      name: 'text_alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'image_alignment',
      title: 'Image Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left Image', value: 'left' },
          { title: 'Right Image', value: 'right' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
});
