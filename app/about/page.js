import Image from "next/image";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";
import { WaveDivider } from "../components/WaveDivider";
import { CTABanner } from "../components/CTABanner";
import styles from "./page.module.css";

export const metadata = {
  title: "About Us — V Design Fountains and Waterfalls",
  description:
    "Learn about V Design's story, our craftsmanship philosophy, and the process behind creating premium fountains and waterfalls.",
};

/* Process steps */
const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We visit your space, listen to your vision, and discuss possibilities — understanding your aesthetic, budget, and timeline.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description: "Our designers create detailed concepts, 3D renders, and material selections tailored to your unique space.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fabrication",
    description: "Master craftsmen hand-select premium stone, marble, and metals to build each component with exacting standards.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Installation",
    description: "Our experienced team handles complete on-site installation, plumbing, lighting, and landscaping integration.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Maintenance",
    description: "We offer ongoing maintenance programs to keep your water feature pristine and performing beautifully for years.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];



export default function AboutPage() {
  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <section className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>About Us</span>
          </nav>
          <h1>Our Story</h1>
          <p className="page-hero__subtitle">
            Fifteen years of crafting living water — where artistry, nature, and
            engineering converge.
          </p>
        </div>
      </section>

      {/* ===================== OUR STORY ===================== */}
      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <ScrollReveal direction="left" className={styles.storyText}>
              <SectionHeading
                subtitle="Our Beginning"
                title="A Passion Born from Water & Stone"
                align="left"
              />
              <p>
                V Design Fountains is Central India's Trusted Fountainer that designs, manufactures, and conceptualizes ultra-modern, premium, luxurious fountains and waterfalls. With over 7 years of skillful experience, we have successfully completed multiple projects, earning the trust of countless satisfied customers.
              </p>
              <p>
                Our philosophy is simple — every space deserves the timeless beauty of flowing water. Whether it's a tranquil garden fountain that whispers peace, or a grand commercial waterfall that commands attention, we approach each project with dedication to craftsmanship, quality materials, and artistic excellence.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className={styles.storyImageWrap}>
              <Image
                src="/images/gallery/190696.jpg.jpeg"
                alt="V Design Fountain installation"
                width={560}
                height={400}
                className={styles.storyImage}
                quality={85}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== MISSION & VISION ===================== */}
      <WaveDivider color="var(--color-tertiary)" />
      <section className={`section section--cream ${styles.mission}`}>
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              subtitle="What Drives Us"
              title="Mission & Vision"
            />
          </ScrollReveal>
          <div className={styles.missionGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  In the world of fountains and waterfalls, V Design gives luxury at your leisure, building the oasis of a complete home. We are committed to delivering unmatched craftsmanship and exceeding our clients' expectations on every project.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  Fabricating every designed home's imagination into reality, creating a serene atmosphere with V Design's fountains and waterfalls. We strive to create features that blend seamlessly with their environment and stand the test of time.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <WaveDivider flip color="var(--color-tertiary)" />

      {/* ===================== OUR PROCESS ===================== */}
      <section className={`section ${styles.process}`}>
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              subtitle="How We Work"
              title="Our Process"
              description="From the first conversation to the final flowing water — a seamless journey guided by expertise and care."
            />
          </ScrollReveal>
          <div className={styles.timeline}>
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className={styles.timelineStep}>
                  <div className={styles.timelineNumber}>{step.number}</div>
                  <div className={styles.timelineIcon}>{step.icon}</div>
                  <h4 className={styles.timelineTitle}>{step.title}</h4>
                  <p className={styles.timelineDesc}>{step.description}</p>
                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>



      {/* ===================== CTA ===================== */}
      <CTABanner
        title="Let's Create Something Beautiful Together"
        subtitle="Whether you have a clear vision or need creative guidance, we're here to bring the beauty of flowing water into your world."
      />
    </>
  );
}
