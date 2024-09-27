import { defineField, defineType } from 'sanity';

export const projectSection = defineType({
  name: 'projects',
  type: 'object',
  title: 'Projects',
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
      title: 'Content',
    }),

    defineField({
      name: 'projectItems',
      type: 'array',
      title: 'Project Items',
      of: [
        {
          type: 'object',
          title: 'Project Item',
          fields: [
            defineField({
              name: 'eyebrow',
              title: 'Eyebrow',
              type: 'string',
              description: 'Eyebrow for Project Card',
            }),

            defineField({
              name: 'project_type',
              title: 'Project Type',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Image on Left, Content on Right ',
                    value: 'image_on_left_content_on_right',
                  },
                  {
                    title: 'Image on Right, Content on Left ',
                    value: 'image_on_right_content_on_left',
                  },
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              description: 'Heading for Project Card',
              validation: (Rule) => Rule.required().min(5).max(60),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'blockContent',
              description: 'Brief description of the Project',
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
        },
      ],
    }),
  ],
});
