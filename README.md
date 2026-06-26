# AI Character Consistency Masterkit (2026 Edition)

A dark-elegance landing page (React + Vite + Tailwind + TypeScript) for selling the AI
Character Consistency Masterkit, plus the digital assets that make up the product itself.

## What's in this package

` ` `
.
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── index.html
├── src/
│   ├── index.css
│   ├── main.tsx
│   ├── App.tsx
│   └── Home.tsx
├── README.md
├── 30_day_social_media_calendar.md
└── Identity_Tracker_Template.csv
` ` `

- **The web app** (`package.json` through `src/Home.tsx`) is the sales page itself.
- **The content files** (`30_day_social_media_calendar.md`, `Identity_Tracker_Template.csv`)
  are part of the digital product you're delivering to customers — bundle them into the
  download customers receive after purchase.
- `postcss.config.js` and the three `tsconfig*.json` files aren't part of TypeScript/Tailwind
  by accident — they're required for `npm run build` to actually run. This package has
  been built and run end-to-end to confirm it compiles with zero errors.

## Before you publish

A few placeholders need real values — search the code for these and replace them:

| Placeholder | Where | Replace with |
|---|---|---|
| `your-domain.com` | `index.html` | Your real domain |
| `/og-image.jpg` | `index.html` | A real 1200×630 social preview image |
| `/assets/identity-tracker-preview.jpg` | `src/Home.tsx` | A real screenshot of your tracker |
| `/assets/testimonial-*.jpg` | `src/Home.tsx` | Real customer avatars (or remove the images) |
| Testimonial names/quotes | `src/Home.tsx` | Real customer feedback |
| `href="#"` on the **Buy now** button | `src/Home.tsx` | Your checkout URL (Stripe Payment Link, Gumroad, Lemon Squeezy, etc.) |
| Refund policy FAQ answer | `src/Home.tsx` | Your actual refund/guarantee terms |
| `support@your-domain.com` | `src/Home.tsx` footer | Your real support email |

## Local development

Requires [Node.js](https://nodejs.org) 18 or later.

` ` `bash
npm install
npm run dev
` ` `

This starts a local dev server (default `http://localhost:5173`) with hot reload.

## Building for production

` ` `bash
npm run build
` ` `

This type-checks the project and outputs a production build to `dist/`. Preview it locally with:

` ` `bash
npm run preview
` ` `

## Deployment

### Option A: Vercel
1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — leave the default build command (`npm run build`) and
   output directory (`dist`).
4. Deploy. Add your custom domain under **Project → Settings → Domains**.

### Option B: Netlify
1. Push this folder to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Deploy.

### Option C: Static hosting (Cloudflare Pages, GitHub Pages, S3, etc.)
1. Run `npm run build` locally.
2. Upload the contents of the generated `dist/` folder to your static host of choice.

## Connecting payment

The "Buy now — $49" button in `src/Home.tsx` is a plain anchor tag (`href="#"`) by design —
this template doesn't wire up a payment backend, since that requires your own account
credentials. To go live, point the `href` at:

- A **Stripe Payment Link**, or
- A **Gumroad** / **Lemon Squeezy** product checkout URL, or
- Your own checkout flow if you're handling payments yourself.

## Need help?

If you run into an issue setting this up, contact us:

- **Email:** support@your-domain.com
- **Response time:** within 1–2 business days

Please include your Node.js version (`node -v`) and a description of what you were trying
to do when reporting a bug.
