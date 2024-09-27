import { defineField, defineType } from 'sanity';

// TODO: it would be neat to have a conditional when the user picks the footer_type and is in the process of making the columns to show them what needs to be created

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  initialValue: {
    footer_type: 'simple_centered',
  },
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the Footer section',
    }),
    defineField({
      name: 'footer_type',
      title: 'Footer Type',
      type: 'string',
      validation: (Rule) => Rule.required().error('Footer Type is required.'),

      options: {
        list: [
          { title: 'Simple Centered', value: 'simple_centered' },
          { title: 'Social Links Only', value: 'social_only' },
          { title: '4-column simple', value: '4_column_simple' },
          { title: '4-column with Right newsletter', value: '4_column_with_newsletter_right' },
          { title: '4-column with Left newsletter', value: '4_column_with_newsletter_left' },
          { title: '4-column with Left company mission', value: '4_column_with_left_mission' },
          { title: '4-column with Right company mission', value: '4_column_with_right_mission' },
        ],
        layout: 'radio',
      },
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
              validation: (Rule) => Rule.max(10).error('You can add up to 10 buttons only'),
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
