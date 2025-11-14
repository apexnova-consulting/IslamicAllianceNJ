# Deployment Guide

This guide covers deploying the Islamic Alliance website to Vercel and configuring all necessary services.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Sanity account with project created
- Resend account (free tier - 100 emails/day)

## Step 1: Sanity Project Setup

### 1.1 Create Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and sign in
2. Click "Create new project"
3. Choose a project name: "Islamic Alliance NJ"
4. Choose a dataset name: "production"
5. Note your Project ID - you'll need this later 2btjx91l

### 1.2 Generate API Token

1. Go to your Sanity project settings
2. Navigate to API > Tokens
3. Click "Add API token"
4. Name: "Next.js Production"
5. Permissions: "Editor"
6. Click "Add token"
7. **Copy the token immediately** - it won't be shown again
sk4oqidy9oN7G3EdbYKpSod9U3lYZyVoyuoVVv6N7PSgwpVYNYEAM66LoB4BImudAKkV8yZZTLfbQNYN75huGrLJeBqL35cs3tYCyrBVyHqJ45w9YKBfeuEXuFY61RAYjFcTBET8Ai9TlwLkBzkrALP7CqTtvJJAoYs5FUre2DAINpWDTGru
### 1.3 Configure CORS

1. In Sanity project settings, go to API > CORS Origins
2. Add your Vercel domain: `https://your-domain.vercel.app`
3. Allow credentials: Yes
4. Save

## Step 2: Resend Email Setup

### 2.1 Create Resend Account

1. Go to [resend.com](https://resend.com) and sign up
2. Use your Gmail address: islamicalliance.nj@gmail.com
3. Verify your email

### 2.2 Add Domain or Use Onboarding Domain

**Option A: Use Onboarding Domain (Quickest for testing)**
1. Resend provides a free `onboarding@resend.dev` domain
2. You can use this immediately for testing
3. Skip to Step 2.3

**Option B: Add Your Domain (Recommended for production)**
1. In Resend dashboard, go to Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `islamicalliancenj.org`)
4. Add the DNS records Resend provides to your domain registrar
5. Wait for verification (usually 5-10 minutes)

### 2.3 Generate API Key

1. In Resend dashboard, go to API Keys
2. Click "Create API Key"
3. Name: "Islamic Alliance Website - Production"
4. Permissions: Full Access (or Send Access)
5. **Copy the API key immediately** - it won't be shown again

**Note:** With the free tier, you get 100 emails/day which is perfect for contact/volunteer forms!

## Step 3: GitHub Repository

### 3.1 Create Repository

1. Go to GitHub and create a new repository
2. Name: `islamic-alliance-nj-website`
3. Visibility: Private (or Public if preferred)
4. Don't initialize with README (we already have one)
5. Create repository

### 3.2 Push Code

In your project directory:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/islamic-alliance-nj-website.git
git push -u origin main
```

### 3.3 Branch Protection (Optional but Recommended)

1. Go to repository Settings > Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Include CI checks
4. Save

## Step 4: Vercel Deployment

### 4.1 Import Project

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### 4.2 Environment Variables

Add all environment variables in Vercel project settings:

#### Sanity
```
NEXT_PUBLIC_SANITY_PROJECT_ID=2btjx91l
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=sk4oqidy9oN7G3EdbYKpSod9U3lYZyVoyuoVVv6N7PSgwpVYNYEAM66LoB4BImudAKkV8yZZTLfbQNYN75huGrLJeBqL35cs3tYCyrBVyHqJ45w9YKBfeuEXuFY61RAYjFcTBET8Ai9TlwLkBzkrALP7CqTtvJJAoYs5FUre2DAINpWDTGru
```

#### Email (Resend)
```
RESEND_API_KEY=your_api_key_from_step_2.3
```

**That's it for email! Much simpler than SMTP configuration.**

#### Site & Revalidation
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
REVALIDATION_SECRET=your_random_secret_string_123
```

**Note:** Generate a strong random string for `REVALIDATION_SECRET`:
```bash
openssl rand -base64 32
```

### 4.3 Deploy

1. Click "Deploy"
2. Wait for build to complete (3-5 minutes)
3. Visit your deployment URL

## Step 5: Custom Domain (Optional)

### 5.1 Add Domain in Vercel

1. Go to your Vercel project
2. Settings > Domains
3. Add your domain (e.g., `islamicalliancenj.org`)
4. Vercel will provide DNS records

### 5.2 Configure DNS

In your domain registrar (e.g., GoDaddy, Namecheap):

1. Add A record:
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP)

2. Add CNAME record:
   - Name: `www`
   - Value: `cname.vercel-dns.com`

3. Wait for DNS propagation (up to 48 hours, usually faster)

### 5.3 Update Environment Variables

