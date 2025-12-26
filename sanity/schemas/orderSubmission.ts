import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'orderSubmission',
  title: 'Order Submissions',
  type: 'document',
  fields: [
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      description: 'Auto-generated order number',
      readOnly: true,
    }),
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Delivery Address',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'zipCode',
      title: 'ZIP Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productTitle',
      title: 'Product',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productSku',
      title: 'Product SKU',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'price',
      title: 'Unit Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: [
          { title: 'Pay on Delivery (NJ only)', value: 'delivery' },
          { title: 'Zelle', value: 'zelle' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'zelleConfirmation',
      title: 'Zelle Confirmation Number',
      type: 'string',
      description: 'If paid via Zelle, customer can provide confirmation',
    }),
    defineField({
      name: 'notes',
      title: 'Order Notes',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Payment Pending', value: 'payment_pending' },
          { title: 'Payment Confirmed', value: 'payment_confirmed' },
          { title: 'Processing', value: 'processing' },
          { title: 'Out for Delivery', value: 'out_for_delivery' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'new',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'adminNotes',
      title: 'Admin Notes',
      type: 'text',
      rows: 3,
      description: 'Internal notes for order management',
    }),
  ],
  preview: {
    select: {
      name: 'fullName',
      product: 'productTitle',
      size: 'size',
      status: 'status',
      orderNumber: 'orderNumber',
    },
    prepare({ name, product, size, status, orderNumber }) {
      return {
        title: `${orderNumber || 'Order'} - ${name}`,
        subtitle: `${product} (${size}) - ${status}`,
      };
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Oldest First',
      name: 'oldestFirst',
      by: [{ field: 'submittedAt', direction: 'asc' }],
    },
  ],
});

