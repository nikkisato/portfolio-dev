import { defineArrayMember, defineType } from 'sanity';

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // Adding description list type
    defineArrayMember({
      type: 'object',
      name: 'descriptionList',
      title: 'Description List',
      fields: [
        {
          title: 'Terms',
          name: 'terms',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  title: 'Term',
                  name: 'term',
                  type: 'string',
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
