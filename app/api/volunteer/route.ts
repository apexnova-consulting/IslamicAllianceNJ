import { NextRequest, NextResponse } from 'next/server';
import { createVolunteerSubmission } from '@/lib/sanity.queries';
import { sendEmail, sanitizeInput } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Rate limiting: 3 submissions per 10 minutes
    if (!rateLimit(ip, 3, 600000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { fullName, email, phone, interestArea, message } = body;

    // Validate required fields
    if (!fullName || !email || !interestArea) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(fullName),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : undefined,
      interestArea: sanitizeInput(interestArea),
      message: message ? sanitizeInput(message) : undefined,
    };

    // Save to Sanity
    await createVolunteerSubmission(sanitizedData);

    // Get interest area label for better readability
    const interestAreaLabels: Record<string, string> = {
      education: 'Education & Mentorship',
      events: 'Event Planning & Coordination',
      outreach: 'Community Outreach',
      fundraising: 'Fundraising',
      marketing: 'Marketing & Social Media',
      technology: 'Technology & Web Development',
      other: 'Other',
    };
    const interestAreaLabel = interestAreaLabels[sanitizedData.interestArea] || sanitizedData.interestArea;

    // Send notification email to admin with HubSpot-friendly format
    await sendEmail({
      to: 'islamicalliance.nj@gmail.com',
      subject: `New Volunteer Application: ${sanitizedData.fullName} - ${interestAreaLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F5132; border-bottom: 3px solid #C69C6D; padding-bottom: 10px;">
            🙋 New Volunteer Application
          </h2>
          
          <div style="background-color: #f7f6f3; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0F5132; margin-top: 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 150px;">Full Name:</td>
                <td style="padding: 8px 0;">${sanitizedData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${sanitizedData.email}" style="color: #0F5132;">${sanitizedData.email}</a></td>
              </tr>
              ${sanitizedData.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${sanitizedData.phone}" style="color: #0F5132;">${sanitizedData.phone}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Interest Area:</td>
                <td style="padding: 8px 0; color: #C69C6D; font-weight: bold;">${interestAreaLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Submitted:</td>
                <td style="padding: 8px 0;">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td>
              </tr>
            </table>
          </div>

          ${sanitizedData.message ? `
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #C69C6D; margin: 20px 0;">
            <h3 style="color: #0F5132; margin-top: 0;">Message from Volunteer:</h3>
            <p style="line-height: 1.6; color: #333;">${sanitizedData.message.replace(/\n/g, '<br>')}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <h3 style="color: #0F5132;">Next Steps:</h3>
            <ol style="line-height: 1.8; color: #333;">
              <li>View full details in <a href="https://www.islamicalliancenj.com/studio" style="color: #0F5132; font-weight: bold;">Sanity Studio</a></li>
              <li>Add to HubSpot CRM (copy details above)</li>
              <li>Reach out within 24-48 hours to discuss volunteer opportunities</li>
            </ol>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9f5; border-radius: 5px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              <strong>HubSpot Quick Copy:</strong><br>
              Name: ${sanitizedData.fullName} | Email: ${sanitizedData.email} | Phone: ${sanitizedData.phone || 'N/A'} | Interest: ${interestAreaLabel}
            </p>
          </div>
        </div>
      `,
    });

    // Send auto-reply to submitter
    await sendEmail({
      to: sanitizedData.email,
      subject: 'Thank you for volunteering with Islamic Alliance',
      html: `
        <h2>Thank you for your interest in volunteering!</h2>
        <p>Dear ${sanitizedData.fullName},</p>
        <p>We have received your volunteer application. We will contact you shortly to discuss how you can get involved with our ${sanitizedData.interestArea} initiatives.</p>
        <p>Thank you for your willingness to serve the community.</p>
        <p>Best regards,<br>Islamic Alliance Team</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for volunteering. We will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing volunteer form:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
