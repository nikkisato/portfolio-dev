import { defineField, defineType } from 'sanity';

export const statsSection = defineType({
  name: 'statsSection',
  type: 'object',
  title: 'Stats Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'section_id',
      type: 'string',
      title: 'Section ID',
    }),
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
      title: 'Content',
    }),
    defineField({
      name: 'statItem',
      type: 'array',
      title: 'Stat Items',
      of: [
        {
          type: 'object',
          title: 'Stat Item',
          fields: [
            // defineField({
            //   name: 'icon',
            //   title: 'Icon',
            //   type: 'string',
            //   description: 'Select an icon for this feature',
            //   options: {
            //     list: [
            //       { title: 'Home', value: 'Home' },
            //       { title: 'Star', value: 'StarIcon' },
            //       { title: 'Favorite', value: 'Favorite' },
            //       { title: 'Build', value: 'Build' },
            //       { title: 'AccountCircle', value: 'AccountCircle' },
            //       { title: 'Settings', value: 'Settings' },
            //       { title: 'Sync', value: 'SyncIcon' },
            //       { title: 'Sort', value: 'SortIcon' },
            //       { title: 'Share', value: 'ShareIcon' },
            //       { title: 'Settings', value: 'SettingsIcon' },
            //       { title: 'PlayCircle', value: 'PlayCircleIcon' },
            //       { title: 'Person', value: 'PersonIcon' },
            //       { title: 'PauseCircle', value: 'PauseCircleIcon' },

            // Add more Material UI icons here
            //     ],
            //   },
            // }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              description: 'Heading for Stat Card',
              validation: (Rule) => Rule.required().min(2).max(60),
            }),
            defineField({
              name: 'chips',
              type: 'string',
              title: 'Chips',
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
