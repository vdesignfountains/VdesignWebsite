"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";
import { Lightbox } from "../components/Lightbox";
import { CTABanner } from "../components/CTABanner";
import styles from "./page.module.css";

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => setGalleryImages(Array.isArray(data) ? data : []))
      .catch(() => setGalleryImages([]))
      .finally(() => setLoading(false));
  }, []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(-1);
  const prevImage = () =>
    setLightboxIndex((i) => (i > 0 ? i - 1 : galleryImages.length - 1));
  const nextImage = () =>
    setLightboxIndex((i) => (i < galleryImages.length - 1 ? i + 1 : 0));

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <section className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Gallery</span>
          </nav>
          <h1>Our Gallery</h1>
          <p className="page-hero__subtitle">
            Explore our portfolio of fountains, waterfalls, and water features —
            each one a testament to our dedication to craft and beauty.
          </p>
        </div>
      </section>

      <section className={`section ${styles.gallerySection}`}>
        <div className="container">

          {/* ===================== GALLERY GRID ===================== */}
          {loading ? (
            <p style={{ textAlign: "center", color: "rgba(232,223,214,0.4)", padding: "3rem 0" }}>
              Loading gallery...
            </p>
          ) : galleryImages.length === 0 ? (
            <p style={{ textAlign: "center", color: "rgba(232,223,214,0.4)", padding: "3rem 0" }}>
              Gallery coming soon — check back for our latest projects!
            </p>
          ) : (
            <div className={styles.galleryGrid}>
              {galleryImages.map((img, i) => (
                <ScrollReveal key={img.id || img.src} delay={i * 60}>
                  <div className={styles.galleryCard}>
                    <button
                      className={styles.imageWrapper}
                      onClick={() => openLightbox(i)}
                      aria-label={`View ${img.title}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt || img.title}
                        width={600}
                        height={450}
                        className={styles.galleryImage}
                        quality={85}
                        loading="lazy"
                        unoptimized
                      />
                      <div className={styles.zoomIcon} aria-hidden="true">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </button>
                    <div className={styles.cardContent}>
                      <h3 className={styles.projectTitle}>{img.title}</h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

      {/* ===================== CTA ===================== */}
      <CTABanner
        title="Love What You See?"
        subtitle="Let us create a custom water feature that's uniquely yours. Reach out for a free design consultation."
      />
    </>
  );
}
