import { defineField, defineType } from 'sanity';

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'footer_type',
      title: 'Footer Type',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Social And Copyright', value: 'social_and_copyright' },
          { title: 'Complex', value: 'complex' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the Nav section',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      description: 'Logo image for the Nav section',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Column',
          fields: [
            defineField({
              name: 'columnTitle',
              title: 'Column Title',
              type: 'string',
            }),
            defineField({
              name: 'buttons',
              title: 'Buttons/Links',
              type: 'array',
              of: [{ type: 'buttonLink' }],
              description: 'Add one or more buttons/links to this column',
              validation: (Rule) => Rule.max(5).error('You can add up to 5 buttons only'),
            }),
          ],
        },
      ],
      description: 'Add up to 4 columns with links/buttons',
      validation: (Rule) => Rule.max(4).error('You can add up to 4 columns only'),
    }),
  ],
});
