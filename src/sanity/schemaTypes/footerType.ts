import { defineField, defineType } from 'sanity';

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
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
      name: 'buttons',
      title: 'Buttons/Links',
      type: 'array',
      of: [{ type: 'buttonLink' }],
      description: 'Add one or more buttons/links',
      validation: (Rule) => Rule.max(5).error('You can add up to 5 buttons only'),
    }),
  ],
});
