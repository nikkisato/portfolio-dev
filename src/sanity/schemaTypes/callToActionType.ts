import { defineField, defineType } from 'sanity';

export const callToActionType = defineType({
  name: 'callToAction',
  type: 'object',
  title: 'Call To Action',
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
    }),
    defineField({
      name: 'section_id',
      type: 'string',
      title: 'Section ID',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the Call To Action section',
      validation: (Rule) => Rule.required().min(5).max(60),
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
      title: 'Content',
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons/Links',
      type: 'array',
      of: [{ type: 'buttonLink' }],
      description: 'Add one or more buttons/links',
      validation: (Rule) => Rule.max(3).error('You can add up to 3 buttons only'),
    }),
  ],
});
