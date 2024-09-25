import { defineField, defineType } from 'sanity';

export const missionStatementType = defineType({
  name: 'missionStatement',
  title: 'Mission Statement',
  type: 'object',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      description: 'Logo image for the Mission Statement section',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the Mission Statement section',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Content for the Mission Statement section',
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons/Links',
      type: 'array',
      of: [{ type: 'buttonLink' }],
      description: 'Add one or more buttons/links',
      validation: (Rule) => Rule.max(5).error('You can add up to 5 buttons only'),
    }),
  ],
});
