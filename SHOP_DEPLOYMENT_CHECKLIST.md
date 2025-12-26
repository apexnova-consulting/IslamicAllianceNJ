# Shop Feature Deployment Checklist

Use this checklist to ensure the shop feature is properly deployed and tested before going live.

## Pre-Deployment Checklist

### Code Review
- [x] All new files created and saved
- [x] No linting errors
- [x] TypeScript types are correct
- [x] All imports are valid
- [x] No console.log statements left in production code

### Database Schema
- [ ] Sanity Studio is accessible
- [ ] `orderSubmission` schema is deployed
- [ ] `shopItem` schema updates are deployed
- [ ] Test creating a shop item in Sanity
- [ ] Test creating an order submission manually

### Environment Variables
- [ ] Sanity project ID is correct
- [ ] Sanity dataset is correct
- [ ] Sanity API token has write permissions
- [ ] All environment variables are set in production

## Deployment Steps

### 1. Deploy Code Changes

```bash
# Ensure all changes are committed
git status

# If using Git, commit changes
git add .
git commit -m "Add shop feature with hoodie product and checkout"

# Push to repository
git push origin main

# Deploy to hosting (Vercel/Netlify/etc.)
# Follow your hosting provider's deployment process
```

### 2. Deploy Sanity Schema

```bash
# Navigate to project root
cd /path/to/IslamicAllianceNJ_Website

# Deploy Sanity schema
npm run sanity:deploy
# or
npx sanity deploy
```

### 3. Verify Deployment

- [ ] Website is accessible
- [ ] No build errors
- [ ] No runtime errors in browser console
- [ ] Sanity Studio is accessible at `/studio`

## Post-Deployment Testing

### Shop Page Testing

- [ ] Navigate to `/shop`
- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] If no products: "Coming Soon" message displays
- [ ] Page is responsive on mobile
- [ ] Page is responsive on tablet
- [ ] Page is responsive on desktop

### Add Hoodie Product

Follow `HOODIE_SETUP_GUIDE.md`:

- [ ] Access Sanity Studio
- [ ] Create new Shop Item
- [ ] Fill in all required fields:
  - [ ] Product Title
  - [ ] SKU
  - [ ] Description (copy from guide)
  - [ ] Product Image uploaded
  - [ ] Alt text added
  - [ ] Price set to 30
  - [ ] All sizes selected (S, M, L, XL, 2XL, 3XL)
  - [ ] Active checkbox checked
  - [ ] Fulfillment options filled
  - [ ] Display order set to 1
- [ ] Click Publish
- [ ] Verify product appears on `/shop` page

### Product Display Testing

- [ ] Product image displays correctly
- [ ] Product title displays: "Islamic Alliance Hoodie"
- [ ] Full description displays with line breaks
- [ ] Price displays: "$30.00"
- [ ] All 6 size buttons display (S, M, L, XL, 2XL, 3XL)
- [ ] Size buttons are clickable
- [ ] Selected size highlights in blue
- [ ] Can change size selection
- [ ] "Order Now" button displays
- [ ] Fulfillment options text displays below button

### Size Selection Testing

- [ ] Click on "S" → Button turns blue
- [ ] Click on "M" → "M" turns blue, "S" turns white
- [ ] Click on "L" → "L" turns blue, "M" turns white
- [ ] Click on "XL" → "XL" turns blue, "L" turns white
- [ ] Click on "2XL" → "2XL" turns blue, "XL" turns white
- [ ] Click on "3XL" → "3XL" turns blue, "2XL" turns white
- [ ] Size selection works on mobile
- [ ] Size selection works on tablet

### Checkout Navigation Testing

- [ ] Click "Order Now" without selecting size → Alert appears
- [ ] Alert message: "Please select a size before ordering"
- [ ] Click OK on alert → Stays on shop page
- [ ] Select size "M"
- [ ] Click "Order Now" → Redirects to checkout page
- [ ] URL includes product ID and size: `/shop/checkout?product=...&size=M`

### Checkout Page Testing