Update `NEXT_PUBLIC_SITE_URL` to your custom domain:
```
NEXT_PUBLIC_SITE_URL=https://islamicalliancenj.org
```

### 5.4 Update Sanity CORS

Add your custom domain to Sanity CORS origins (Step 1.3).

### 5.5 Configure Resend Domain (if using custom domain)

If you added your custom domain to Resend in Step 2.2, you'll need to update the "from" address in the code:

1. Edit `lib/email.ts`
2. Change line 11 from:
   ```typescript
   from: 'Islamic Alliance <notifications@islamicalliancenj.org>',
   ```
   To use your verified domain:
   ```typescript
   from: 'Islamic Alliance <notifications@your-domain.com>',
   ```

## Step 6: Sanity Webhooks

Configure automatic revalidation when content changes:

1. Go to Sanity project settings
2. Navigate to API > Webhooks
3. Click "Create webhook"
4. Fill in:
   - Name: "Vercel Revalidation"
   - URL: `https://your-domain.vercel.app/api/revalidate?secret=YOUR_REVALIDATION_SECRET`
   - Dataset: production
   - Trigger on: Create, Update, Delete
   - Filter: Leave empty (revalidate all changes)
   - HTTP method: POST
   - API version: v2021-06-07
   - Include drafts: No
5. Save webhook

## Step 7: Initial Content Setup

### 7.1 Access Sanity Studio

Visit `https://your-domain.vercel.app/studio` and sign in.

### 7.2 Create Global Settings

1. Go to "Global Settings"
2. Fill in:
   - Site Title: "Islamic Alliance"
   - Contact Email: islamicalliance.nj@gmail.com
   - Upload logo (if available)
   - Add footer text
   - Add Instagram URL
3. Publish

### 7.3 Create Homepage Hero

1. Go to "Homepage Hero"
2. Fill in welcome text
3. Add 3 CTA buttons
4. Publish

### 7.4 Create Initial Content

See [ADMIN.md](./ADMIN.md) for detailed content creation guide.

Create at minimum:
- 3 Homepage tiles
- 1-2 team members
- Privacy Policy page
- Terms page

## Step 8: Verification

### 8.1 Test Forms

1. Submit contact form
2. Check email received at islamicalliance.nj@gmail.com
3. Verify submission saved in Sanity

### 8.2 Test Content Updates

1. Edit content in Sanity Studio
2. Wait 1-2 minutes
3. Refresh website to see changes

### 8.3 Check SEO

1. Visit `https://your-domain.vercel.app/sitemap.xml`
2. Visit `https://your-domain.vercel.app/robots.txt`
3. Test with Google's Rich Results Test

### 8.4 Performance Check

1. Run Lighthouse audit in Chrome DevTools
2. Aim for scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

## Step 9: Monitoring

### 9.1 Vercel Analytics

1. Go to project in Vercel
2. Enable Analytics (free tier available)
3. Monitor performance and errors

### 9.2 Error Logging

Check Vercel function logs for errors:
- Project > Logs
- Filter by timeframe and function

## Rollback Procedure

If deployment has issues:

1. Go to Vercel project > Deployments
2. Find previous working deployment
3. Click "..." > "Promote to Production"
4. Previous version is now live

## Common Issues

### Build Fails

- Check environment variables are set correctly
- Review build logs in Vercel
- Test build locally: `npm run build`

### Forms Not Working

- Verify RESEND_API_KEY is correct
- Check Resend dashboard for email logs and errors
- Verify SANITY_API_TOKEN has Editor permissions
- Ensure "from" email domain is verified in Resend

### Content Not Updating

- Check webhook is configured correctly
- Verify REVALIDATION_SECRET matches in webhook and env vars
- Manually trigger revalidation: POST to `/api/revalidate?secret=YOUR_SECRET`

### Images Not Loading

- Check Sanity CORS includes your domain
- Verify NEXT_PUBLIC_SANITY_PROJECT_ID is correct
- Check image asset IDs in Sanity

## Production Checklist

Before going live:

- [ ] All environment variables configured
- [ ] Custom domain connected (if applicable)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Sanity webhook configured
- [ ] All forms tested and working
- [ ] Initial content published
- [ ] Privacy Policy and Terms added
- [ ] SEO metadata verified
- [ ] Performance scores acceptable
- [ ] Team member access configured
- [ ] Error monitoring enabled
- [ ] Backup procedures documented

## Support

For deployment issues:
- Email: islamicalliance.nj@gmail.com
- Vercel Support: https://vercel.com/support
- Sanity Support: https://www.sanity.io/help

## Next Steps

After successful deployment:
1. Set up regular content backups
2. Schedule periodic security audits
3. Monitor analytics and user feedback
4. Plan content updates and feature additions

See [MAINTENANCE.md](./MAINTENANCE.md) for ongoing maintenance procedures.

