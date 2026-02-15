# Volunteer Form Fix Guide

## Problem
The volunteer registration form at https://www.islamicalliancenj.com/get-involved shows "submitted" but you're not receiving email notifications or data.

## Root Cause
The `RESEND_API_KEY` environment variable is not configured in Vercel, which prevents email notifications from being sent.

## Solution: Set Up Resend Email Service

### Step 1: Create Resend Account (5 minutes)

1. Go to [resend.com](https://resend.com)
2. Sign up using your email: **islamicalliance.nj@gmail.com**
3. Verify your email address

### Step 2: Get Your API Key (2 minutes)

1. After logging in, go to **API Keys** in the Resend dashboard
2. Click **"Create API Key"**
3. Name it: **"Islamic Alliance Website - Production"**
4. Permission: Select **"Sending Access"** (sufficient for forms)
5. Click **"Create"**
6. **IMPORTANT:** Copy the API key immediately (it looks like `re_xxxxxxxxxxxxx`)
   - It will only be shown once!
   - Example format: `re_123abc456def789ghi012jkl345mno`

### Step 3: Add API Key to Vercel (3 minutes)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Select your **Islamic Alliance NJ** project
3. Click **"Settings"** (top navigation)
4. Click **"Environment Variables"** in the left sidebar
5. Add new environment variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Paste the API key you copied from Resend
   - **Environments:** Select **"Production"**, **"Preview"**, and **"Development"**
6. Click **"Save"**

### Step 4: Redeploy (1 minute)

1. Go to **"Deployments"** tab in Vercel
2. Find the latest deployment
3. Click the **three dots (⋯)** menu
4. Select **"Redeploy"**
5. Confirm the redeployment

**OR** simply make any small change to your repository and push it to trigger a new deployment.

### Step 5: Test the Form (2 minutes)

1. Visit https://www.islamicalliancenj.com/get-involved
2. Fill out the volunteer form with test data
3. Submit the form
4. **Check your email:** You should receive a notification at islamicalliance.nj@gmail.com
5. The test volunteer should also receive an auto-reply email

---

## How It Works Now

Once configured, here's what happens when someone submits the volunteer form:

1. ✅ **Form submits** → Data is validated
2. ✅ **Data saved to Sanity** → You can view it at `/studio` (Sanity Studio)
3. ✅ **Email sent to you** → islamicalliance.nj@gmail.com receives notification with:
   - Volunteer's name
   - Email address
   - Phone number (if provided)
   - Area of interest
   - Personal message (if provided)
4. ✅ **Auto-reply sent to volunteer** → They receive a thank you message confirming receipt
5. ✅ **You can export to HubSpot** → All data is available in Sanity Studio as structured data

---

## Viewing Volunteer Submissions in Sanity

1. Visit https://www.islamicalliancenj.com/studio
2. Sign in with your Sanity credentials
3. Click **"Volunteer Submissions"** in the left sidebar
4. You'll see all submissions with:
   - Full name
   - Email
   - Phone
   - Area of interest
   - Message
   - Submission timestamp
   - Status (New, Contacted, Active Volunteer, Declined)

### Exporting Data for HubSpot

**Option 1: Manual Export from Sanity**
1. In Sanity Studio, go to "Volunteer Submissions"
2. Click on each submission to view details
3. Copy the information manually into HubSpot

**Option 2: Use Email Notifications**
- All volunteer details are in the email sent to islamicalliance.nj@gmail.com
- Forward or copy this information directly to HubSpot
- Email subject: "New Volunteer Application from [Name]"

**Option 3: API Integration (Future Enhancement)**
- We can set up automatic sync to HubSpot API if needed
- Requires HubSpot API key and additional configuration

---

## Resend Free Tier Details

✅ **100 emails per day** (free forever)  
✅ Perfect for contact and volunteer forms  
✅ No credit card required  
✅ Email delivery reports in dashboard  
✅ Can upgrade if you need more

---

## Testing Checklist

After configuration, verify:

- [ ] RESEND_API_KEY added to Vercel environment variables
- [ ] Vercel project redeployed
- [ ] Test form submission completed
- [ ] Email received at islamicalliance.nj@gmail.com
- [ ] Auto-reply received by test volunteer
- [ ] Submission visible in Sanity Studio at `/studio`
- [ ] Email contains all volunteer details (name, email, phone, interest, message)

---

## Troubleshooting

### "Still not receiving emails after setup"

1. **Check Resend Dashboard:**
   - Go to resend.com → Logs
   - Check if emails are being sent
   - Look for any error messages

2. **Verify API Key:**
   - Make sure you copied the entire key (starts with `re_`)
   - Check there are no extra spaces in Vercel environment variable

3. **Check Spam Folder:**
   - Emails might be filtered as spam initially
   - Add `notifications@resend.dev` or your custom domain to contacts

4. **Verify Vercel Deployment:**
   - Go to Vercel → Deployments
   - Click on latest deployment
   - Check "Environment Variables" section shows RESEND_API_KEY

### "Form shows error when submitting"

1. Check browser console for errors (F12 → Console tab)
2. Verify Sanity API token has "Editor" permissions
3. Check Vercel function logs for errors

### "Want to use custom email domain instead of resend.dev"

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `islamicalliancenj.org`)
4. Add the DNS records to your domain registrar
5. Wait for verification (5-10 minutes)
6. Update `lib/email.ts` line 22 to use your domain:
   ```typescript
   from: 'Islamic Alliance <notifications@islamicalliancenj.org>',
   ```

---

## Summary

**Time to fix:** ~10 minutes  
**Cost:** $0 (Resend free tier)  
**Result:** Email notifications working + data stored in Sanity + ready for HubSpot import

---

## Need Help?

If you encounter any issues:

1. **Check Resend Logs:** resend.com → Logs (shows all email attempts)
2. **Check Vercel Logs:** vercel.com → Your Project → Functions → Logs
3. **Check Sanity Data:** islamicalliancenj.com/studio → Volunteer Submissions

**Questions?** The setup should be straightforward, but if you need assistance with any step, let me know!
