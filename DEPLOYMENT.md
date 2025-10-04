# Deployment Guide

## Cloudflare Worker Setup

### 1. Deploy the Contact Handler Worker

```bash
cd workers/contact-handler
npm install
npx wrangler login
npx wrangler deploy
```

After deployment, you'll get a worker URL like:
`https://contact-handler.YOUR_SUBDOMAIN.workers.dev`

### 2. Add Secrets to the Worker

```bash
npx wrangler secret put RESEND_API_KEY
# Enter: re_HQxpC9da_CZzQ5faeEBiavZ39cPQhdxBH

npx wrangler secret put TURNSTILE_SECRET_KEY
# Enter: your_turnstile_secret_key
```

### 3. Update Environment Variables

Create `.env.local` in the project root:

```env
VITE_WORKER_URL=https://contact-handler.YOUR_SUBDOMAIN.workers.dev
VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
```

## Cloudflare Pages Setup

### 1. Deploy the Frontend

```bash
npm run build
```

Then either:

**Option A: Git-based deployment**
1. Push to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Connect your repository
4. Set build command: `npm run build`
5. Set output directory: `dist`

**Option B: Direct upload**
```bash
npx wrangler pages deploy dist
```

### 2. Add Environment Variables to Pages

In Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables:

- `VITE_WORKER_URL`: `https://contact-handler.YOUR_SUBDOMAIN.workers.dev`
- `VITE_TURNSTILE_SITE_KEY`: `your_turnstile_site_key`

## Resend Configuration

In your Resend dashboard:
1. Verify the domain `notifications.unitedacq.com`
2. Add DNS records provided by Resend
3. Wait for verification (usually takes a few minutes)

## Testing

Test the contact form locally:
```bash
npm run dev
```

Then visit http://localhost:5173/contact and submit a test message.
