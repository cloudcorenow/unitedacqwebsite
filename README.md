unitedacqwebsite

## Email Configuration

This application uses Resend for email delivery. To set up email functionality:

1. **Get a Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key in your dashboard
   - Verify your domain (or use the sandbox domain for testing)

2. **Get Cloudflare Turnstile Keys:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Turnstile
   - Create a new site and get your site key and secret key

3. **Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here
   ```

4. **Update Contact Form:**
   - Replace the demo Turnstile site key in `ContactForm.tsx` with your actual site key
   - Update the "from" email address in `src/lib/email.ts` to match your verified domain

## Features

- Professional debt collection website
- Contact form with email delivery via Resend
- CAPTCHA protection with Cloudflare Turnstile
- Responsive design with Tailwind CSS
- React Router for navigation
- Framer Motion animations