import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./components/SectionHeading";
import { ScrollReveal } from "./components/ScrollReveal";
import { WaveDivider } from "./components/WaveDivider";
import { CTABanner } from "./components/CTABanner";
import styles from "./page.module.css";


/* Services */
const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="36" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 6C24 6 14 18 14 26C14 31.523 18.477 36 24 36C29.523 36 34 31.523 34 26C34 18 24 6 24 6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20 28C20 25 24 18 24 18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    title: "Garden Fountains",
    description: "Elegant multi-tiered and sculptural fountains that become the centerpiece of any garden or courtyard.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="4" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 12C14 12 24 8 34 12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M24 12V44" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
        <path d="M18 20L24 24L30 20" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M16 28L24 34L32 28" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    title: "Wall Waterfalls",
    description: "Stunning cascading water walls that transform vertical surfaces into living art pieces.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="32" rx="18" ry="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 18C16 18 20 10 24 10C28 10 32 18 32 18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 22C20 22 22 16 24 16C26 16 28 22 28 22" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M24 10V6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="5" r="1" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "Commercial Features",
    description: "Grand water displays for hotels, resorts, and corporate spaces that leave a lasting impression.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M8 40L16 28L22 34L32 18L40 28" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="34" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 42C24 42 16 36 16 32" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M4 42H44" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Custom Designs",
    description: "Bespoke water features crafted to your exact vision, from concept sketches to stunning reality.",
  },
];

/* Trust points */
const trustPoints = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: "7+",
    label: "Years of Experience",
  },

  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    value: "100%",
    label: "Premium Materials",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    value: "End-to-End",
    label: "Design to Installation",
  },
];

