# V Design Fountains and Waterfalls — Website

Premium showcase website built with **Next.js** (App Router) for V Design Fountains and Waterfalls.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

---

## 📋 Placeholder Content — Replace Before Launch

All placeholder content is marked with `/* PLACEHOLDER: ... */` comments in the code. Here's where to find each one:

### 1. Gallery Images
- **Location:** `public/images/gallery/` directory
- **Code references:** `app/page.js` (home gallery preview), `app/gallery/page.js` (full gallery)
- **Format:** Replace `.png` files with real photos. Update the `src`, `title`, `alt`, and `category` fields in the gallery data arrays.

### 2. YouTube Video Embed Links
- **Code references:** `app/page.js` (featured videos section), `app/videos/page.js` (all videos)
- **How:** Replace the empty `videoId: ""` values with actual YouTube video IDs (e.g., `"dQw4w9WgXcQ"`)
- Each video slot is marked with `/* PLACEHOLDER: Replace videoId with actual YouTube video ID */`

### 3. Brochure PDF
- **Location:** `public/assets/brochure.pdf`
- **Code reference:** `app/contact/page.js` (brochure download section)
- **How:** Replace the placeholder file with your actual company brochure PDF

### 4. Google Maps Embed
- **Code reference:** `app/contact/page.js` (map section)
- **How:** Uncomment the `<iframe>` and replace `[INSERT_GOOGLE_MAPS_EMBED_LINK]` with your Google Maps embed URL
- Delete or comment out the `<div className={styles.mapPlaceholder}>` block

### 5. Phone Number, Email, WhatsApp
- **Code references:** `app/contact/page.js`, `app/components/Footer.js`
- **Current placeholders:**
  - Phone: `+91 12345 67890`
  - Email: `info@vdesignfountains.com`
  - WhatsApp: `+91 12345 67890`
  - Address: `123 Waterfall Lane, Garden District`

### 6. Social Media Profile Links
- **Code references:** `app/components/Footer.js`, `app/contact/page.js`
- **How:** Replace `https://instagram.com`, `https://facebook.com`, `https://youtube.com`, `https://pinterest.com` with actual profile URLs

### 7. Testimonial Text & Names
- **Code reference:** `app/page.js` (testimonials section)
- **How:** Replace the placeholder quotes, names, and roles in the `testimonials` array

### 8. Team Member Details
- **Code reference:** `app/about/page.js` (team section)
- **How:** Replace names, roles, bios, and add actual photos (replace the initial-avatar with `<Image>` components)

### 9. Hero Image / Video
- **Location:** `public/images/hero/hero-fountain.png`
- **Code reference:** `app/page.js` (hero section)
- **How:** Replace with your best hero image or implement a looping video background

---

## Project Structure

```
app/
├── globals.css              # Design system (colors, typography, animations)
├── layout.js                # Root layout with Navbar + Footer
├── page.js                  # Home page
├── page.module.css          # Home page styles
├── about/                   # About Us page
├── gallery/                 # Gallery page (filterable + lightbox)
├── videos/                  # Videos page
├── contact/                 # Contact page (form + details)
└── components/              # Shared components
    ├── Navbar.js             # Sticky navigation
    ├── Footer.js             # 4-column footer
    ├── SectionHeading.js     # Consistent section headers
    ├── ScrollReveal.js       # Scroll-triggered animations
    ├── WaveDivider.js        # SVG wave section dividers
    ├── CTABanner.js          # Call-to-action banner
    ├── VideoEmbed.js         # YouTube embed component
    └── Lightbox.js           # Gallery lightbox modal
```

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Vanilla CSS Modules
- **Fonts:** Playfair Display (headings) + Inter (body) via Google Fonts
- **Images:** Next.js Image component with optimization
- **Animations:** CSS transitions + Intersection Observer

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#C1621D` | Headings, buttons, key accents |
| Secondary | `#E8A93A` | Highlights, hover, icons |
| Tertiary | `#F6E7C9` | Section backgrounds, cards |
| Background | `#FFFBF3` | Main background |
| Deep | `#3B2A1E` | Body text, footer |
| Sage | `#7A8B6F` | Greenery touches |
| Teal | `#5FA8A0` | Water accents (sparingly) |
