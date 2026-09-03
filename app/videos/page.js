"use client";

import { useState, useEffect } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";
import { VideoEmbed } from "../components/VideoEmbed";
import { CTABanner } from "../components/CTABanner";
import styles from "./page.module.css";

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(Array.isArray(data) ? data : []))
      .catch(() => setVideos([]))
      .finally(() => setLoading(false));
  }, []);

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

          {loading ? (
            <p style={{ textAlign: "center", color: "rgba(232,223,214,0.4)", padding: "3rem 0" }}>
              Loading videos...
            </p>
          ) : videos.length === 0 ? (
            <p style={{ textAlign: "center", color: "rgba(232,223,214,0.4)", padding: "3rem 0" }}>
              Videos coming soon — check back for our latest showcases!
            </p>
          ) : (
            <div className={styles.videoGrid}>
              {videos.map((video, i) => (
                <ScrollReveal key={video.id || video.videoId} delay={i * 100}>
                  <VideoEmbed
                    videoId={video.videoId}
                    title={video.title}
                    caption={video.caption}
                  />
                </ScrollReveal>
              ))}
            </div>
          )}
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
