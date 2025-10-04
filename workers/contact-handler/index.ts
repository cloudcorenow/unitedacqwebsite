import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  captchaToken: string;
}

interface Env {
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    try {
      // Only allow POST requests
      if (request.method !== 'POST') {
        return new Response(
          JSON.stringify({ success: false, error: 'Method not allowed' }),
          {
            status: 405,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      // Parse request body
      const data: ContactFormData = await request.json();

      // Validate required fields
      if (!data.name || !data.email || !data.message) {
        return new Response(
          JSON.stringify({ success: false, error: 'Name, email, and message are required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return new Response(
          JSON.stringify({ success: false, error: 'Invalid email address' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      // Validate CAPTCHA token
      if (!data.captchaToken) {
        return new Response(
          JSON.stringify({ success: false, error: 'CAPTCHA verification required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      // Verify Cloudflare Turnstile token
      const turnstileResponse = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            secret: env.TURNSTILE_SECRET_KEY,
            response: data.captchaToken,
          }),
        }
      );

      const turnstileResult: any = await turnstileResponse.json();

      if (!turnstileResult.success) {
        return new Response(
          JSON.stringify({
            success: false,
            error: 'CAPTCHA verification failed',
            details: turnstileResult['error-codes'] || []
          }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      // Initialize Resend
      const resend = new Resend(env.RESEND_API_KEY);

      // Send email via Resend
      const emailResult = await resend.emails.send({
        from: 'United Acquisitions Contact Form <noreply@notifications.unitedacq.com>',
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

      return new Response(
        JSON.stringify({ success: true, data: emailResult }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.error('Error processing contact form:', error);
      return new Response(
        JSON.stringify({
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error occurred',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
  },
};
