import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The main title for the website',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Upload the main logo (recommended: SVG or PNG with transparent background)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerText',
      title: 'Footer About Text',
      type: 'text',
      description: 'Short about text that appears in the footer (2-3 sentences)',
      rows: 4,
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      description: 'Full Instagram profile URL',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'Main contact email address',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'donateUrl',
      title: 'Donate URL',
      type: 'url',
      description: 'External donation page URL',
    }),
    defineField({
      name: 'showDonationBanner',
      title: 'Show Donation Banner',
      type: 'boolean',
      description: 'Toggle to show/hide the donation banner at the top of the site',
      initialValue: false,
    }),
    defineField({
      name: 'donationBannerText',
      title: 'Donation Banner Text',
      type: 'string',
      description: 'Text to display in the donation banner',
    }),
  ],
});

