"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";
import { Lightbox } from "../components/Lightbox";
import { CTABanner } from "../components/CTABanner";
import styles from "./page.module.css";

/* ============================================================
   Gallery data — PLACEHOLDER: Replace image paths with real photos
   ============================================================ */
const galleryImages = [
  { src: "/images/gallery/176595.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/189991.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/189997.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190127.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190469.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190473.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190476.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190481.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190483.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190515.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190520.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190527.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190536.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190588.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190609.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190615.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190628.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190634.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190636.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190644.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190657.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190664.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190672.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190676.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190680.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190683.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190690.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190694.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190696.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" },
  { src: "/images/gallery/190705.jpg.jpeg", title: "V Design Fountain", category: "Gallery", alt: "V Design Fountain Project" }
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

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

          {/* ===================== MASONRY GRID ===================== */}
          <div className={styles.masonryGrid}>
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 60}>
                <button
                  className={styles.masonryItem}
                  onClick={() => openLightbox(i)}
                  aria-label={`View ${img.title}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className={styles.masonryImage}
                    quality={80}
                    loading="lazy"
                  />
                  <div className={styles.masonryOverlay}>
                    <span className={styles.masonryCategory}>{img.category}</span>
                    <h3 className={styles.masonryTitle}>{img.title}</h3>
                    <svg
                      className={styles.masonryZoom}
                      width="24"
                      height="24"
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
              </ScrollReveal>
            ))}
          </div>
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
