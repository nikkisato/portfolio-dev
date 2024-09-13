import { defineField, defineType } from 'sanity';

export const buttonLink = defineType({
  name: 'buttonLink',
  title: 'Button/Link',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'The text that will be displayed on the button or link',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(100)
          .error('Button/Link text is required and should be between 1 and 100 characters'),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'The destination URL',
      validation: (Rule) =>
        Rule.required()
          .uri({
            allowRelative: true,
            scheme: ['http', 'https', 'mailto', 'tel'],
          })
          .error('A valid URL is required'),
    }),
    defineField({
      name: 'isExternal',
      title: 'Open in new tab?',
      type: 'boolean',
      description: 'Should this link open in a new tab?',
      initialValue: false,
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Link', value: 'link' },
        ],
      },
      description: 'Select the style of the button/link',
    }),
  ],
});
