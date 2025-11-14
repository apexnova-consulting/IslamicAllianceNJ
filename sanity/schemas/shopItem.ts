import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'shopItem',
  title: 'Shop Items',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Product identifier (e.g., HOODIE-001)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Product description',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      description: 'Product photo (recommended: 1200x1200, square format)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Display price (for reference only until shop is active)',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Is this product available for purchase?',
      initialValue: false,
    }),
    defineField({
      name: 'fulfillmentOptions',
      title: 'Fulfillment Options',
      type: 'text',
      description: 'e.g., "Pay on Delivery - NJ only, or Zelle"',
      rows: 2,
    }),
    defineField({
      name: 'zelleQrImage',
      title: 'Zelle QR Code',
      type: 'image',
      description: 'Upload Zelle QR code for payment',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'image',
      active: 'active',
    },
    prepare({ title, subtitle, media, active }) {
      return {
        title,
        subtitle: `$${subtitle} ${active ? '✓ Active' : '✗ Inactive'}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});

