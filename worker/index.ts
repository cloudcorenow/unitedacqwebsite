import { Resend } from 'resend';

interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  captchaToken: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

async function handleContactSubmission(data: ContactFormData, env: Env): Promise<Response> {
  if (!data.name || !data.email || !data.message) {
    return new Response(
      JSON.stringify({ success: false, error: 'Name, email, and message are required' }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }

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

  if (!data.captchaToken) {
    return new Response(
      JSON.stringify({ success: false, error: 'CAPTCHA verification required' }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }

  if (!env.TURNSTILE_SECRET_KEY) {
    console.error('TURNSTILE_SECRET_KEY not configured');
    return new Response(
      JSON.stringify({ success: false, error: 'Server configuration error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }

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
    console.error('Turnstile verification failed:', turnstileResult);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'CAPTCHA verification failed',
        details: turnstileResult['error-codes'] || [],
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }

  if (!env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return new Response(
      JSON.stringify({ success: false, error: 'Server configuration error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }

  const resend = new Resend(env.RESEND_API_KEY);

  try {
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
    console.error('Error sending email:', error);
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
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const data: ContactFormData = await request.json();
        return await handleContactSubmission(data, env);
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
    }

    return env.ASSETS.fetch(request);
  },
};
