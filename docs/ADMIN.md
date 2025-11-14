# CMS Admin Guide

This guide will help you manage content on the Islamic Alliance website using Sanity Studio.

## Accessing the CMS

1. Navigate to `https://your-domain.com/studio` (or `http://localhost:3000/studio` in development)
2. Sign in with your Sanity credentials

## Content Types

### Global Settings

Manage site-wide settings:

- **Site Title:** Main website title
- **Logo:** Upload your organization logo (SVG or PNG with transparent background recommended)
- **Footer Text:** Short about text in the footer (2-3 sentences)
- **Instagram URL:** Link to your Instagram profile
- **Contact Email:** Main contact email (displays in footer)
- **Donate URL:** External donation page link
- **Show Donation Banner:** Toggle to show/hide top banner
- **Donation Banner Text:** Text for the top banner

### Homepage Hero

Customize the homepage:

- **Full-Screen Logo Image:** Large logo for hero section (recommended: 1920x1080)
- **Welcome Headline:** Main headline (e.g., "Welcome To Islamic Alliance")
- **Welcome Body Text:** 2-3 sentence welcome message
- **CTA Buttons:** Up to 3 call-to-action buttons
  - Label: Button text
  - URL: Where the button links to
  - Style: Choose Primary, Outline, or Accent

### Homepage Tiles

Create clickable tiles for the homepage:

- **Title:** Tile heading
- **Image:** Tile image (recommended: 800x600)
  - **Important:** Always add alt text describing the image
- **Description:** Short description (1-2 sentences, max 200 characters)
- **Target URL:** Where the tile links to
- **Display Order:** Number determining order (1, 2, 3...)

**Tip:** Tiles appear in order from lowest to highest number.

### Events

Manage community events:

#### Creating an Event

1. Click "Events" in the sidebar
2. Click "Create new Event"
3. Fill in the required fields:
   - **Event Title:** Name of the event
   - **Slug:** Auto-generates from title (click "Generate" button)
   - **Date & Time:** When the event occurs
   - **Location:** Event venue (e.g., "Community Center, Newark, NJ")
   - **Location Map URL:** (Optional) Google Maps link
   - **Description:** Full event details (supports rich text formatting)
   - **Event Flyer:** Upload flyer image (recommended: 1200x675)
     - **Always add alt text!**
   - **Register URL:** (Optional) Eventbrite or registration link
   - **Tags:** Category tags (e.g., "Education", "Networking")
   - **Show on Homepage:** Check to feature on homepage

4. Click "Publish"

#### Managing Events

- **Edit:** Click any event to edit its details
- **Unpublish:** Remove an event from the site temporarily
- **Delete:** Permanently remove an event
- **Sort:** Events automatically display newest first

### Programs & Services

Document your organization's programs:

- **Program Title:** Name of the program
- **Summary:** Brief overview (1-2 sentences, max 200 characters)
- **Full Description:** Detailed information (supports rich text)
- **Related Images:** Upload program photos
- **Display Order:** Number determining order

### Initiatives

Showcase your organization's initiatives similar to Programs.

### Team Members

Manage your team profiles:

#### Adding a Team Member

1. Click "Team Members"
2. Click "Create new Team Member"
3. Fill in:
   - **Full Name:** Member's name
   - **Job Title:** Role (e.g., "Chief Executive Officer")
   - **Headshot Photo:** Professional photo (recommended: 600x600 square)
     - **Add alt text:** e.g., "Photo of John Doe"
   - **Short Bio:** (Optional) 2-3 sentence bio
   - **LinkedIn URL:** (Optional) LinkedIn profile
   - **Facebook URL:** (Optional) Facebook profile
   - **Instagram URL:** (Optional) Instagram profile
   - **Display Order:** Number determining order

4. Click "Publish"

**Tip:** Lower order numbers appear first (1, 2, 3...).

### Shop Items

Manage merchandise:

