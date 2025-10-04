import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  captchaToken: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Verify Cloudflare Turnstile token
    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || '',
        response: data.captchaToken,
      }),
    });

    const turnstileResult = await turnstileResponse.json();
    
    if (!turnstileResult.success) {
      throw new Error('CAPTCHA verification failed');
    }

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: 'United Acquisitions Contact Form <noreply@unitedacq.com>',
      to: ['info@unitedacq.com'],
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2A5F9E; border-bottom: 2px solid #E5C93C; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2A5F9E; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
            ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #2A5F9E; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #E6EBF2; border-radius: 8px; font-size: 12px; color: #666;">
            <p style="margin: 0;"><strong>Submission Details:</strong></p>
            <p style="margin: 5px 0 0 0;">Time: ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0 0 0;">CAPTCHA Verified: ✓</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}

Message:
${data.message}

Submitted: ${new Date().toLocaleString()}
      `,
    });

    return { success: true, data: emailResult };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}