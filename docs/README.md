# Islamic Alliance NJ Website

A modern, accessible website for Islamic Alliance New Jersey built with Next.js, TypeScript, TailwindCSS, and Sanity CMS.

## Features

- 🎨 Modern Islamic aesthetic design with custom color scheme
- 📱 Fully responsive and mobile-first
- ♿ WCAG 2.1 AA compliant accessibility
- 🔍 SEO optimized with sitemap, robots.txt, and JSON-LD schema
- 📝 Content management with Sanity CMS
- 🔒 Secure form submissions with reCAPTCHA v3 and rate limiting
- 📧 Email notifications for contact and volunteer forms
- 🎭 Smooth animations with Framer Motion
- ⚡ Optimized performance with Next.js 15 and ISR
- 🚀 CI/CD with GitHub Actions and Vercel

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS + shadcn/ui
- **CMS:** Sanity
- **Animations:** Framer Motion
- **Forms:** React Hook Form + reCAPTCHA v3
- **Email:** Nodemailer
- **Deployment:** Vercel

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── events/            # Events pages
│   ├── contact/           # Contact page
│   ├── get-involved/      # Volunteer page
│   ├── shop/              # Shop page
│   ├── studio/            # Sanity Studio
│   └── [slug]/            # Dynamic CMS pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                   # Utility functions
│   ├── sanity.client.ts  # Sanity client
│   ├── sanity.queries.ts # Database queries
│   ├── email.ts          # Email utilities
│   ├── recaptcha.ts      # reCAPTCHA verification
│   └── rate-limit.ts     # Rate limiting
├── sanity/               # Sanity configuration
│   └── schemas/          # CMS schemas
└── docs/                 # Documentation
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- A Sanity account (free)
- Resend account (free tier - 100 emails/day)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/islamic-alliance-nj-website.git
cd islamic-alliance-nj-website
```

2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env.local` and fill in the required values:
```bash
cp .env.example .env.local
```

4. Set up Sanity:
   - Create a new project at [sanity.io](https://www.sanity.io)
   - Copy your project ID and add it to `.env.local`
   - Generate an API token with Editor permissions

5. Set up Resend:
   - Create account at https://resend.com
   - Generate API key
   - Add to `.env.local` as `RESEND_API_KEY`

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

8. Access Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio)

## Environment Variables

See `.env.example` for required environment variables. All sensitive keys should be stored in Vercel environment variables for production.

## Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add all environment variables from `.env.example`
4. Deploy!

Vercel will automatically:
- Build and deploy on push to main
- Create preview deployments for PRs
- Enable ISR for optimal performance

### Manual Deployment

```bash
npm run build
npm run start
```

## CMS Management

Access the CMS at `/studio` to manage:
- Global settings (logo, social links, donation banner)
- Homepage content (hero, tiles, CTAs)
- Events
- Programs and initiatives
- Team members
- Shop items
- Static pages (Privacy Policy, Terms)
- Form submissions (Contact, Volunteer)

See [ADMIN.md](./ADMIN.md) for detailed CMS documentation.

## Webhooks & Revalidation

Set up a webhook in Sanity to trigger revalidation:

1. Go to Sanity project settings > API > Webhooks
2. Add webhook URL: `https://your-domain.vercel.app/api/revalidate?secret=YOUR_SECRET`
3. Add `REVALIDATION_SECRET` to `.env.local` and Vercel environment variables
4. Save webhook

Now content updates in Sanity will automatically update the live site.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and type checking
4. Submit a pull request

## License

Copyright © 2025 Islamic Alliance. All rights reserved.

## Support

For questions or support, contact: islamicalliance.nj@gmail.com

