import { fail } from '@sveltejs/kit';
import postmark from 'postmark';

// Minimum time in milliseconds before form can be submitted (anti-bot)
const MIN_SUBMISSION_TIME = 3000; // 3 seconds

/**
 * Get Postmark client (lazy initialization)
 */
function getPostmarkClient() {
  const token = process.env.POSTMARK_API_TOKEN;
  if (!token) {
    return null;
  }
  return new postmark.ServerClient(token);
}

/**
 * Escape HTML to prevent XSS in email content
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/** @type {import('./$types').Actions} */
export const actions = {
  contact: async ({ request }) => {
    const data = await request.formData();

    const name = data.get('name')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const subject = data.get('subject')?.toString().trim() || '';
    const message = data.get('message')?.toString().trim() || '';
    const website = data.get('website')?.toString() || ''; // Honeypot
    const loadTime = parseInt(data.get('loadTime')?.toString() || '0', 10);

    // Anti-spam check 1: Honeypot field should be empty
    if (website) {
      // Silently reject but return success to not tip off bots
      console.log('Spam detected: honeypot filled');
      return { success: true };
    }

    // Anti-spam check 2: Form submitted too quickly
    const submissionTime = Date.now() - loadTime;
    if (submissionTime < MIN_SUBMISSION_TIME) {
      console.log('Spam detected: submitted too quickly', submissionTime, 'ms');
      return fail(400, {
        message: 'Please take your time filling out the form.'
      });
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return fail(400, {
        message: 'All fields are required.'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return fail(400, {
        message: 'Please enter a valid email address.'
      });
    }

    // Validate field lengths
    if (name.length > 100) {
      return fail(400, { message: 'Name is too long.' });
    }
    if (subject.length > 200) {
      return fail(400, { message: 'Subject is too long.' });
    }
    if (message.length > 5000) {
      return fail(400, { message: 'Message is too long (max 5000 characters).' });
    }

    // Check for required environment variables
    const client = getPostmarkClient();
    if (!client || !process.env.POSTMARK_FROM_EMAIL || !process.env.POSTMARK_TO_EMAIL) {
      console.error('Missing Postmark environment variables');
      return fail(500, {
        message: 'Email service is not configured. Please contact us directly.'
      });
    }

    try {
      await client.sendEmail({
        From: process.env.POSTMARK_FROM_EMAIL,
        To: process.env.POSTMARK_TO_EMAIL,
        ReplyTo: email,
        Subject: `[Foxleigh & Co] ${subject}`,
        TextBody: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        HtmlBody: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #243037; padding: 24px; border-radius: 8px 8px 0 0;">
              <h2 style="color: #fcfcfb; margin: 0; font-size: 20px; font-weight: 500;">
                New Enquiry from Foxleigh & Co
              </h2>
            </div>
            <div style="background-color: #f8f9fa; padding: 24px; border: 1px solid #e9ecef; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; color: #6c757d; width: 80px; vertical-align: top;">
                    <strong>Name</strong>
                  </td>
                  <td style="padding: 12px 0; color: #212529;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #6c757d; vertical-align: top;">
                    <strong>Email</strong>
                  </td>
                  <td style="padding: 12px 0; color: #212529;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #f86b1c;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #6c757d; vertical-align: top;">
                    <strong>Subject</strong>
                  </td>
                  <td style="padding: 12px 0; color: #212529;">
                    ${escapeHtml(subject)}
                  </td>
                </tr>
              </table>
              <div style="margin-top: 24px; padding: 20px; background-color: #ffffff; border-radius: 6px; border: 1px solid #e9ecef;">
                <strong style="color: #6c757d; font-size: 14px; display: block; margin-bottom: 12px;">Message</strong>
                <p style="white-space: pre-wrap; margin: 0; color: #212529; line-height: 1.6;">${escapeHtml(message)}</p>
              </div>
            </div>
            <div style="padding: 16px 24px; background-color: #f8f9fa; border: 1px solid #e9ecef; border-top: none; border-radius: 0 0 8px 8px;">
              <p style="margin: 0; font-size: 12px; color: #6c757d;">
                Sent from the Foxleigh & Co website contact form
              </p>
            </div>
          </div>
        `,
        MessageStream: 'outbound'
      });

      return { success: true };
    } catch (error) {
      console.error('Postmark error:', error);
      return fail(500, {
        message: 'Failed to send message. Please try again later or email us directly.'
      });
    }
  }
};