- **Product Title:** Name of item
- **SKU:** Product identifier (e.g., "HOODIE-001")
- **Description:** Product details
- **Product Image:** Photo (recommended: 1200x1200 square)
- **Price:** Display price
- **Active:** Toggle to make available for purchase
- **Fulfillment Options:** Payment methods (e.g., "Pay on Delivery - NJ only, or Zelle")
- **Zelle QR Code:** (Optional) Upload QR code for Zelle payments
- **Display Order:** Number determining order

### Contact Submissions

View messages from the Contact form:

- **Status:** Mark as New, In Progress, or Resolved
- **View Details:** See full message and sender info
- **Cannot edit submissions** (they're records)

### Volunteer Submissions

View volunteer applications:

- **Status:** Mark as New, Contacted, Active Volunteer, or Declined
- **View Details:** See application and contact info
- **Cannot edit submissions**

### Pages (Privacy Policy, Terms, etc.)

Create static pages:

1. Click "Pages"
2. Click "Create new Page"
3. Fill in:
   - **Page Title:** Title of the page
   - **Slug:** URL slug (e.g., "privacy-policy")
   - **Page Content:** Full content (supports rich text)
   - **Show in Footer:** Check to add link in footer

4. Click "Publish"

**Default pages to create:**
- Privacy Policy (slug: `privacy-policy`)
- Terms of Service (slug: `terms`)

## Image Best Practices

1. **Always add alt text** - Describes image for screen readers and SEO
2. **Use recommended sizes:**
   - Hero/Logo: 1920x1080
   - Event Flyers: 1200x675
   - Tiles: 800x600
   - Team Photos: 600x600 (square)
   - Shop Items: 1200x1200 (square)
3. **Optimize before upload** - Use tools like TinyPNG or Squoosh
4. **Use appropriate formats:**
   - Photos: JPG
   - Graphics/logos: PNG or SVG
   - Animations: WebP or AVIF

## Content Tips

### Writing for the Web

1. **Keep it concise:** Users scan, don't read
2. **Use clear headings:** Break up text with descriptive headings
3. **Short paragraphs:** 2-3 sentences maximum
4. **Bullet points:** Use lists for easy scanning
5. **Call-to-action:** Tell users what to do next

### Accessibility

1. **Alt text:** Describe what's in the image, not "image of..."
2. **Link text:** Use descriptive text, not "click here"
3. **Headings:** Use proper hierarchy (H1 → H2 → H3)
4. **Contrast:** Ensure text is readable

## Publishing Workflow

1. **Draft:** Create and edit content
2. **Review:** Check spelling, links, and images
3. **Publish:** Make content live
4. **Update:** Changes publish immediately (cached for ~1 hour)

## Common Tasks

### Change Homepage Welcome Text

1. Go to "Homepage Hero"
2. Edit "Welcome Headline" or "Welcome Body Text"
3. Click "Publish"

### Add a New Event

1. Go to "Events"
2. Click "Create new Event"
3. Fill in all required fields
4. Upload event flyer with alt text
5. Click "Publish"

### Update Team Member Photo

1. Go to "Team Members"
2. Click the team member
3. Upload new photo in "Headshot Photo"
4. Add alt text
5. Click "Publish"

### Show/Hide Donation Banner

1. Go to "Global Settings"
2. Toggle "Show Donation Banner"
3. Update "Donation Banner Text" if needed
4. Click "Publish"

### Add Privacy Policy

1. Go to "Pages"
2. Click "Create new Page"
3. Title: "Privacy Policy"
4. Slug: "privacy-policy"
5. Add your privacy policy text
6. Check "Show in Footer"
7. Click "Publish"

## Troubleshooting

### Changes not showing on website

- Wait 5 minutes (content is cached)
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check that you clicked "Publish" not just "Save"

### Image not uploading

- Check file size (should be < 10MB)
- Use supported formats: JPG, PNG, GIF, WebP, SVG
- Try optimizing/compressing the image first

### Can't access Studio

- Check your internet connection
- Clear browser cache
- Try incognito/private window
- Contact admin for access permissions

## Getting Help

For technical support or questions:
- Email: islamicalliance.nj@gmail.com
- Check the [README](./README.md) for developer documentation

