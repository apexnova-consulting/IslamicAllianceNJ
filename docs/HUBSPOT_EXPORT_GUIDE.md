# HubSpot CRM Export Guide

This guide shows you how to get volunteer submission data from your website into HubSpot CRM.

## Method 1: Using Email Notifications (Recommended for Individual Submissions)

When someone submits the volunteer form, you receive an email with all their information formatted for easy copying.

### Steps:

1. **Check your email** at islamicalliance.nj@gmail.com
2. **Look for the "HubSpot Quick Copy" section** at the bottom of the email
3. **Copy the line** that contains: Name, Email, Phone, and Interest Area
4. **Go to HubSpot CRM** → Contacts → Add Contact
5. **Paste the information** into the corresponding fields
6. **Add any additional notes** from the volunteer's message

### Example Email Format:

```
🙋 New Volunteer Application

Contact Information:
- Full Name: Ahmed Khan
- Email: ahmed.khan@example.com
- Phone: (555) 123-4567
- Interest Area: Education & Mentorship
- Submitted: Jan 15, 2025, 2:30 PM ET

Message from Volunteer:
"I have 5 years of experience teaching Islamic studies..."

HubSpot Quick Copy:
Name: Ahmed Khan | Email: ahmed.khan@example.com | Phone: (555) 123-4567 | Interest: Education & Mentorship
```

---

## Method 2: Using Sanity Studio (For Bulk Export)

### Viewing All Volunteer Submissions:

1. Go to https://www.islamicalliancenj.com/studio
2. Sign in with your Sanity credentials
3. Click **"Volunteer Submissions"** in the left sidebar
4. You'll see a list of all volunteer applications

### Exporting Individual Submissions:

1. Click on any submission to view full details
2. Copy the information you need:
   - Full Name
   - Email
   - Phone
   - Area of Interest
   - Message
   - Submission Date
   - Status
3. Open HubSpot CRM
4. Create a new contact
5. Paste the information into the corresponding fields

### Bulk Information Access:

For each submission in Sanity, you'll see:

| Field | Description | HubSpot Field |
|-------|-------------|---------------|
| Full Name | Volunteer's name | First Name + Last Name |
| Email | Contact email | Email |
| Phone | Phone number | Phone Number |
| Area of Interest | What they want to help with | Tags or Custom Property |
| Message | Their introduction | Notes |
| Submitted At | Date/time of submission | Create Date |
| Status | New/Contacted/Active/Declined | Lead Status |

---

## Method 3: Manual CSV Export (For Large Batches)

If you have many submissions to export at once:

### Using Sanity Vision (GROQ Query):

1. Go to https://www.islamicalliancenj.com/studio
2. Click the **🔍 Vision** tab (bottom left)
3. Paste this query:

```groq
*[_type == "volunteerSubmission"] | order(submittedAt desc) {
  fullName,
  email,
  phone,
  interestArea,
  message,
  submittedAt,
  status
}
```

4. Click **"Fetch"** or press `Ctrl+Enter`
5. Click **"Copy"** to copy the JSON results
6. Use a JSON to CSV converter:
   - Option 1: https://www.convertcsv.com/json-to-csv.htm
   - Option 2: Use Excel → Data → Get Data → From JSON
7. Save as CSV
8. Import the CSV into HubSpot:
   - HubSpot → Contacts → Import → Start an import → File from computer
   - Select your CSV file
   - Map the columns to HubSpot properties
   - Complete the import

---

## Field Mapping Reference

When importing to HubSpot, use these mappings:

| Website Field | HubSpot Property | Notes |
|---------------|------------------|-------|
| Full Name | First Name + Last Name | Split at first space |
| Email | Email | Primary identifier |
| Phone | Phone Number | Format: (XXX) XXX-XXXX |
| Area of Interest | Custom Property: "Volunteer Interest" | Create custom property |
| Message | Notes | Add to contact record notes |
| Submitted At | Create Date | Use as contact creation date |
| Status | Lead Status | New → Lead, Contacted → Qualified, etc. |

### Setting Up Custom Properties in HubSpot:

