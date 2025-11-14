# Maintenance Guide

This guide covers ongoing maintenance procedures for the Islamic Alliance website.

## Regular Maintenance Tasks

### Daily

✅ **Monitor Form Submissions**
- Check Sanity Studio for new contact/volunteer submissions
- Respond to urgent inquiries within 24 hours

✅ **Check Email Notifications**
- Verify form notification emails are being received
- Test that auto-reply emails are working

### Weekly

✅ **Review Website Performance**
- Check Vercel Analytics for errors
- Monitor page load times
- Review user engagement metrics

✅ **Content Updates**
- Update upcoming events
- Remove past events or mark as completed
- Update any time-sensitive content

✅ **Security Check**
- Review failed login attempts in Sanity
- Check for suspicious form submissions
- Verify SSL certificate is active

### Monthly

✅ **Dependency Updates**
- Review npm outdated packages
- Update non-breaking dependencies
- Test thoroughly before deploying

✅ **Backup Content**
- Export Sanity content
- Store backup in secure location
- Document any major content changes

✅ **Performance Audit**
- Run Lighthouse audit
- Check Core Web Vitals
- Optimize images if needed

✅ **SEO Review**
- Check Google Search Console
- Review search rankings
- Update meta descriptions if needed

### Quarterly

✅ **Major Updates**
- Review Next.js and major dependency updates
- Test in staging environment
- Deploy during low-traffic period

✅ **Content Audit**
- Review all pages for accuracy
- Update team member information
- Refresh program descriptions
- Update any outdated images

✅ **Security Audit**
- Review API keys and rotate if needed
- Check for security vulnerabilities
- Update security dependencies

✅ **User Feedback Review**
- Collect and analyze user feedback
- Identify improvement opportunities
- Plan feature additions

### Annually

✅ **Full Site Review**
- Complete content audit
- Design refresh if needed
- Major feature additions
- Legal compliance review (Privacy Policy, Terms)

✅ **Analytics Review**
- Analyze yearly trends
- Identify most popular content
- Plan content strategy for next year

✅ **Domain & Hosting Renewal**
- Renew domain registration
- Review hosting costs
- Optimize resource usage

## Updating Content

### Adding Events

