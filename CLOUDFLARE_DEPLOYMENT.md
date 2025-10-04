# Cloudflare Workers Deployment Guide

This application is configured to run entirely on Cloudflare Workers, serving both the frontend (React SPA) and backend (contact form API).

## Prerequisites

1. A Cloudflare account (free tier works)
2. Wrangler CLI installed (already in package.json)
3. Required API keys:
   - Resend API key for sending emails
   - Cloudflare Turnstile site key and secret key for CAPTCHA

## Environment Variables

You need to configure the following secrets in Cloudflare:

### Required Secrets (via Wrangler CLI)

```bash
# Set Resend API key
npx wrangler secret put RESEND_API_KEY

# Set Turnstile secret key
npx wrangler secret put TURNSTILE_SECRET_KEY
```

### Frontend Environment Variables

Before building, create a `.env` file with:

```
VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
```

This will be embedded in the frontend build.

## Local Development

### Option 1: Standard Vite Dev Server (Frontend Only)
```bash
npm run dev
```
This runs the frontend with Vite's dev server. The contact form will attempt to call `/api/contact` which won't work locally without the Worker.

### Option 2: Cloudflare Workers Dev (Full Stack)
```bash
npm run cf:dev
```
This runs the complete application (frontend + backend) using Wrangler's local dev server.

## Building for Production

```bash
npm run build
```

This will:
1. Build the React frontend with Vite (outputs to `dist/`)
2. Validate the Worker configuration with a dry-run

## Deployment

### First Time Setup

1. Login to Cloudflare via Wrangler:
```bash
npx wrangler login
```

2. Set your secrets:
```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
```

3. Deploy:
```bash
npm run deploy
```

### Subsequent Deployments

Simply run:
```bash
npm run deploy
```

Your site will be available at: `https://stafford-group-associates.<your-subdomain>.workers.dev`

You can also configure a custom domain in the Cloudflare dashboard.

## How It Works

The Cloudflare Worker (`worker/index.ts`) acts as both:

1. **Static Site Server**: Serves all static assets (HTML, CSS, JS) from the `dist/` folder
2. **API Server**: Handles POST requests to `/api/contact` for the contact form

When a request comes in:
- If it's `POST /api/contact` → Worker processes the form and sends email via Resend
- All other requests → Worker serves static files from the `dist/` folder

## Configuration Files

- `wrangler.toml` - Cloudflare Workers configuration
- `worker/index.ts` - Worker entry point (handles both frontend serving and API)
- `package.json` - Build and deployment scripts

## Troubleshooting

### Worker errors during deployment
- Ensure all secrets are configured: `npx wrangler secret list`
- Check the Worker logs: `npx wrangler tail`

### Contact form not working
- Verify Turnstile keys are correct (site key in frontend, secret key in Worker)
- Check Resend API key is valid
- Review Worker logs for error messages

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Clear cache: `rm -rf node_modules/.vite dist .wrangler && npm install`

## Cost Estimate

Cloudflare Workers Free Tier includes:
- 100,000 requests per day
- 10ms CPU time per request
- Free SSL certificate
- Free custom domains

This should be more than sufficient for most small-to-medium business websites.