1. Go to **Settings** → **Properties** → **Contact Properties**
2. Click **"Create property"**
3. Create a new property:
   - **Label:** Volunteer Interest
   - **Type:** Dropdown select
   - **Options:**
     - Education & Mentorship
     - Event Planning & Coordination
     - Community Outreach
     - Fundraising
     - Marketing & Social Media
     - Technology & Web Development
     - Other
4. Save the property
5. Now you can map "Area of Interest" to this custom property during import

---

## Recommended Workflow

### For New Submissions (Daily):

1. **Morning routine:**
   - Check email for new volunteer applications
   - Review each submission
   - Copy the "HubSpot Quick Copy" line from the email

2. **Add to HubSpot:**
   - Go to HubSpot → Contacts → Add Contact
   - Create new contact with the information
   - Add the volunteer's interest to the custom property
   - Copy their message into the Notes section
   - Tag as "Volunteer - [Interest Area]"

3. **Follow up:**
   - Set a task in HubSpot to follow up within 24-48 hours
   - Send personalized email thanking them and scheduling a call
   - Update contact status in both HubSpot and Sanity Studio

### For Bulk Import (Weekly/Monthly):

1. **Export from Sanity:**
   - Use the GROQ query method above
   - Get all submissions from the past week/month
   - Convert to CSV

2. **Import to HubSpot:**
   - Use HubSpot's CSV import feature
   - Map all fields correctly
   - Review for duplicates

3. **Clean up:**
   - Update statuses in Sanity Studio
   - Mark imported records as "Processed"

---

## Tips for Better Data Management

### 1. Use Consistent Naming
- Always split "Full Name" into "First Name" and "Last Name" the same way
- Use consistent phone number formats: (XXX) XXX-XXXX

### 2. Tag Contacts
- Tag all volunteers with "Volunteer" in HubSpot
- Add secondary tag for their interest area
- Example: "Volunteer", "Education"

### 3. Set Up Workflows
In HubSpot, create automated workflows:
- Send welcome email when contact is tagged as "Volunteer"
- Set task for team member to follow up within 48 hours
- Send follow-up email if no response after 1 week

### 4. Track in Both Systems
- Keep Sanity Studio updated with the volunteer's status
- This helps you track who has been imported to HubSpot
- Status options in Sanity:
  - **New** → Just submitted, not yet in HubSpot
  - **Contacted** → Added to HubSpot and reached out
  - **Active Volunteer** → Actively participating
  - **Declined** → Not interested or couldn't commit

### 5. Regular Sync
- Set a recurring task (weekly) to check Sanity for new submissions
- Export and import any missed entries
- Keep both systems in sync

---

## Troubleshooting

### "Email not received after form submission"
- Check spam/junk folder
- Verify RESEND_API_KEY is configured in Vercel
- Check Resend dashboard logs at resend.com

### "Can't access Sanity Studio"
- Visit https://www.islamicalliancenj.com/studio
- Sign in with your Sanity account credentials
- If locked out, check with your web administrator

### "CSV import failed in HubSpot"
- Check that CSV has correct column headers
- Ensure email addresses are valid format
- Remove any duplicate email addresses
- Try importing in smaller batches (100-200 at a time)

### "Want to automate this process"
If you need automatic syncing:
- Consider HubSpot API integration
- Can be set up to automatically create contacts when forms are submitted
- Requires HubSpot API key and additional development
- Contact your web developer for implementation

---

## Summary

**Quickest Method:** Use email notifications with "HubSpot Quick Copy" line (30 seconds per contact)

**Most Reliable:** Check Sanity Studio daily and manually add to HubSpot (2-3 minutes per contact)

**For Large Batches:** Export via GROQ query and bulk import CSV (15 minutes for any number of contacts)

---

## Need Help?

If you have questions about:
- **Email notifications not working** → See VOLUNTEER_FORM_FIX.md
- **Sanity Studio access** → Check with your web administrator
- **HubSpot import issues** → Contact HubSpot support
- **Automation setup** → Contact your web developer

---

**Last Updated:** February 2025
