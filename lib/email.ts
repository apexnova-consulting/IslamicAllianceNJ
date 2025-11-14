import { Resend } from 'resend';

// Use a placeholder key during build time if not available
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key_for_build');

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  try {
    // Check if we have a valid API key at runtime
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder_key_for_build') {
      console.error('RESEND_API_KEY is not configured');
      return { success: false, error: 'Email service not configured' };
    }

    const emailPayload: any = {
      from: 'Islamic Alliance <notifications@islamicalliancenj.org>',
      to,
      subject,
    };

    // Resend requires at least one of: react, html, or text
    if (html) {
      emailPayload.html = html;
    }
    if (text) {
      emailPayload.text = text;
    }
    // Fallback if neither html nor text is provided
    if (!html && !text) {
      emailPayload.text = subject;
    }

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    console.log('Message sent:', data?.id);
    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

export function sanitizeInput(input: string): string {
  // Remove potential email injection characters
  return input.replace(/[<>"\n\r]/g, '').trim();
}
