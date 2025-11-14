import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Islamic Alliance <notifications@islamicalliancenj.org>',
      to,
      subject,
      text,
      html,
    });

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
