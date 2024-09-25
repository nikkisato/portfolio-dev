import { defineField, defineType } from 'sanity';

export const newsletterType = defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the Newsletter section',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Content for the Newsletter section',
    }),
    defineField({
      name: 'inputPlaceholder',
      title: 'Input Placeholder',
      type: 'string',
      description: 'Placeholder text for the email input field',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the submit button',
    }),
  ],
});
