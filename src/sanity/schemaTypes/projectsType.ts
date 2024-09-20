import { defineField, defineType } from 'sanity';

export const projectsType = defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [{ type: 'reference', to: { type: 'project' } }],
    }),
  ],
});
