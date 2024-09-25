import { defineField, defineType } from 'sanity';

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  initialValue: {
    footer_type: 'simple',
  },
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the Footer section',
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
    defineField({
      name: 'newsletterSection',
      title: 'Newsletter Section',
      type: 'newsletter',
      hidden: ({ parent }) =>
        !['4_column_with_newsletter_right', '4_column_with_newsletter_left'].includes(
          parent?.footer_type
        ),
    }),
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement Section',
      type: 'missionStatement',
      hidden: ({ parent }) =>
        !['4_column_with_left_mission', '4_column_with_right_mission'].includes(
          parent?.footer_type
        ),
    }),
  ],
});
