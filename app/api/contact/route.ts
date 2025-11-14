import { NextRequest, NextResponse } from 'next/server';
import { createContactSubmission } from '@/lib/sanity.queries';
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
    const { fullName, email, phone, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
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
      message: sanitizeInput(message),
    };

    // Save to Sanity
    await createContactSubmission(sanitizedData);

    // Send notification email to admin
    await sendEmail({
      to: 'islamicalliance.nj@gmail.com',
      subject: `New Contact Form Submission from ${sanitizedData.fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.fullName}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        ${sanitizedData.phone ? `<p><strong>Phone:</strong> ${sanitizedData.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send auto-reply to submitter
    await sendEmail({
      to: sanitizedData.email,
      subject: 'Thank you for contacting Islamic Alliance',
      html: `
        <h2>Thank you for contacting Islamic Alliance</h2>
        <p>Dear ${sanitizedData.fullName},</p>
        <p>We have received your message and will respond within 48 hours.</p>
        <p>Best regards,<br>Islamic Alliance Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Thank you for your message. We will contact you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
