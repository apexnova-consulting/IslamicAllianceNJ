# Design System Documentation

This document outlines the design system for the Islamic Alliance website, including colors, typography, components, spacing, and animation guidelines.

## Design Philosophy

The Islamic Alliance website embodies a **modern Islamic aesthetic** with:
- Clean, professional design
- Warm, welcoming color palette
- Subtle geometric patterns inspired by Islamic art
- Accessible and inclusive interface
- Mobile-first responsive approach

## Color Palette

### Primary Colors

**Primary (Deep Green)**
- `#0F5132` - Main brand color
- Used for: Headers, CTA buttons, links, emphasis
- Represents: Growth, harmony, Islamic tradition

**Accent (Warm Gold)**
- `#C69C6D` - Secondary accent
- Used for: Highlights, hover states, special elements
- Represents: Heritage, warmth, quality

**Neutral Sand**
- `#F7F6F3` - Background color
- Used for: Page backgrounds, sections
- Represents: Simplicity, cleanliness

**Neutral Slate**
- `#0B1320` - Dark text/footer
- Used for: Body text, footer backgrounds
- Represents: Sophistication, readability

### Extended Palette

**Primary Shades:**
```css
50:  #E8F5EF  // Lightest - Backgrounds
100: #C7E7D8
200: #A3D8C0
300: #7FC9A8
400: #5BBA90
500: #0F5132  // Base
600: #0C4128
700: #09311E
800: #062114
900: #03100A  // Darkest - Deep emphasis
```

**Accent Shades:**
```css
50:  #F7F2EC  // Lightest - Backgrounds
100: #EDE0D1
200: #E3CEB6
300: #D9BC9B
400: #CFAA80
500: #C69C6D  // Base
600: #B88A55
700: #9A7346
800: #7C5C37
900: #5E4528  // Darkest
```

## Typography

### Font Families

**Headings:** Playfair Display (serif)
- Elegant, classical serif
- Used for: H1-H6, display text
- CDN: Google Fonts

**Body:** Inter (sans-serif)
- Modern, highly readable
- Used for: Paragraphs, UI elements
- CDN: Google Fonts

### Type Scale

```css
H1: 3.75rem (60px) / 1.2 line-height
H2: 3rem (48px) / 1.3 line-height
H3: 2.25rem (36px) / 1.4 line-height
H4: 1.875rem (30px) / 1.4 line-height
H5: 1.5rem (24px) / 1.5 line-height
H6: 1.25rem (20px) / 1.5 line-height

Body Large: 1.125rem (18px) / 1.75 line-height
Body: 1rem (16px) / 1.75 line-height
Small: 0.875rem (14px) / 1.5 line-height
```

### Font Weights

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing Scale

Based on 4px base unit:

```
0:  0px
1:  4px
2:  8px
3:  12px
4:  16px
5:  20px
6:  24px
8:  32px
10: 40px
12: 48px
16: 64px
20: 80px
24: 96px
32: 128px
```

## Border Radius

```
sm: 4px   // Small elements
md: 8px   // Cards, buttons
lg: 12px  // Sections, modals
xl: 16px  // Hero elements
full: 9999px  // Pills, badges
```

## Shadows

```
sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
    // Subtle elevation

md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
    // Cards, dropdowns

lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
    // Modals, popovers

xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
    // Overlays, drawers
```

## Component Library

### Buttons

