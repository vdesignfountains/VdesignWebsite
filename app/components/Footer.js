import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      {/* Decorative wave top */}
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60 Z"
            fill="var(--color-deep)"
          />
        </svg>
      </div>

      <div className={styles.footerInner}>
        <div className={`container ${styles.footerGrid}`}>
          {/* Column 1: About */}
          <div className={styles.column}>
            <div className={styles.footerLogo}>
              <Image src="/images/logo.png" alt="V Design Logo" width={80} height={80} className={styles.footerLogoImage} />
              <div className={styles.footerLogoTextContainer}>
                <span className={styles.footerLogoName}>V Design</span>
                <span className={styles.footerLogoTagline}>Fountains & Waterfalls</span>
              </div>
            </div>
            <p className={styles.footerAbout}>
              V Design Fountains is Central India's Trusted Fountainer that design, manufacture, and conceptualize ultra-modern, premium, luxurious fountains and waterfalls.
            </p>
            <div className={styles.socialIcons}>
              <a
                href="https://instagram.com/vdesignfountains?utm_source=qr&igsh=MTJ4bzJsZ3FlMGoweg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialIcon}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1cdVV1ojPU/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialIcon}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919699879916"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={styles.socialIcon}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Explore</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/gallery">Our Gallery</Link></li>
              <li><Link href="/videos">Video Showcase</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>



          {/* Column 4: Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Get In Touch</h4>
            <ul className={styles.contactList}>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919699879916">+91 96998 79916</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="mailto:vdesignfountains@gmail.com">vdesignfountains@gmail.com</a>
                  <a href="mailto:khobragadealok@gmail.com">khobragadealok@gmail.com</a>
                </div>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>33, Shivraj Nagar, Nagpur 440027</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className="container">
            <div className={styles.bottomInner}>
              <p className={styles.copyright}>
                © {new Date().getFullYear()} V Design Fountains and Waterfalls.
                All rights reserved.
              </p>
              <p className={styles.credit}>
                Crafted with passion for flowing water
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative leaf silhouette */}
      <div className={styles.leafAccent} aria-hidden="true">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none" opacity="0.04">
          <path
            d="M60 0C60 0 120 80 120 140C120 173.137 93.137 200 60 200C26.863 200 0 173.137 0 140C0 80 60 0 60 0Z"
            fill="var(--color-sage)"
          />
          <path
            d="M60 40C60 40 20 120 60 180"
            stroke="var(--color-sage)"
            strokeWidth="1"
          />
          <path d="M60 60L35 100" stroke="var(--color-sage)" strokeWidth="0.5" />
          <path d="M60 80L80 115" stroke="var(--color-sage)" strokeWidth="0.5" />
          <path d="M60 100L40 130" stroke="var(--color-sage)" strokeWidth="0.5" />
        </svg>
      </div>
    </footer>
  );
}
