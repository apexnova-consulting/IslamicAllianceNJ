# Quick Start Guide

Get the Islamic Alliance website running locally in under 10 minutes!

## Prerequisites Checklist

Before you begin, make sure you have:

- [ ] Node.js 20 or higher installed
- [ ] npm or yarn package manager
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] Terminal/command line access

## Step 1: Initial Setup (2 minutes)

```bash
# Navigate to project directory
cd /Users/mikenielson/Desktop/IslamicAllianceNJ_Website

# Install dependencies
npm install
```

## Step 2: Environment Variables (3 minutes)

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Open `.env.local` and add TEMPORARY values for local development:

```bash
# Sanity CMS (get these from sanity.io after creating a project)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here

# Email (Resend - get free API key from resend.com)
RESEND_API_KEY=your_resend_api_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
REVALIDATION_SECRET=local_dev_secret_123
```

## Step 3: Start Development Server (1 minute)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## Step 4: Access Sanity Studio (1 minute)

Visit [http://localhost:3000/studio](http://localhost:3000/studio)

You'll need to:
1. Sign in with Sanity (create account if needed)
2. Create a new project
3. Update your `.env.local` with the project ID

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality
npm run type-check   # Check TypeScript types
```

## What You'll See

### Homepage
- Full-screen logo section (placeholder if no logo uploaded)
- Welcome message
- Three call-to-action buttons
- Tile cards (placeholder until content added)

### Navigation
- Home, About Us, Events, Sadaqah Nafilah, Get Involved, Contact, Shop
- Responsive mobile menu
- Donate Now button

### CMS Studio (`/studio`)
- Content management interface
- Add/edit events, team members, settings
- Form submission viewer

## Next Steps

1. **Add Content** - Go to `/studio` and start adding:
   - Global settings (logo, contact info)
   - Homepage hero content
   - Create your first event
   - Add team members

2. **Customize** - Update:
   - Colors in `tailwind.config.ts`
   - Logo and branding
   - Content copy

3. **Deploy** - When ready:
   - See [docs/DEPLOY.md](./docs/DEPLOY.md)
   - Push to GitHub
   - Connect to Vercel
   - Go live!

## Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Won't Install
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Sanity Studio Won't Load
- Make sure you've created a Sanity project
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
- Check you're signed in to Sanity

### TypeScript Errors
```bash
# Rebuild and check
npm run build
npm run type-check
```

## Important Files

```
.env.local              # Your local environment variables
package.json            # Dependencies and scripts
next.config.ts          # Next.js configuration
tailwind.config.ts      # Tailwind/design configuration
sanity.config.ts        # Sanity Studio configuration
app/layout.tsx          # Root layout with Header/Footer
app/page.tsx            # Homepage
```

## Documentation

- **Full Setup:** [docs/README.md](./docs/README.md)
- **CMS Guide:** [docs/ADMIN.md](./docs/ADMIN.md)
- **Deployment:** [docs/DEPLOY.md](./docs/DEPLOY.md)
- **Design System:** [docs/DESIGN.md](./docs/DESIGN.md)

## Getting Help

**Documentation Issues?**
- Check [docs/README.md](./docs/README.md)
- Review [PROJECT_SUMMARY.md](./docs/PROJECT_SUMMARY.md)

**Technical Issues?**
- Check console for errors
- Review [MAINTENANCE.md](./docs/MAINTENANCE.md)
- Email: islamicalliance.nj@gmail.com

## You're All Set! 🎉

Your development environment is ready. Start customizing the website and adding content!

**Pro Tips:**
- Save often (Cmd/Ctrl + S)
- Check the browser console for errors
- Use React DevTools for debugging
- Test on mobile devices early

Happy coding! 🚀