/* PLACEHOLDER: Replace testimonial text/names with real client testimonials */
const testimonials = [
  {
    quote: "V Design transformed our backyard into a tropical paradise. The three-tiered fountain they built is absolutely breathtaking — every guest who visits can't stop admiring it.",
    name: "Rajesh Sharma",
    role: "Homeowner, Jaipur",
  },
  {
    quote: "We hired V Design for our resort's entrance water feature and the result exceeded all expectations. Their craftsmanship and attention to detail is world-class.",
    name: "Priya Mehta",
    role: "Resort Manager, Udaipur",
  },
  {
    quote: "From the initial design consultation to the final installation, the V Design team was professional, creative, and truly passionate about their work. Highly recommend!",
    name: "Arjun Patel",
    role: "Architect, Mumbai",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={styles.hero} id="hero">
        {/* Premium Abstract Water Graphic */}
        <div className={styles.premiumWaterGraphic} aria-hidden="true">
          <svg className={styles.waterWaves} viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-teal)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.12" />
                <stop offset="100%" stopColor="var(--color-teal)" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="dropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            <g className={styles.waveGroup}>
              {/* Deepest wave layer */}
              <path className={styles.waveLayer1} d="M0,800 C300,700 600,450 1440,350 L1440,800 L0,800 Z" fill="url(#waveGrad1)" />
              
              {/* Middle wave layer */}
              <path className={styles.waveLayer2} d="M0,800 C400,780 800,600 1440,450 L1440,800 L0,800 Z" fill="url(#waveGrad2)" />
              
              {/* Elegant sweeping lines */}
              <path className={styles.waveLine1} d="M-100,750 C400,650 700,350 1540,250" stroke="var(--color-teal)" strokeWidth="2" strokeOpacity="0.3" fill="none" />
              <path className={styles.waveLine2} d="M-100,700 C450,600 750,300 1540,200" stroke="var(--color-secondary)" strokeWidth="1" strokeOpacity="0.5" fill="none" />
              <path className={styles.waveLine3} d="M-100,650 C500,550 800,250 1540,150" stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.3" fill="none" />
            </g>

          </svg>
        </div>


        <div className={`container ${styles.heroContent}`}>
          <ScrollReveal>
            <span className={styles.heroTaglineSmall}>Welcome to</span>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h1 className={styles.heroTitle}>
              V Design <br />
              <span className={styles.heroTitleAccent}>Fountains & Waterfalls</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className={styles.heroSubtitle}>
              Crafting Living Water, Designing Timeless Elegance
            </p>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <div className={styles.heroActions}>
              <Link href="/gallery" className="btn btn--gold btn--lg">
                View Our Work
              </Link>
              <Link href="/contact" className="btn btn--secondary btn--lg">
                Free Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true">
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </section>

      {/* ===================== INTRO / ABOUT TEASER ===================== */}
      <section className={`section ${styles.intro}`} id="intro">
        <div className="container">
          <div className={styles.introGrid}>
            <ScrollReveal direction="left" className={styles.introText}>
              <span className={styles.introLabel}>About V Design</span>
              <h2 className={styles.introTitle}>
                Where Artistry Meets <em>Flowing Water</em>
              </h2>
              <p>
                V Design Fountains is Central India's Trusted Fountainer that designs, manufactures, and conceptualizes ultra-modern, premium, luxurious fountains and waterfalls. With 7 years of skillful experience, we don't just build water features — we craft living sculptures that bring the tranquil beauty of flowing water into homes, gardens, resorts, and commercial spaces.
              </p>
              <p>
                Every project begins with understanding your space, your vision,
                and the unique atmosphere you wish to create. We bring together
                master craftsmanship and premium materials to deliver features
                that endure for generations.
              </p>
              <Link href="/about" className={styles.introLink}>
                Learn More About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right" className={styles.introImageWrap}>
              <div className={styles.introImageFrame}>
                <Image
                  src="/images/intro-waterfall.jpeg"
                  alt="V Design custom black stone tiered waterfall"
                  width={560}
                  height={800}
                  className={styles.introImage}
                  quality={85}
                />
              </div>
              <div className={styles.introImageAccent} aria-hidden="true" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <WaveDivider color="var(--color-tertiary)" />
      <section className={`section section--cream ${styles.services}`} id="services">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              subtitle="What We Create"
              title="Our Services"
              description="From intimate garden fountains to grand commercial water displays, we bring your vision to life with master craftsmanship."
            />
          </ScrollReveal>
          <div className={`${styles.servicesGrid} reveal-stagger`}>
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider flip color="var(--color-tertiary)" />


      {/* ===================== WHY CHOOSE US ===================== */}
      <section className={`section ${styles.trust}`} id="why-choose-us">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              subtitle="Why V Design"
              title="Trusted Craftsmanship"
              description="Our commitment to excellence has made us the preferred choice for premium water features."
            />
          </ScrollReveal>
          <div className={styles.trustGrid}>
            {trustPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={styles.trustCard}>
                  <div className={styles.trustIcon}>{point.icon}</div>
                  <span className={styles.trustValue}>{point.value}</span>
                  <span className={styles.trustLabel}>{point.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <WaveDivider color="var(--color-tertiary)" />
      <section className={`section section--cream ${styles.testimonials}`} id="testimonials">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              subtitle="Client Stories"
              title="What Our Clients Say"
            />
          </ScrollReveal>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className={styles.testimonialCard}>
                  <svg
                    className={styles.quoteIcon}
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3 21V13H7C7 10.79 5.21 9 3 9V7C6.31 7 9 9.69 9 13V21H3ZM15 21V13H19C19 10.79 17.21 9 15 9V7C18.31 7 21 9.69 21 13V21H15Z" />
                  </svg>
                  <blockquote className={styles.testimonialQuote}>
                    {t.quote}
                  </blockquote>
                  <div className={styles.testimonialAuthor}>
                    <span className={styles.testimonialName}>{t.name}</span>
                    <span className={styles.testimonialRole}>{t.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider flip color="var(--color-tertiary)" />

      {/* ===================== CTA BANNER ===================== */}
      <CTABanner />
    </>
  );
}