**Primary Button**
- Background: Primary (#0F5132)
- Text: White
- Padding: 10px 16px
- Border radius: 6px
- Hover: Darken 10%
- Active: Scale 0.98
- Focus: 2px outline offset

**Secondary Button (Outline)**
- Border: 1px solid input color
- Text: Primary
- Background: Transparent
- Hover: Light background
- Active: Scale 0.98

**Accent Button**
- Background: Accent (#C69C6D)
- Text: Dark
- Hover: Darken 10%

**Sizes:**
- Small: h-9 (36px) px-3
- Default: h-10 (40px) px-4
- Large: h-11 (44px) px-8

### Cards

**Base Card**
- Background: White
- Border: 1px solid border color
- Border radius: lg (12px)
- Shadow: sm
- Hover: Shadow lg
- Transition: 300ms ease

**Card with Image**
- Image aspect ratio: 16:9 or 4:3
- Image hover: Scale 105%
- Overlay gradient: From black/60 to transparent

### Forms

**Input Field**
- Height: 40px
- Padding: 8px 12px
- Border: 1px solid input
- Border radius: 6px
- Focus: 2px ring primary
- Error: Border destructive, text destructive
- Disabled: Opacity 50%, cursor not-allowed

**Textarea**
- Min height: 80px
- Padding: 8px 12px
- Resize: Vertical only

**Select**
- Height: 40px
- Padding: 8px 12px
- Chevron icon: Right side

**Label**
- Font size: 14px
- Font weight: 500
- Margin bottom: 8px
- Required indicator: Red asterisk

### Navigation

**Desktop Header**
- Height: 80px
- Sticky position
- Background: White with backdrop blur
- Links: Text foreground, hover primary
- Spacing: 32px between items

**Mobile Header**
- Height: 64px
- Hamburger menu: Right side
- Full-screen overlay menu
- Smooth slide animation

### Footer

- Background: Neutral slate
- Text: Neutral sand
- Padding: 48px vertical
- Grid: 3 columns on desktop, 1 on mobile
- Links: Hover accent color

## Animation Guidelines

### Motion Principles

1. **Purpose:** Every animation serves a purpose
2. **Subtlety:** Animations should feel natural, not distracting
3. **Performance:** Use transform and opacity for best performance
4. **Accessibility:** Respect prefers-reduced-motion

### Durations

```
Fast: 150ms    // Hover states, toggles
Base: 300ms    // Most transitions
Slow: 500ms    // Page transitions, complex animations
Very Slow: 800ms  // Hero animations
```

### Easing Functions

```css
ease: cubic-bezier(0.25, 0.1, 0.25, 1)
ease-in: cubic-bezier(0.42, 0, 1, 1)
ease-out: cubic-bezier(0, 0, 0.58, 1)
ease-in-out: cubic-bezier(0.42, 0, 0.58, 1)
```

### Common Animations

**Fade In**
```javascript
{
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
}
```

**Slide Up**
```javascript
{
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}
```

**Scale Hover**
```css
.card:hover {
  transform: scale(1.02);
  transition: transform 300ms ease;
}
```

**Shimmer Loading**
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

## Responsive Breakpoints

```
sm: 640px   // Mobile landscape
md: 768px   // Tablet portrait
lg: 1024px  // Tablet landscape / Small desktop
xl: 1280px  // Desktop
2xl: 1536px // Large desktop
```

### Layout Behavior

**Container:**
- Max width: 1280px
- Padding: 16px (mobile), 32px (desktop)
- Centered with margin auto

**Grid:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns
- Gap: 24px (mobile), 32px (desktop)

## Accessibility Guidelines

### Color Contrast

- Text on white: Minimum 4.5:1 ratio
- Text on primary: Use white (#FFFFFF)
- Text on accent: Use dark (#0B1320)
- Link focus: 2px outline with offset

### Interactive Elements

- Minimum touch target: 44x44px
- Keyboard navigable: Tab order, focus visible
- ARIA labels: Present and descriptive
- Skip links: Available for keyboard users

### Motion

- Respect `prefers-reduced-motion`
- Disable animations if requested
- No auto-playing videos
- Pausable carousels

## Icon System

**Library:** Lucide React

**Common Icons:**
- Calendar: Events, dates
- MapPin: Locations
- Mail: Contact, email
- Phone: Phone numbers
- Instagram: Social media
- LinkedIn: Professional links
- Menu: Mobile navigation
- X: Close/dismiss
- ChevronDown: Dropdowns, accordions
- ExternalLink: External links

**Icon Sizes:**
- Small: 16px (h-4 w-4)
- Base: 20px (h-5 w-5)
- Large: 24px (h-6 w-6)

## Image Guidelines

### Dimensions

```
Hero/Logo: 1920x1080 (16:9)
Event Flyers: 1200x675 (16:9)
Tiles: 800x600 (4:3)
Team Photos: 600x600 (1:1)
Shop Items: 1200x1200 (1:1)
```

### Optimization

- Format: WebP or AVIF (with fallback)
- Compression: TinyPNG or Squoosh
- Lazy loading: Below the fold
- Alt text: Always required

### Placeholder

- Use shimmer animation
- Blur-up effect with LQIP
- Aspect ratio maintained

## Component States

### Default
- Normal appearance
- No special styling

### Hover
- Subtle scale or color change
- Duration: 150-300ms
- Cursor: pointer

### Focus
- Visible outline
- 2px ring primary color
- Offset: 2px

### Active
- Slight scale down (0.98)
- Immediate feedback

### Disabled
- Opacity: 50%
- Cursor: not-allowed
- No hover effects

### Loading
- Spinner or shimmer
- Disabled state
- "Loading..." text

### Error
- Red border and text
- Error icon
- Clear error message

## Dark Mode

**Status:** Not implemented (v1.0)

**Future consideration:**
- Toggle in header
- Persist preference
- Adjust colors for readability
- Test contrast ratios

## Print Styles

**Consider for:**
- Event details
- Privacy policy
- Terms of service

**Optimizations:**
- Remove navigation
- Simplify colors
- Expand links
- Page breaks

## Brand Assets

### Logo Usage

- **Primary:** Color logo on light backgrounds
- **White:** White logo on dark backgrounds
- **Clear space:** Minimum padding equal to logo height
- **Minimum size:** 120px width

### Geometric Patterns

- **Style:** Islamic geometric patterns
- **Usage:** Background textures, dividers
- **Opacity:** 5-10% maximum
- **Color:** Primary or accent

## Resources

### Design Tools

- Figma: Component library
- TailwindCSS Docs: Utility reference
- Coolors: Color palette generator
- Google Fonts: Typography

### Inspiration

- Islamic architecture
- Modern material design
- Accessible design patterns
- Community-focused websites

## Questions?

For design-related questions:
- Reference: [README.md](./README.md)
- Contact: islamicalliance.nj@gmail.com

