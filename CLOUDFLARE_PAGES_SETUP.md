# Cloudflare Pages Deployment Guide

This project is configured to work with **Cloudflare Pages** (recommended) or **Cloudflare Workers Sites**.

## Option 1: Cloudflare Pages (Recommended)

Cloudflare Pages is the modern, recommended approach for deploying static sites with serverless functions.

### Setup Steps:

1. **Go to Cloudflare Dashboard**
   - Navigate to Workers & Pages
   - Click "Create Application" → "Pages" → "Connect to Git"

2. **Connect Your GitHub Repository**
   - Select your repository
   - Click "Begin setup"

3. **Configure Build Settings:**
   - **Framework preset**: None (or Vite)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty or use root)

4. **Environment Variables:**
   Add these in the Pages settings:
   - `RESEND_API_KEY` - Your Resend API key
   - `TURNSTILE_SECRET_KEY` - Your Cloudflare Turnstile secret key
   - `VITE_TURNSTILE_SITE_KEY` - Your Turnstile site key (for build time)

5. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will build and deploy your site
   - Future pushes to your main branch will auto-deploy

### How It Works:

- Static files are served from the `dist` folder
- API routes in `/functions` folder are deployed as Cloudflare Pages Functions
- The `/api/contact` endpoint is handled by `functions/api/contact.ts`

---

## Option 2: Cloudflare Workers Sites (Current Setup)

If you prefer to use Workers Sites:

### Deploy Command Issue Fix:

The error you're seeing ("Workers Sites does not support uploading versions") happens because Cloudflare's auto-deploy uses `wrangler versions upload` by default, but Workers Sites requires `wrangler deploy`.

### Manual Deploy (Quick Fix):

Run locally:
```bash
npm run deploy
```

### GitHub Auto-Deploy Fix:

In Cloudflare Workers Dashboard:
1. Go to your worker settings
2. Find "Builds & Deployments" or similar
3. Change deploy command to: `npm run deploy`
4. Set build command to: `npm run build`

### Why This Happens:

- Workers Sites requires the `dist` folder to exist during deployment
- The `dist` folder is in `.gitignore`, so it's not in your repo
- Cloudflare builds it during CI, but needs the right command

---

## Recommendation

**Switch to Cloudflare Pages** - it's simpler, more reliable, and the modern Cloudflare approach. The `functions/` folder is already set up and ready to go.