See [ADMIN.md](./ADMIN.md#creating-an-event) for detailed instructions.

Quick checklist:
- [ ] Title and description
- [ ] Date, time, and location
- [ ] Event flyer with alt text
- [ ] Registration link (if applicable)
- [ ] Publish

### Updating Team Members

1. Go to Sanity Studio > Team Members
2. Click existing member or create new
3. Update information
4. Upload new photo if needed
5. Publish

### Managing Form Submissions

Contact submissions:
1. Go to Sanity Studio > Contact Submissions
2. Sort by newest first
3. Change status to "In Progress" when responding
4. Mark as "Resolved" when complete

Volunteer submissions:
1. Go to Sanity Studio > Volunteer Submissions
2. Contact volunteers via provided email
3. Update status appropriately

## Updating Dependencies

### Minor Updates (Safe)

```bash
npm update
npm run build
npm run dev
# Test thoroughly
git commit -m "Update dependencies"
git push
```

### Major Updates (Caution)

1. **Create backup branch:**
```bash
git checkout -b update-dependencies
```

2. **Update packages:**
```bash
npm update
npm outdated  # Check remaining updates
npm install package@latest  # For specific packages
```

3. **Test thoroughly:**
```bash
npm run build
npm run lint
npm run type-check
npm run dev
# Test all features
```

4. **Deploy to staging:**
- Create PR
- Review Vercel preview deployment
- Test all forms and functionality

5. **Merge to production:**
```bash
git checkout main
git merge update-dependencies
git push
```

### Critical Security Updates

If a security vulnerability is detected:

1. **Immediate action:**
```bash
npm audit
npm audit fix
```

2. **Test quickly:**
```bash
npm run build
npm run dev
# Quick smoke test
```

3. **Deploy ASAP:**
```bash
git add .
git commit -m "Security update: [vulnerability name]"
git push
```

4. **Monitor:**
- Watch Vercel deployment
- Check for errors
- Test critical paths

## Troubleshooting

### Website Down

1. **Check Vercel status:**
   - Visit status.vercel.com
   - Check project dashboard

2. **Check recent deployments:**
   - Go to Vercel > Deployments
   - Look for failed builds
   - Roll back if needed

3. **Check error logs:**
   - Vercel > Project > Logs
   - Filter by timeframe
   - Identify error patterns

4. **Immediate fix:**
   - Roll back to last working deployment
   - Fix issue in development
   - Redeploy when stable

### Forms Not Working

**Symptoms:** Forms submit but no emails received

1. **Check Vercel logs:**
   - Go to Functions > /api/contact or /api/volunteer
   - Look for error messages

2. **Verify Gmail:**
   - Check App Password is still valid
   - Verify Gmail account is active
   - Check spam folder

3. **Test reCAPTCHA:**
   - Verify site key and secret key
   - Check reCAPTCHA admin dashboard
   - Look for blocked requests

4. **Check Sanity:**
   - Verify API token is valid
   - Check submissions are saving
   - Review CORS settings

### Content Not Updating

**Symptoms:** Changes in Sanity don't appear on website

1. **Check webhook:**
   - Sanity > Settings > API > Webhooks
   - Verify webhook is active
   - Check webhook logs

2. **Manual revalidation:**
```bash
curl -X POST "https://your-domain.vercel.app/api/revalidate?secret=YOUR_SECRET"
```

3. **Clear cache:**
   - Hard refresh browser (Ctrl+Shift+R)
   - Try incognito mode
   - Wait 5 minutes (ISR cache)

4. **Verify environment variables:**
   - Check REVALIDATION_SECRET matches
   - Verify Sanity credentials

### Performance Issues

**Symptoms:** Slow page loads

1. **Run Lighthouse audit:**
   - Chrome DevTools > Lighthouse
   - Identify bottlenecks

2. **Check image sizes:**
   - Large images > 1MB
   - Use Sanity image optimization
   - Add proper width/height

3. **Review dependencies:**
   - Check bundle size
   - Remove unused packages

4. **Enable caching:**
   - Verify ISR is working
   - Check cache headers

### Build Failures

**Symptoms:** Vercel deployment fails

1. **Check build logs:**
   - Vercel > Deployment > Build Logs
   - Identify error line

2. **Test locally:**
```bash
npm run build
```

3. **Common issues:**
   - TypeScript errors: Fix type issues
   - Missing env vars: Add in Vercel
   - Dependency conflicts: Check package.json

4. **Clean build:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Backup Procedures

### Content Backup

**Monthly backup of Sanity content:**

1. **Using Sanity CLI:**
```bash
npx sanity dataset export production backup-$(date +%Y-%m-%d).tar.gz
```

2. **Store securely:**
   - Upload to Google Drive
   - Keep last 3 months
   - Delete older backups

### Code Backup

**Already backed up in GitHub:**
- Automatic with every commit
- Review tags for major versions
- Keep production branch clean

### Environment Variables Backup

**Store securely:**

1. Create encrypted document with all env vars
2. Store in secure password manager
3. Share with authorized team members only
4. Update when credentials change

## Monitoring

### Key Metrics to Track

1. **Performance:**
   - Page load time
   - Time to First Byte (TTFB)
   - Core Web Vitals

2. **Availability:**
   - Uptime percentage
   - Error rate
   - Failed builds

3. **User Engagement:**
   - Page views
   - Form submissions
   - Event registrations

4. **Security:**
   - Failed authentication attempts
   - Suspicious form submissions
   - Rate limit triggers

### Setting Up Alerts

**Vercel:**
1. Project > Settings > Integrations
2. Add Slack or email notifications
3. Configure for:
   - Build failures
   - Production errors
   - Performance degradation

**Gmail:**
- Set up email filters for form submissions
- Create labels for organization
- Enable mobile notifications for urgent

## Emergency Contacts

### Technical Issues

- **Vercel Support:** support@vercel.com
- **Sanity Support:** support@sanity.io
- **Domain Registrar:** [Your registrar support]

### Project Contacts

- **Technical Lead:** [Email]
- **Content Manager:** [Email]
- **Admin:** islamicalliance.nj@gmail.com

## Disaster Recovery

### Website Completely Down

1. **Immediate (0-15 min):**
   - Post update on social media
   - Send email to regular users
   - Contact technical lead

2. **Short-term (15-60 min):**
   - Roll back to last working version
   - Investigate root cause
   - Fix in development

3. **Long-term (1+ hours):**
   - Deploy fix
   - Monitor for stability
   - Post-mortem analysis

### Data Loss

1. **Restore from backup:**
```bash
npx sanity dataset import backup-YYYY-MM-DD.tar.gz production
```

2. **Verify restoration:**
   - Check all content types
   - Verify images
   - Test forms

3. **Document incident:**
   - What was lost
   - How it was recovered
   - Prevention steps

## Changelog

Keep a changelog in the repository (CHANGELOG.md):

```markdown
# Changelog

## [1.1.0] - 2025-01-15
### Added
- New volunteer form fields
- Additional payment options for shop

### Changed
- Updated team member photos
- Improved mobile navigation

### Fixed
- Contact form email notifications
```

## Questions?

For maintenance questions or emergencies:
- Email: islamicalliance.nj@gmail.com
- Reference: [README.md](./README.md), [ADMIN.md](./ADMIN.md), [DEPLOY.md](./DEPLOY.md)

