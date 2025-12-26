# Customer Shopping Experience Flow

This document outlines the complete customer journey when purchasing from the Islamic Alliance shop.

## Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    CUSTOMER JOURNEY                          │
└─────────────────────────────────────────────────────────────┘

1. DISCOVER
   ↓
   Customer visits www.islamicalliancenj.com
   Clicks "Shop" in navigation
   ↓

2. BROWSE
   ↓
   Lands on /shop page
   Sees Islamic Alliance Hoodie
   - High-quality product photo
   - Inspiring description with Quranic verse
   - Price: $30.00
   - Available sizes: S, M, L, XL, 2XL, 3XL
   ↓

3. SELECT SIZE
   ↓
   Customer clicks on desired size button
   - Button highlights in blue when selected
   - Can change size by clicking different button
   ↓

4. INITIATE ORDER
   ↓
   Customer clicks "Order Now" button
   - Redirected to checkout page
   - Selected size is pre-filled
   ↓

5. CHECKOUT - Contact Information
   ↓
   Customer enters:
   ✓ Full Name (required)
   ✓ Email (required)
   ○ Phone Number (optional)
   ↓

6. CHECKOUT - Delivery Address
   ↓
   Customer enters:
   ✓ Street Address (required)
   ✓ City (required)
   ✓ State (required, defaults to NJ)
   ✓ ZIP Code (required)
   ↓

7. CHECKOUT - Product Details
   ↓
   Customer confirms/changes:
   - Size (dropdown menu)
   - Quantity (number input)
   - Sees total price calculation
   ↓

8. CHECKOUT - Payment Method
   ↓
   Customer chooses ONE of:
   
   Option A: Pay on Delivery
   - Available for New Jersey only
   - Pay cash when order arrives
   - No upfront payment needed
   
   Option B: Zelle
   - Pay via Zelle app
   - Send to: islamicalliance.nj@gmail.com
   - Optional: Enter confirmation number
   ↓

9. REVIEW & SUBMIT
   ↓
   Customer sees order summary:
   - Product: Islamic Alliance Hoodie
   - Size: [Selected Size]
   - Quantity: [Number]
   - Total: $[Amount]
   
   Customer clicks "Place Order"
   ↓

10. CONFIRMATION
    ↓
    
    IF Pay on Delivery:
    ┌────────────────────────────────────┐
    │  ✓ Order Confirmed!                │
    │                                    │
    │  Thank you for your order.         │
    │  We'll contact you shortly to      │
    │  arrange delivery and payment.     │
    │                                    │
    │  [Return to Shop] [Go to Homepage] │
    └────────────────────────────────────┘
    
    IF Zelle:
    ┌────────────────────────────────────┐
    │  ✓ Order Received!                 │
    │                                    │
    │  Please complete payment via       │
    │  Zelle to:                         │
    │                                    │
    │  islamicalliance.nj@gmail.com      │
    │  Amount: $[Total]                  │
    │                                    │
    │  Include order number in notes     │
    │                                    │
    │  [Return to Shop] [Go to Homepage] │
    └────────────────────────────────────┘
    ↓

11. BACKEND PROCESSING
    ↓
    Order saved to database with:
    - Unique order number (IA-[timestamp]-[random])
    - All customer information
    - Product details
    - Payment method
    - Status: "New" or "Payment Pending"
    ↓

12. ADMIN NOTIFICATION
    ↓
    Admin sees order in Sanity Studio
    Under "Order Submissions"
    ↓

13. ORDER FULFILLMENT
    ↓
    Admin processes order:
    - Verifies payment (if Zelle)
    - Updates status to "Processing"
    - Prepares order
    - Updates status to "Out for Delivery"
    - Delivers order
    - Updates status to "Delivered"
    ↓

14. CUSTOMER RECEIVES ORDER
    ↓
    Customer receives Islamic Alliance Hoodie!
    Wears it with pride 🎉
