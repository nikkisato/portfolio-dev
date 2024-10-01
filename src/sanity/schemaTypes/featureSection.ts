import { defineField, defineType } from 'sanity';

export const featureSection = defineType({
  name: 'featureSection',
  type: 'object',
  title: 'Feature Section',
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
      name: 'feature_type',
      title: 'Feature Type',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          {
            title: 'Simple two column with small icons ',
            value: 'simple_two_columns_with_small_icons',
          },
          {
            title: 'Simple three column with small icons ',
            value: 'simple_three_columns_with_small_icons',
          },
          {
            title: 'Simple three column with large icons ',
            value: 'simple_three_columns_with_large_icons',
          },
          { title: 'With Product Screenshot on Left', value: 'with_product_screenshot_on_left' },
          { title: 'With Product Screenshot on Right', value: 'with_product_screenshot_on_right' },

          { title: 'Offset 2x2 Grid', value: 'offset_2x2_grid' },
          { title: 'Offset with Feature List', value: 'offset_with_feature_list' },
          { title: 'With Large Screenshot', value: 'with_large_screenshot' },
          { title: 'Centered 2x2 Grid', value: 'centered_2x2_grid' },
          { title: 'Simple Three Columns Cards', value: 'simple_three_columns_cards' },
        ],
        layout: 'radio',
      },
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
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image for the Feature section',
      hidden: ({ parent }) =>
        ![
          'with_product_screenshot_on_left',
          'with_product_screenshot_on_right',
          'with_large_screenshot',
        ].includes(parent?.feature_type),
    }),
    defineField({
      name: 'featureItems',
      type: 'array',
      title: 'Feature Items',
      of: [
        {
          type: 'object',
          title: 'Feature Item',
          fields: [
            defineField({
              name: 'eyebrow',
              title: 'Eyebrow',
              type: 'string',
              description: 'Eyebrow for Feature Card',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Select an icon for this feature',
              options: {
                list: [
                  { title: 'Home', value: 'Home' },
                  { title: 'Star', value: 'Star' },
                  { title: 'Favorite', value: 'Favorite' },
                  { title: 'Build', value: 'Build' },
                  { title: 'AccountCircle', value: 'AccountCircle' },
                  { title: 'Settings', value: 'Settings' },
                  { title: 'Sync', value: 'Sync' },
                  { title: 'Sort', value: 'Sort' },
                  { title: 'Share', value: 'Share' },
                  { title: 'Settings', value: 'Settings' },
                  { title: 'PlayCircle', value: 'PlayCircle' },
                  { title: 'Person', value: 'Person' },
                  { title: 'PauseCircle', value: 'PauseCircle' },
                  { title: 'Code', value: 'Code' },
                  { title: 'Accessibility', value: 'Accessibility' },
                  { title: 'Camera', value: 'Camera' },

                  // Add more Material UI icons here
                ],
              },
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              description: 'Heading for Feature Card',
              validation: (Rule) => Rule.required().min(5).max(60),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'blockContent',
              description: 'Brief description of the feature',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'Feature image for the Feature section',
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