#### Page Load
- [ ] Checkout page loads without errors
- [ ] Hero section displays "Checkout" heading
- [ ] Order summary card displays on left (desktop)
- [ ] Checkout form displays on right (desktop)
- [ ] Layout stacks properly on mobile
- [ ] Selected size appears in order summary
- [ ] Price shows $30.00
- [ ] Total calculates correctly

#### Form Fields
- [ ] Full Name field is present and required
- [ ] Email field is present and required
- [ ] Phone field is present and optional
- [ ] Address textarea is present and required
- [ ] City field is present and required
- [ ] State field is present, required, pre-filled with "NJ"
- [ ] ZIP Code field is present and required
- [ ] Size dropdown is present and required
- [ ] Size dropdown shows all 6 sizes
- [ ] Selected size is pre-selected in dropdown
- [ ] Quantity field is present, required, defaults to 1
- [ ] Payment method radio buttons are present
- [ ] Both payment options display with descriptions
- [ ] Order notes textarea is present and optional

#### Form Validation
- [ ] Submit empty form → Browser validation messages appear
- [ ] Enter invalid email → Browser validation error
- [ ] Enter valid email → No error
- [ ] Change quantity to 0 → Validation error
- [ ] Change quantity to -1 → Validation error
- [ ] Change quantity to 2 → Total updates to $60.00
- [ ] Change quantity to 3 → Total updates to $90.00

#### Payment Method Selection
- [ ] Click "Pay on Delivery" radio → Selected
- [ ] Description shows "Available for New Jersey only"
- [ ] Zelle confirmation field does NOT appear
- [ ] Click "Zelle" radio → Selected
- [ ] Description shows Zelle email
- [ ] Zelle confirmation field appears
- [ ] Can switch between payment methods

### Order Submission Testing (Pay on Delivery)

Fill out form with test data:
- Full Name: Test Customer
- Email: test@example.com
- Phone: 555-123-4567
- Address: 123 Test Street
- City: Newark
- State: NJ
- ZIP: 07102
- Size: L
- Quantity: 1
- Payment Method: Pay on Delivery

- [ ] Click "Place Order"
- [ ] Button shows "Processing..." while submitting
- [ ] Button is disabled during submission
- [ ] Success screen appears
- [ ] Green checkmark icon displays
- [ ] "Order Confirmed!" heading displays
- [ ] Thank you message displays
- [ ] "Return to Shop" button is present
- [ ] "Go to Homepage" button is present

### Order Submission Testing (Zelle)

Repeat with Zelle payment:
- [ ] Select "Zelle" payment method
- [ ] Fill out all required fields
- [ ] Click "Place Order"
- [ ] Success screen appears
- [ ] "Order Received!" heading displays
- [ ] Zelle payment instructions display
- [ ] Zelle email shows: islamicalliance.nj@gmail.com
- [ ] Total amount displays correctly
- [ ] Order number reference note displays

### Admin Order Verification

- [ ] Go to Sanity Studio
- [ ] Click "Order Submissions" in sidebar
- [ ] Test order appears in list
- [ ] Click on order to view details
- [ ] All customer information is correct
- [ ] Product details are correct
- [ ] Payment method is correct
- [ ] Order number is present (format: IA-[timestamp]-[code])
- [ ] Submitted timestamp is correct
- [ ] Status is "New" (for Pay on Delivery) or "Payment Pending" (for Zelle)

### Order Management Testing

- [ ] Click on an order in Sanity
- [ ] Change status to "Processing"
- [ ] Click Publish
- [ ] Status updates successfully
- [ ] Change status to "Out for Delivery"
- [ ] Click Publish
- [ ] Status updates successfully
- [ ] Change status to "Delivered"
- [ ] Click Publish
- [ ] Status updates successfully
- [ ] Add text to "Admin Notes"
- [ ] Click Publish
- [ ] Notes save successfully

### Mobile Responsive Testing

Test on actual mobile device or browser dev tools:

#### Shop Page Mobile
- [ ] Navigation menu works
- [ ] Hero section displays properly
- [ ] Product card is full width
- [ ] Product image displays correctly
- [ ] Text is readable
- [ ] Size buttons are touch-friendly
- [ ] Size selection works
- [ ] "Order Now" button is easy to tap

