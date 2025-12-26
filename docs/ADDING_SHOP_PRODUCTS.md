# Adding Shop Products

This guide explains how to add products to the Islamic Alliance shop through the Sanity CMS.

## Accessing the Shop Items

1. Navigate to your Sanity Studio at `/studio`
2. Click on "Shop Items" in the sidebar
3. Click "Create" to add a new product

## Adding the Islamic Alliance Hoodie

### Product Details

Use the following information to add the hoodie:

**Product Title:**
```
Islamic Alliance Hoodie
```

**SKU:**
```
HOODIE-001
```

**Description:**
```
Wear your faith with pride and unite with the Ummah in action. This premium Islamic Alliance hoodie embodies our mission of empowering the Muslim community through education, engagement, and service.

Crafted with comfort and quality in mind, this hoodie features our distinctive logo - a symbol of unity, strength, and the beautiful architecture of Islamic tradition. The white color represents purity of intention, while the navy and gold accents reflect the richness of our heritage.

Every purchase supports our programs that serve the community, from educational initiatives to charitable outreach. When you wear this hoodie, you're not just making a fashion statement - you're joining a movement dedicated to strengthening the bonds of brotherhood and sisterhood, and making a positive impact in New Jersey and beyond.

"And hold firmly to the rope of Allah all together and do not become divided." (Quran 3:103)

Join the Alliance. Wear the mission. Be the change.
```

**Price:**
```
30.00
```

**Available Sizes:**
Select all of the following:
- Small (S)
- Medium (M)
- Large (L)
- X-Large (XL)
- 2X-Large (2XL)
- 3X-Large (3XL)

**Active:**
```
✓ Check this box to make the product available for purchase
```

**Fulfillment Options:**
```
Pay on Delivery (NJ only) or Zelle payment to islamicalliance.nj@gmail.com
```

**Display Order:**
```
1
```

### Uploading Product Images

1. Click on the "Product Image" field
2. Upload the hoodie photos (both the female and male model photos)
3. For the **Alt Text**, use:
   ```
   Islamic Alliance Hoodie - White hoodie with Islamic Alliance logo and "Ummah in Action" tagline
   ```
4. Adjust the hotspot to center on the logo if needed

### Optional: Zelle QR Code

If you have a Zelle QR code for payments:
1. Click on "Zelle QR Code" field
2. Upload the QR code image
3. This will be displayed to customers who choose Zelle payment

## Product Features

The shop system includes:

### For Customers:
- **Size Selection**: Customers can select their size (S-3XL) before ordering
- **Checkout Process**: Complete order form with delivery address
- **Payment Options**:
  - **Pay on Delivery**: For New Jersey customers only
  - **Zelle**: Instant payment to islamicalliance.nj@gmail.com

### For Administrators:
- **Order Management**: All orders are stored in Sanity under "Order Submissions"
- **Order Tracking**: Each order has a unique order number
- **Status Updates**: Track orders from "New" to "Delivered"
- **Customer Information**: Full contact and delivery details

## Managing Orders

### Viewing Orders

1. Go to Sanity Studio
2. Click on "Order Submissions" in the sidebar
3. You'll see all orders with:
   - Order number
   - Customer name
   - Product and size
   - Order status

### Order Statuses

- **New**: Order just received
- **Payment Pending**: Waiting for Zelle payment
- **Payment Confirmed**: Payment received
- **Processing**: Preparing the order
- **Out for Delivery**: Order is being delivered
- **Delivered**: Order completed
- **Cancelled**: Order cancelled

### Processing an Order

1. Click on an order to view details
2. Verify customer information
3. If payment method is Zelle:
   - Check your Zelle account for payment
   - Update status to "Payment Confirmed" once received
4. Update status to "Processing" when preparing the order
5. Update to "Out for Delivery" when shipping
6. Update to "Delivered" when complete
7. Add any notes in "Admin Notes" field

## Customer Experience

### Shopping Flow:

1. Customer visits `/shop`
2. Views the hoodie with description and pricing
3. Selects their size (S-3XL)
4. Clicks "Order Now"
5. Redirected to checkout page
6. Fills out:
   - Contact information (name, email, phone)
   - Delivery address (street, city, state, ZIP)
   - Confirms size and quantity
   - Selects payment method
7. Submits order
8. If Zelle selected: Shown payment instructions
9. Receives confirmation

## Tips for Success

### Product Photography
- Use high-quality, well-lit photos
- Show the product from multiple angles
- Include both male and female model photos
- Ensure the logo is clearly visible

### Product Descriptions
- Highlight the mission and values
- Include relevant Quranic verses or hadith
- Explain how purchases support the organization
- Be clear about sizing and materials

### Inventory Management
- Uncheck "Active" when out of stock
- Update the description if sizes are limited
- Consider adding new products regularly

### Customer Service
- Respond to orders promptly
- Update order statuses regularly
- Keep customers informed of delivery times
- Use the admin notes for internal tracking

## Troubleshooting

### Product Not Showing
- Ensure "Active" is checked
- Verify an image is uploaded
- Check that price is set
- Confirm at least one size is selected

### Orders Not Coming Through
- Check the API route is working
- Verify Sanity permissions
- Check browser console for errors

### Payment Issues
- Verify Zelle email is correct: islamicalliance.nj@gmail.com
- Confirm payment method is selected
- Check order status in Sanity

## Future Enhancements

Consider adding:
- Email confirmations to customers
- Email notifications to admins
- Inventory tracking per size
- Multiple product images
- Product reviews
- Discount codes
- Shipping options beyond local delivery

## Support

For technical issues or questions, contact your web developer or refer to the main documentation in `/docs`.

