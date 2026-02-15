# Volunteer Form Setup - Quick Reference

## 🎯 Current Status

**Form Functionality:** ✅ Working (submissions save to database)  
**Email Notifications:** ❌ **NOT CONFIGURED** (needs Resend API key)  
**HubSpot Export:** ✅ Ready (manual export from Sanity or email)

---

## ⚡ Quick Fix (10 minutes)

### The Problem
People can submit the volunteer form, but you're not getting email notifications because the email service isn't configured.

### The Solution
Set up Resend (free email service) in 3 steps:

1. **Get API Key from Resend** (5 min)
   - Go to resend.com → Sign up with islamicalliance.nj@gmail.com
   - Create API Key → Copy it (starts with `re_`)

2. **Add to Vercel** (3 min)
   - vercel.com → Your Project → Settings → Environment Variables
   - Add: `RESEND_API_KEY` = your copied key
   - Save

3. **Redeploy** (2 min)
   - Vercel → Deployments → Redeploy latest

### Result
✅ Email notifications to islamicalliance.nj@gmail.com  
✅ Auto-reply to volunteers  
✅ Data ready for HubSpot import

---

## 📧 What You'll Receive

After setup, when someone submits the volunteer form, you get:

### Email to islamicalliance.nj@gmail.com with:
- Volunteer's full contact information
- Their area of interest
- Their personal message
- **"HubSpot Quick Copy"** line for easy CRM import
- Timestamp of submission

### Example Email:
```
Subject: New Volunteer Application: Ahmed Khan - Education & Mentorship

Contact Information:
- Name: Ahmed Khan
- Email: ahmed.khan@example.com  
- Phone: (555) 123-4567
- Interest: Education & Mentorship

HubSpot Quick Copy:
Name: Ahmed Khan | Email: ahmed.khan@example.com | Phone: (555) 123-4567 | Interest: Education & Mentorship
```

---

## 🗄️ Where Data is Stored

**Sanity Studio:** All volunteer submissions are automatically saved

### To view:
1. Go to https://www.islamicalliancenj.com/studio
2. Click "Volunteer Submissions" in sidebar
3. See all applications with:
   - Contact details
   - Interest area
   - Message
   - Submission date
   - Status (New, Contacted, Active, Declined)

---

## 📊 Exporting to HubSpot

### Method 1: From Email (Easiest)
- Copy the "HubSpot Quick Copy" line from notification email
- Add contact in HubSpot CRM
- Paste information

### Method 2: From Sanity Studio
- View submission in Sanity Studio
- Copy details manually
- Add to HubSpot

### Method 3: Bulk CSV Export
- Use GROQ query in Sanity Vision (see HUBSPOT_EXPORT_GUIDE.md)
- Export as CSV
- Import to HubSpot

**Detailed instructions:** See `docs/HUBSPOT_EXPORT_GUIDE.md`

---

## 📚 Documentation

- **VOLUNTEER_FORM_FIX.md** - Step-by-step setup guide
- **docs/HUBSPOT_EXPORT_GUIDE.md** - Complete export instructions
- **docs/DEPLOY.md** - Full Vercel/Resend setup guide

---

## ✅ Setup Checklist

- [ ] Create Resend account (resend.com)
- [ ] Get Resend API key
- [ ] Add RESEND_API_KEY to Vercel environment variables
- [ ] Redeploy Vercel project
- [ ] Submit test form
- [ ] Confirm email received at islamicalliance.nj@gmail.com
- [ ] Check test submission in Sanity Studio
- [ ] Test copying data to HubSpot

---

## 🎁 What's Been Updated

### Enhanced Email Notifications:
- ✅ Better formatted with color-coded sections
- ✅ "HubSpot Quick Copy" line for easy CRM import
- ✅ Clickable email and phone links
- ✅ Volunteer's full message included
- ✅ Timestamp in Eastern Time
- ✅ Next steps guidance

### New Documentation:
- ✅ `.env.example` - Environment variables template
- ✅ `VOLUNTEER_FORM_FIX.md` - Setup guide
- ✅ `docs/HUBSPOT_EXPORT_GUIDE.md` - Export instructions
- ✅ This summary document

---

## 💰 Cost

**Free Forever:**
- ✅ Resend: 100 emails/day (no credit card required)
- ✅ Sanity: Generous free tier
- ✅ Vercel: Free for most sites

**Upgrade only if:**
- You get more than 100 form submissions per day (unlikely)
- You need custom email domain instead of resend.dev

---

## 🆘 Support

**Setup Issues?** See VOLUNTEER_FORM_FIX.md  
**Export Issues?** See docs/HUBSPOT_EXPORT_GUIDE.md  
**Technical Issues?** Check Vercel or Resend logs

---

**Time to Complete:** 10 minutes  
**Technical Difficulty:** Beginner-friendly  
**Result:** Fully working volunteer form with email notifications

**Start here:** Open `VOLUNTEER_FORM_FIX.md` for step-by-step instructions
