import { defineField, defineType } from 'sanity';

export const projectItemType = defineType({
  name: 'project',
  type: 'document',
  title: 'Project Item',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the Project section',
      validation: (Rule) => Rule.required().min(10).max(60),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'Brief description of the project',
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      description: 'Project image for the Project section',
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
