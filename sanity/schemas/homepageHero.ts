import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'homepageHero',
  title: 'Homepage Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'logoImage',
      title: 'Full-Screen Logo Image',
      type: 'image',
      description: 'Large logo for the hero section (recommended: 1920x1080)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'welcomeHeadline',
      title: 'Welcome Headline',
      type: 'string',
      description: 'Main headline (e.g., "Welcome To Islamic Alliance")',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'welcomeBody',
      title: 'Welcome Body Text',
      type: 'text',
      description: '2-3 sentence welcome message',
      rows: 5,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      description: 'Up to 3 call-to-action buttons',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Button Label', validation: (Rule) => Rule.required() },
            { name: 'url', type: 'string', title: 'URL', validation: (Rule) => Rule.required() },
            {
              name: 'style',
              type: 'string',
              title: 'Button Style',
              options: {
                list: [
                  { title: 'Primary (Filled)', value: 'primary' },
                  { title: 'Outline', value: 'outline' },
                  { title: 'Accent', value: 'accent' },
                ],
              },
              initialValue: 'primary',
            },
          ],
        }),
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
});

