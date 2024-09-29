import { defineField, defineType } from 'sanity';

// TODO: it would be neat to have a conditional when the user picks the footer_type and is in the process of making the columns to show them what needs to be created

export const siteInfoType = defineType({
  name: 'siteInfo',
  title: 'Site Info',
  type: 'document',

  fields: [
    defineField({
      name: 'lightBackgroundColor',
      title: 'Light Background Color',
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
      name: 'lightTextColor',
      title: 'Light Text Color',
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
      name: 'lightPrimaryColor',
      title: 'Light Primary Color',
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
      name: 'lightAccentColor',
      title: 'Light Accent Color',
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
      name: 'lightDangerColor',
      title: 'Light Danger Color',
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
      name: 'lightWarningColor',
      title: 'Light Warning Color',
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
      name: 'lightSecondaryColor',
      title: 'Light Secondary Color',
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
  ],
});

//Background
//Text
//Primary
//Accent
//Danger
//Warning
//Secondary

// Color	Tailwind Class	Hex Code	Contrast Ratio
// Background	bg-white	#FFFFFF	-
// Text	text-gray-800	#1F2937	-
// Primary	bg-blue-500	#3B82F6	4.5:1
// Accent	bg-green-500	#22C55E	4.5:1
// Danger	bg-red-500	#EF4444	4.5:1
// Warning	bg-yellow-500	#FBBF24	4.5:1
// Secondary	bg-gray-300	#D1D5DB	3.0:1
// Dark Mode Colors
// Color	Tailwind Class	Hex Code	Contrast Ratio
// Background	bg-gray-900	#111827	-
// Text	text-white	#FFFFFF	-
// Primary	bg-blue-400	#60A5FA	4.5:1
// Accent	bg-green-400	#34D399	4.5:1
// Danger	bg-red-400	#FCA5A1	4.5:1
// Warning	bg-yellow-400	#FBBF24	4.5:1
// Secondary	bg-gray-700	#374151	3.0:1
