# Deployment Guide

## Single Cloudflare Worker Deployment

This project runs entirely on a single Cloudflare Worker that serves both the static frontend assets and handles the contact form API endpoint.

### 1. Login to Cloudflare

```bash
npx wrangler login
```

### 2. Add Secrets

```bash
npx wrangler secret put RESEND_API_KEY
# Enter: re_HQxpC9da_CZzQ5faeEBiavZ39cPQhdxBH

npx wrangler secret put TURNSTILE_SECRET_KEY
# Enter: your_turnstile_secret_key
```

### 3. Deploy

```bash
npm run deploy
```

This command will:
1. Build your React frontend (`npm run build`)
2. Deploy the worker with static assets (`wrangler deploy`)

Your site will be available at:
`https://stafford-group-associates.YOUR_SUBDOMAIN.workers.dev`

### 4. Add Custom Domain (Optional)

In Cloudflare Dashboard:
1. Go to Workers & Pages → stafford-group-associates
2. Click "Settings" → "Triggers"
3. Add your custom domain

## Environment Variables

Create `.env.local` for local development:

```env
VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
```

## Resend Configuration

In your Resend dashboard:
1. Verify the domain `notifications.unitedacq.com`
2. Add DNS records provided by Resend
3. Wait for verification (usually takes a few minutes)

## Local Development

For local development, the contact form will fail because it needs the Cloudflare Worker environment. To test locally with the worker:

```bash
npm run build
npx wrangler dev
```

This will run the worker locally at `http://localhost:8787`

## Architecture

- **Static Assets**: Served from `/dist` folder via Workers Sites
- **API Endpoint**: `/api/contact` handled by the same worker
- **Email Sending**: Via Resend API
- **CAPTCHA**: Cloudflare Turnstile verification
