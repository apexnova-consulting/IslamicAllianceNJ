import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateTime',
      title: 'Date & Time',
      type: 'datetime',
      description: 'Event date and time',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Event location (e.g., "Community Center, Newark, NJ")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locationMapUrl',
      title: 'Google Maps Link',
      type: 'url',
      description: 'Optional Google Maps link for the location',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'Full event description (supports rich text)',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'flyerImage',
      title: 'Event Flyer',
      type: 'image',
      description: 'Event flyer or featured image (recommended: 1200x675)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Describe the image for accessibility',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'registerUrl',
      title: 'Register URL',
      type: 'url',
      description: 'Eventbrite or external registration link',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'Event categories or tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Feature this event on the homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'dateTime',
      media: 'flyerImage',
    },
    prepare({ title, date }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date set',
      };
    },
  },
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'dateTime', direction: 'desc' }],
    },
    {
      title: 'Date (Oldest First)',
      name: 'dateAsc',
      by: [{ field: 'dateTime', direction: 'asc' }],
    },
  ],
});

