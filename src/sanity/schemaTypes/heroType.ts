import { defineField, defineType } from 'sanity';

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'Eyebrow for the hero section',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the hero section',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Content for the hero section',
    }),
    defineField({
      name: 'ShowTypewriter',
      title: 'Show Typewriter',
      type: 'boolean',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Background image for the hero section',
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
