import { defineField, defineType } from 'sanity';
import StarIcon from '@mui/icons-material/Star';
import SyncIcon from '@mui/icons-material/Sync';
import SortIcon from '@mui/icons-material/Sort';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PersonIcon from '@mui/icons-material/Person';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export const featureSection = defineType({
  name: 'featureSection',
  type: 'object',
  title: 'Feature Section',
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
                  { title: 'Star', value: 'StarIcon' },
                  { title: 'Favorite', value: 'Favorite' },
                  { title: 'Build', value: 'Build' },
                  { title: 'AccountCircle', value: 'AccountCircle' },
                  { title: 'Settings', value: 'Settings' },
                  { title: 'Sync', value: 'SyncIcon' },
                  { title: 'Sort', value: 'SortIcon' },
                  { title: 'Share', value: 'ShareIcon' },
                  { title: 'Settings', value: 'SettingsIcon' },
                  { title: 'PlayCircle', value: 'PlayCircleIcon' },
                  { title: 'Person', value: 'PersonIcon' },
                  { title: 'PauseCircle', value: 'PauseCircleIcon' },
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
              name: 'featureImage',
              title: 'Feature Image',
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
