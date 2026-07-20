import Link from "next/link";
import { ScrollReveal } from "../components/ScrollReveal";
import { CTABanner } from "../components/CTABanner";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact — V Design Fountains and Waterfalls",
  description:
    "Get in touch with V Design for a free consultation. Find our location, phone, email, WhatsApp, and download our brochure.",
};

export default function ContactPage() {
  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <section className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1>Get In Touch</h1>
          <p className="page-hero__subtitle">
            Have a project in mind? We'd love to hear about it. Reach out for a
            free consultation and let's create something beautiful together.
          </p>
        </div>
      </section>

      {/* ===================== CONTACT CONTENT ===================== */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* --- Contact Info Cards --- */}
            <ScrollReveal direction="left">
              <div className={styles.infoCardLarge}>
                <h2 className={styles.mainTitle}>Contact Information</h2>
                <p className={styles.mainSubtitle}>
                  Whether you're dreaming of a tranquil garden fountain or a
                  grand commercial water display, we're here to help bring your
                  vision to life. Reach out through any of the channels below.
                </p>

                <div className={styles.contactCards}>
                  {/* Phone */}
                  <div className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.contactItemLabel}>Phone</h3>
                      <a href="tel:+919699879916" className={styles.contactItemValue}>
                        +91 96998 79916
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.contactItemLabel}>Email</h3>
                      <a href="mailto:vdesignfountains@gmail.com" className={styles.contactItemValue}>
                        vdesignfountains@gmail.com
                      </a>
                      <a href="mailto:khobragadealok@gmail.com" className={styles.contactItemValue} style={{ display: 'block', marginTop: '4px' }}>
                        khobragadealok@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.contactItemLabel}>WhatsApp</h3>
                      <a href="https://wa.me/919699879916" target="_blank" rel="noopener noreferrer" className={styles.contactItemValue}>
                        +91 96998 79916
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.contactItemLabel}>Business Hours</h3>
                      <span className={styles.contactItemValue}>
                        Mon – Sat: 10:00 AM – 6:00 PM
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.contactItemLabel}>Visit Us</h3>
                      <span className={styles.contactItemValue}>
                        33, Shivraj Nagar, Nagpur 440027
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* --- Sidebar: Social + Brochure --- */}
            <ScrollReveal direction="right">
              <div className={styles.sidebar}>
                {/* Social Media */}
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>Follow Us</h3>
                  <div className={styles.socialGrid}>
                    <a href="https://instagram.com/vdesignfountains?utm_source=qr&igsh=MTJ4bzJsZ3FlMGoweg%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram
                    </a>
                    <a href="https://www.facebook.com/share/1cdVV1ojPU/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook
                    </a>
                    <a href="https://wa.me/919699879916" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Brochure Download */}
                <div className={`${styles.infoCard} ${styles.brochureCard}`}>
                  <div className={styles.brochureIcon}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <polyline points="9 15 12 18 15 15" />
                    </svg>
                  </div>
                  <h3 className={styles.infoTitle}>Our Brochure</h3>
                  <p className={styles.brochureText}>
                    Download our complete catalog with portfolio, services, and
                    pricing overview.
                  </p>
                  {/* PLACEHOLDER: Replace href with actual brochure PDF path */}
                  <a href="/assets/brochure.pdf" download className="btn btn--gold btn--sm">
                    Download Brochure
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== MAP SECTION ===================== */}
      <section className={styles.mapSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.mapTitle}>Visit Our Studio</h2>
            <p className={styles.mapAddress}>
              33, Shivraj Nagar, Nagpur 440027
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className={styles.mapContainer}>
            <iframe
              src="https://maps.google.com/maps?q=21.1203642,79.0999639&z=17&hl=en&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="V Design studio location"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="From concept to completion, we'll craft the perfect water feature for your space. Get in touch today."
      />
    </>
  );
}
