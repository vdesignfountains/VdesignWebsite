# V Design Fountains & Waterfalls — Official Website

Official showcase website and content management portal for **V Design Fountains & Waterfalls** (Central India's Trusted Fountainer).

Built with **Next.js (App Router)**, **Vanilla CSS Modules**, and **Vercel Blob Storage**.

---

## Table of Contents

- [Overview & Tech Stack](#overview--tech-stack)
- [Getting Started](#getting-started)
- [Admin Portal](#admin-portal)
- [Security & Credentials](#security--credentials)
- [Data Storage & Media Architecture](#data-storage--media-architecture)
- [Environment Variables](#environment-variables)
- [Project Directory Structure](#project-directory-structure)
- [Deployment Guide](#deployment-guide)
- [Brand Tokens](#brand-tokens)

---

## Overview & Tech Stack

- **Framework:** Next.js 16 (App Router, Server-Side Rendering & API Routes)
- **UI & Logic:** React 19, Vanilla CSS Modules (No Tailwind)
- **Media Storage:** Vercel Blob (Production) / Local Filesystem (Development)
- **Image Optimization:** Next.js Image Optimization (`next/image`) with WebP/AVIF auto-conversion
- **Authentication:** Custom cryptographic HMAC-SHA256 session tokens with secure HTTP-only cookies
- **Fonts:** Playfair Display (Headings) + Inter (Body) via Google Fonts
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm or yarn

### Installation & Local Run

```bash
# 1. Clone repository
git clone https://github.com/vdesignfountains/VdesignWebsite.git
cd VdesignWebsite

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Admin Portal

The site includes a secure, lightweight Admin Portal allowing non-technical administrators to publish new project photos and YouTube videos directly to the website without touching code.

- **Admin Login Route:** `/admin/login` (also accessible via the **Admin Login** link in the footer)
- **Dashboard Route:** `/admin/dashboard`
- **Add Photo Route:** `/admin/add-photo` (Upload project image + client name → instantly goes live on `/gallery`)
- **Add Video Route:** `/admin/add-video` (Paste YouTube video or Shorts link + title → instantly embeds on `/videos`)
- **Delete Content:** Photos and videos can be removed with one click directly from `/admin/dashboard`.

Protected admin routes use an authentication guard (`app/components/AdminGuard.js`) that verifies signed HTTP-only cookies on every request.

---

## Security & Credentials

### Are the credentials safe?

1. **Server-Side Only Execution:**
   Authentication logic resides exclusively in `lib/auth.js` and Next.js server-side API routes (`app/api/auth/*`). This code is executed only on the Node.js/Vercel server and is **never bundled or exposed to client browsers**.

2. **Timing-Safe Comparison:**
   Password verification uses `crypto.timingSafeEqual` with SHA-256 hashes to prevent timing attacks.

3. **HTTP-Only Session Cookies:**
   Tokens are stored in cookies flagged with:
   - `HttpOnly: true` (prevents JavaScript / XSS access)
   - `Secure: true` (enforces HTTPS in production)
   - `SameSite: Lax` (protects against CSRF attacks)

4. **Configurable via Environment Variables:**
   To change credentials without modifying source code, add the following variables in your `.env.local` or **Vercel Project Settings > Environment Variables**:

   ```env
   ADMIN_USERNAME=your_username
   ADMIN_PASSWORD=your_secure_password
   ADMIN_SECRET=your_random_64_char_secret_key
   ```

   *Default fallback credentials if env vars are omitted:*
   - Username: `vidifalak`
   - Password: `20132016`

---

## Data Storage & Media Architecture

The site uses a unified storage abstraction layer located in [`lib/data.js`](lib/data.js):

- **Local Development (`npm run dev`):**
  - Metadata is stored in `data/gallery.json` and `data/videos.json`.
  - Uploaded images are stored in `public/uploads/`.
  
- **Production (Vercel):**
  - Uses **Vercel Blob Storage** for uploaded images and metadata persistence across serverless executions.
  - Automatically activates when `BLOB_READ_WRITE_TOKEN` or `BLOB_STORE_ID` is present.
  - Falls back to bundled seed JSON files if the blob store is uninitialized.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `BLOB_READ_WRITE_TOKEN` | Recommended (Prod) | Vercel Blob read-write access token (auto-configured by Vercel when connecting a Blob store) |
| `BLOB_STORE_ID` | Optional (Prod) | Vercel Blob store identifier (for OIDC auth) |
| `ADMIN_USERNAME` | Optional | Custom admin login username (default: `vidifalak`) |
| `ADMIN_PASSWORD` | Optional | Custom admin login password (default: `20132016`) |
| `ADMIN_SECRET` | Optional | Custom secret key for HMAC session cookie signing |

---

## Project Directory Structure

```
VdesignWebsite/
├── app/
│   ├── about/                   # About Us page (mission, history, team)
│   ├── admin/                   # Admin Portal
│   │   ├── add-photo/           # Photo upload form
│   │   ├── add-video/           # Video link form
│   │   ├── dashboard/           # Admin dashboard with delete controls
│   │   └── login/               # Secure admin login
│   ├── api/                     # Serverless API routes
│   │   ├── auth/                # login, logout, check
│   │   ├── gallery/             # GET, POST, DELETE gallery items
│   │   └── videos/              # GET, POST, DELETE video items
│   ├── components/              # Reusable UI components
│   │   ├── AdminGuard.js        # Route protection wrapper
│   │   ├── CTABanner.js         # Call-to-action banner
│   │   ├── Footer.js            # Site footer
│   │   ├── Lightbox.js          # Photo gallery lightbox
│   │   ├── Navbar.js            # Sticky responsive navigation
│   │   ├── ScrollReveal.js      # Intersection Observer animations
│   │   └── VideoEmbed.js        # YouTube responsive player
│   ├── contact/                 # Contact page & inquiry form
│   ├── gallery/                 # Public gallery with dynamic fetching
│   ├── videos/                  # Public video showcase
│   ├── globals.css              # Global styles, variables, typography
│   ├── layout.js                # Root layout with SEO & favicon links
│   └── page.js                  # Home page
├── data/
│   ├── gallery.json             # Seed photo gallery metadata
│   └── videos.json              # Seed YouTube video metadata
├── lib/
│   ├── auth.js                  # Authentication & session utilities
│   └── data.js                  # Unified storage abstraction (Blob / Local)
├── public/
│   ├── assets/brochure.pdf      # Downloadable company brochure
│   ├── images/                  # Static brand assets, logos, site photos
│   └── uploads/                 # Gallery image uploads
├── next.config.mjs              # Next.js configuration & image domains
└── package.json                 # Project dependencies
```

---

## Deployment Guide

### Deploying to Vercel

1. Push your changes to the `main` branch of GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
2. Vercel will automatically detect the push, run `npm run build`, and deploy the site.

### Setting Up Blob Storage on Vercel (For Admin Uploads)

1. In your **[Vercel Dashboard](https://vercel.com)**, open the `vdesign-website` project.
2. Navigate to **Storage** → Click **Create Database** → Select **Blob**.
3. Choose **Public** access (required for web images).
4. Connect it to your project. Vercel will automatically link `BLOB_STORE_ID` / `BLOB_READ_WRITE_TOKEN`.
5. Redeploy the project once to activate.

---

## Brand Tokens

Defined in [`app/globals.css`](app/globals.css):

| Token | Value | Description |
|---|---|---|
| `--color-primary` | `#C1621D` | Deep Amber / Burnt Orange |
| `--color-primary-dark` | `#A24E14` | Darker Amber (hover states) |
| `--color-secondary` | `#E8A93A` | Warm Marigold / Gold |
| `--color-secondary-light`| `#F0C56A`| Soft Gold highlight |
| `--color-deep` | `#3B2A1E` | Espresso Brown (dark backgrounds, text) |
| `--color-background` | `#FFFBF3` | Ivory White (main page background) |
| `--color-teal` | `#5FA8A0` | Soft Teal Water Accent |
| `--font-heading` | `'Playfair Display', serif` | Main headings |
| `--font-body` | `'Inter', sans-serif` | Body copy |

---

## Business Contact Info

- **Company:** V Design Fountains and Waterfalls
- **Address:** 33, Shivraj Nagar, Nagpur 440027, Maharashtra, India
- **Phone:** +91 96998 79916
- **Email:** vdesignfountains@gmail.com / khobragadealok@gmail.com
- **Website:** [https://vdesignfountains.com](https://vdesignfountains.com)