```

## Detailed Page Descriptions

### Shop Page (`/shop`)

**Visual Elements:**
- Hero section with gradient background
- "Shop" heading with decorative elements
- Product grid (responsive: 1 column mobile, 2-3 columns desktop)

**Product Card Contains:**
- Product image (square aspect ratio)
- Product title: "Islamic Alliance Hoodie"
- Full description with mission statement
- Price: "$30.00" in large, bold text
- Size selection grid (3 columns)
  - Buttons for each size: S, M, L, XL, 2XL, 3XL
  - Selected size highlighted in blue
  - Unselected sizes in white with border
- "Order Now" button (full width, primary color)
- Fulfillment options text below button

**User Interactions:**
- Click size button → Size becomes selected (blue)
- Click different size → Previous deselects, new one selects
- Click "Order Now" without size → Alert: "Please select a size"
- Click "Order Now" with size → Navigate to checkout

### Checkout Page (`/shop/checkout`)

**Layout:**
- Hero section with "Checkout" heading
- Two-column layout (desktop):
  - Left: Order Summary (sticky)
  - Right: Checkout Form
- Single column on mobile (summary on top)

**Order Summary Card:**
```
┌─────────────────────────────┐
│ Order Summary               │
├─────────────────────────────┤
│ Islamic Alliance Hoodie     │
│ White with Logo             │
│                             │
│ Size: [L]                   │
│ Quantity: [1]               │
│ Price per item: $30.00      │
│ ─────────────────────       │
│ Total: $30.00               │
└─────────────────────────────┘
```

**Checkout Form Sections:**

1. **Contact Information**
   - Full Name (text input)
   - Email (email input)
   - Phone (tel input, optional)

2. **Delivery Address**
   - Street Address (textarea, 2 rows)
   - City (text input)
   - State (text input, pre-filled with "NJ")
   - ZIP Code (text input)

3. **Product Details**
   - Size (dropdown select)
   - Quantity (number input, min: 1)

4. **Payment Method**
   - Radio buttons with detailed descriptions
   - Pay on Delivery option with explanation
   - Zelle option with email address
   - Conditional Zelle confirmation field

5. **Order Notes**
   - Textarea for special instructions

6. **Submit Button**
   - "Place Order" button
   - Shows "Processing..." when submitting
   - Disabled during submission

### Confirmation Screens

**Pay on Delivery Confirmation:**
- Green checkmark icon
- "Order Confirmed!" heading
- Thank you message
- Next steps explanation
- Two action buttons

**Zelle Confirmation:**
- Green checkmark icon
- "Order Received!" heading
- Payment instructions prominently displayed
- Zelle email in large text
- Total amount to pay
- Order number reference note
- Two action buttons

## Mobile Experience

### Responsive Breakpoints:
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns for products)

### Mobile Optimizations:
- Touch-friendly size buttons (larger tap targets)
- Simplified navigation
- Stacked form layout
- Full-width buttons
- Readable text sizes
- Optimized images

## Accessibility Features

- ✓ Semantic HTML structure
- ✓ Proper form labels
- ✓ Required field indicators
- ✓ Error messages
- ✓ Keyboard navigation
- ✓ Focus indicators
- ✓ Alt text on images
- ✓ Color contrast compliance

## Error Handling

### Client-Side Validation:
- Empty required fields → Browser validation message
- Invalid email format → Browser validation message
- No size selected → Custom alert message
- Invalid quantity → Browser validation (min: 1)

### Server-Side Validation:
- Missing fields → 400 error with message
- Invalid email → 400 error with message
- Invalid payment method → 400 error with message
- Rate limit exceeded → 429 error with message
- Server error → 500 error with generic message

### User-Friendly Error Display:
- Alert dialogs for critical errors
- Inline validation messages
- Clear error descriptions
- Suggestions for fixing errors

## Performance Optimizations

- ✓ Image optimization with Next.js Image component
- ✓ Lazy loading for images
- ✓ Server-side rendering for initial load
- ✓ Client-side navigation (no full page reloads)
- ✓ Optimized animations with Framer Motion
- ✓ Rate limiting to prevent abuse

## Security Measures

- ✓ Input sanitization
- ✓ Email validation
- ✓ Rate limiting (5 requests/minute)
- ✓ HTTPS encryption
- ✓ No sensitive data in URLs
- ✓ Secure API endpoints

## Analytics Opportunities

Consider tracking:
- Product page views
- Size selection patterns
- Checkout initiation rate
- Checkout completion rate
- Payment method preferences
- Average order value
- Time to complete checkout
- Drop-off points

## Customer Support Touchpoints

### Pre-Purchase:
- Product description with mission alignment
- Clear pricing and sizing information
- Fulfillment options explanation
- Contact link in footer

### During Purchase:
- Form validation and error messages
- Payment instructions
- Order notes field for questions

### Post-Purchase:
- Order confirmation screen
- Order number for reference
- Contact information for questions
- Return to shop option

## Future Enhancements

### Phase 2:
- Email confirmations
- Order tracking page
- Customer account system
- Order history

### Phase 3:
- Multiple product images
- Size guide
- Product reviews
- Wishlist feature

### Phase 4:
- Gift options
- Bulk ordering
- Discount codes
- Loyalty program

---

**This flow ensures a smooth, user-friendly shopping experience that aligns with Islamic Alliance's mission of serving the community with excellence.**