#### Checkout Page Mobile
- [ ] Page scrolls smoothly
- [ ] Order summary displays at top
- [ ] Form fields are full width
- [ ] Input fields are easy to tap
- [ ] Keyboard appears for text inputs
- [ ] Number keyboard for quantity
- [ ] Email keyboard for email field
- [ ] Payment method radios are easy to tap
- [ ] Submit button is easy to tap
- [ ] Success screen displays properly

### Browser Compatibility Testing

Test in multiple browsers:
- [ ] Chrome (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (desktop)
- [ ] Safari (mobile/iOS)
- [ ] Firefox
- [ ] Edge

### Performance Testing

- [ ] Shop page loads in < 3 seconds
- [ ] Checkout page loads in < 3 seconds
- [ ] Images load quickly
- [ ] No layout shift during load
- [ ] Animations are smooth
- [ ] Form submission is responsive

### Security Testing

- [ ] Try submitting 6 orders rapidly → Rate limit kicks in
- [ ] Rate limit error message displays
- [ ] Try submitting with invalid email → Error message
- [ ] Try submitting with missing fields → Error message
- [ ] Try submitting with invalid payment method → Error message
- [ ] All API requests use HTTPS
- [ ] No sensitive data in browser console

### Error Handling Testing

- [ ] Disconnect internet → Submission fails gracefully
- [ ] Error message is user-friendly
- [ ] User can retry after error
- [ ] Invalid product ID in URL → Redirects to shop
- [ ] Missing size in URL → Size field is empty
- [ ] Sanity API down → Graceful error handling

## Go-Live Checklist

### Final Preparations

- [ ] All tests passed
- [ ] No critical bugs found
- [ ] Product description is approved
- [ ] Product images are approved
- [ ] Pricing is confirmed ($30.00)
- [ ] Zelle email is confirmed (islamicalliance.nj@gmail.com)
- [ ] Fulfillment process is established
- [ ] Team knows how to check orders
- [ ] Team knows how to update order status

### Communication

- [ ] Announce shop launch on social media
- [ ] Send email to mailing list (if applicable)
- [ ] Update homepage with shop link
- [ ] Train staff on order management
- [ ] Prepare FAQ for common questions

### Monitoring

First 24 hours:
- [ ] Check for orders every 2-4 hours
- [ ] Monitor for error reports
- [ ] Check browser console for errors
- [ ] Monitor Sanity for successful order submissions
- [ ] Respond to first orders promptly

First week:
- [ ] Daily order checks
- [ ] Monitor customer feedback
- [ ] Track conversion rate
- [ ] Note any issues or improvements needed
- [ ] Update documentation if needed

### Success Metrics

Track these metrics:
- [ ] Number of shop page visits
- [ ] Number of orders submitted
- [ ] Conversion rate (orders / visits)
- [ ] Average order value
- [ ] Payment method split (Delivery vs Zelle)
- [ ] Order fulfillment time
- [ ] Customer satisfaction

## Rollback Plan

If critical issues arise:

### Option 1: Disable Product
1. Go to Sanity Studio
2. Open the hoodie product
3. Uncheck "Active"
4. Click Publish
5. Product disappears from shop page
6. "Coming Soon" message displays

### Option 2: Disable Shop Page
1. Update shop page to show maintenance message
2. Deploy changes
3. Fix issues
4. Re-enable when ready

### Option 3: Full Rollback
1. Revert Git commit
2. Redeploy previous version
3. Fix issues in development
4. Test thoroughly
5. Redeploy

## Support Resources

- **Setup Guide**: `HOODIE_SETUP_GUIDE.md`
- **Product Management**: `docs/ADDING_SHOP_PRODUCTS.md`
- **Customer Flow**: `SHOP_CUSTOMER_FLOW.md`
- **Feature Summary**: `SHOP_UPDATE_SUMMARY.md`
- **Admin Guide**: `docs/ADMIN.md`

## Contact Information

For technical support:
- Check documentation first
- Review error messages
- Check browser console
- Contact web developer if needed

---

## Sign-Off

Deployment completed by: ___________________

Date: ___________________

All tests passed: [ ] Yes [ ] No

Issues noted: ___________________

Ready for production: [ ] Yes [ ] No

---

**Once all items are checked, the shop feature is ready to go live! 🚀**

