import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";
import { VideoEmbed } from "../components/VideoEmbed";
import { CTABanner } from "../components/CTABanner";
import styles from "./page.module.css";

export const metadata = {
  title: "Videos — V Design Fountains and Waterfalls",
  description:
    "Watch our fountain and waterfall installations in action. See flowing water bring beauty and tranquility to homes, gardens, and commercial spaces.",
};

/* ============================================================
   Video data — PLACEHOLDER: Replace videoId with actual YouTube IDs
   ============================================================ */
const videos = [
  {
    videoId: "wWqQB-QHmRM",
    title: "V Design Fountains Showcase",
    caption: "Premium water feature design and manufacturing.",
  },
  {
    videoId: "oWDy4NkMCMI",
    title: "Luxurious Fountain Display",
    caption: "Bringing elegance and luxury to leisure spaces.",
  },
  {
    videoId: "8Fq6uLfRFYs",
    title: "Timeless Artistry",
    caption: "Transforming imagination into reality.",
  },
  {
    videoId: "FjnscyQ9Dzk",
    title: "Serene Waterfalls",
    caption: "Creating a serene atmosphere with flowing water.",
  },
  {
    videoId: "6X2h6UPIkD0",
    title: "Master Craftsmanship",
    caption: "Building the oasis of a complete home.",
  },
  {
    videoId: "wPY-1wdzw8U",
    title: "Beautiful Fountain Short",
    caption: "A quick glimpse of our custom water feature design.",
  },
  {
    videoId: "LSWD-PoUGyQ",
    title: "Custom Luxury Fountain",
    caption: "A showcase of custom luxury water fountain design.",
  },
];

export default function VideosPage() {
  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <section className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Videos</span>
          </nav>
          <h1>Video Showcase</h1>
          <p className="page-hero__subtitle">
            Watch our fountains and waterfalls in motion — flowing water brings
            a dimension that photographs simply can't capture.
          </p>
        </div>
      </section>

      {/* ===================== VIDEO GRID ===================== */}
      <section className={`section ${styles.videosSection}`}>
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Work in Motion"
              title="Featured Videos"
              description="Each video showcases the beauty and craftsmanship of our water features — from design concept to flowing reality."
            />
          </ScrollReveal>

          <div className={styles.videoGrid}>
            {videos.map((video, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                {/* YOUTUBE_EMBED: Replace videoId with actual YouTube video ID */}
                <VideoEmbed
                  videoId={video.videoId}
                  title={video.title}
                  caption={video.caption}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABanner
        title="Want to See Your Vision Come to Life?"
        subtitle="From concept to completion, we'll document the journey of creating your perfect water feature."
      />
    </>
  );
}
