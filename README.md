# Islamic Alliance NJ Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](https://tailwindcss.com/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-f03e2f)](https://www.sanity.io/)

A modern, accessible website for Islamic Alliance New Jersey - empowering the Ummah through education, mentorship, and networking.

## ✨ Features

- 🎨 Modern Islamic aesthetic with custom design system
- 📱 Fully responsive and mobile-first
- ♿ WCAG 2.1 AA accessible
- 🔍 SEO optimized with automatic sitemap generation
- 📝 Full-featured CMS with Sanity Studio
- 🔒 Secure forms with rate limiting and validation
- 📧 Automated email notifications
- 🎭 Smooth animations with Framer Motion
- ⚡ Optimized performance with Next.js 15 ISR
- 🚀 CI/CD ready with GitHub Actions

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

**New to the project?** See [QUICK_START.md](./QUICK_START.md) for detailed setup instructions.

## 📖 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Get up and running in 10 minutes
- **[docs/README.md](./docs/README.md)** - Complete development guide
- **[docs/ADMIN.md](./docs/ADMIN.md)** - CMS user guide for content managers
- **[docs/DEPLOY.md](./docs/DEPLOY.md)** - Production deployment instructions
- **[docs/MAINTENANCE.md](./docs/MAINTENANCE.md)** - Ongoing maintenance procedures
- **[docs/DESIGN.md](./docs/DESIGN.md)** - Design system documentation
- **[docs/PROJECT_SUMMARY.md](./docs/PROJECT_SUMMARY.md)** - Complete project overview

## 🏗️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **CMS:** [Sanity](https://www.sanity.io/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Email:** [Resend](https://resend.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes (forms, revalidation)
│   ├── about/             # About page
│   ├── events/            # Events pages
│   ├── contact/           # Contact form
│   ├── get-involved/      # Volunteer form
│   ├── shop/              # Shop (coming soon)
│   ├── studio/            # Sanity Studio CMS
│   └── [slug]/            # Dynamic CMS pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                   # Utilities (Sanity, email, etc.)
├── sanity/               # Sanity schemas and config
├── docs/                 # Documentation
└── .github/workflows/    # CI/CD configuration
```

## 🎨 Design System

**Color Palette:**
- Primary: `#0F5132` (Deep Green)
- Accent: `#C69C6D` (Warm Gold)
- Neutral Sand: `#F7F6F3`
- Neutral Slate: `#0B1320`

**Typography:**
- Headings: Playfair Display
- Body: Inter

See [docs/DESIGN.md](./docs/DESIGN.md) for complete design documentation.

## 🔧 Development

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🚢 Deployment

This project is optimized for Vercel deployment:

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables (see `.env.example`)
4. Deploy!

See [docs/DEPLOY.md](./docs/DEPLOY.md) for complete deployment instructions.

## 🔐 Environment Variables

Required environment variables:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Email (Resend)
RESEND_API_KEY=

# Site Configuration
NEXT_PUBLIC_SITE_URL=
REVALIDATION_SECRET=
```

See `.env.example` for complete list with descriptions.

## 📝 Content Management

Access the CMS at `/studio` to manage:

- Global settings (logo, contact info, donation banner)
- Homepage content (hero, tiles, CTAs)
- Events and programs
- Team member profiles
- Shop items
- Contact and volunteer form submissions

See [docs/ADMIN.md](./docs/ADMIN.md) for complete CMS documentation.

## 🔒 Security

- ✅ Rate limiting (3 submissions per 10 minutes)
- ✅ Input sanitization and validation
- ✅ Email injection prevention
- ✅ Environment variables for secrets
- ✅ HTTPS enforced
- ✅ CORS configuration
- ✅ Secure API routes

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Skip-to-content link
- ✅ Focus management
- ✅ Screen reader tested

## 📊 Performance

- ✅ Lighthouse scores 90+
- ✅ Image optimization (WebP/AVIF)
- ✅ ISR for dynamic content
- ✅ Code splitting
- ✅ Prefetching
- ✅ Font optimization

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and type checking
4. Submit a pull request

## 📧 Support

**Email:** islamicalliance.nj@gmail.com

**Documentation Issues?**
- Check [docs/README.md](./docs/README.md)
- Review [docs/PROJECT_SUMMARY.md](./docs/PROJECT_SUMMARY.md)

## 📄 License

Copyright © 2025 Islamic Alliance. All rights reserved.

## 🎉 Credits

Built with modern web technologies and a commitment to excellence, accessibility, and user experience.

**For the mission:** Empowering the Ummah through education, mentorship, and networking.

---

**Ready to get started?** See [QUICK_START.md](./QUICK_START.md) or [docs/DEPLOY.md](./docs/DEPLOY.md)

