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
  {
    src: "/images/gallery/architect-bhavin-pande.jpeg",
    title: "Architect Bhavin Pande",
    category: "Residential Project",
    alt: "Fountain installation - Architect Bhavin Pande"
  },
  {
    src: "/images/gallery/confidence-petroleum-go-gas-nagpur.jpeg",
    title: "Confidence Petroleum - Go Gas Nagpur",
    category: "Commercial Project",
    alt: "Fountain installation - Confidence Petroleum - Go Gas Nagpur"
  },
  {
    src: "/images/gallery/devprath-construction-mihan.jpeg",
    title: "Devprath Construction - Mihan",
    category: "Residential Project",
    alt: "Fountain installation - Devprath Construction - Mihan"
  },
  {
    src: "/images/gallery/dr-pradeep-makhijani.jpeg",
    title: "Dr. Pradeep Makhijani",
    category: "Residential Project",
    alt: "Fountain installation - Dr. Pradeep Makhijani"
  },
  {
    src: "/images/gallery/godrej-forest-estate-sumthana-nagpur.jpeg",
    title: "Godrej Forest Estate - Sumthana Nagpur",
    category: "Commercial Project",
    alt: "Fountain installation - Godrej Forest Estate - Sumthana Nagpur"
  },
  {
    src: "/images/gallery/jagdamb-farms.jpeg",
    title: "Jagdamb Farms",
    category: "Farmhouse Project",
    alt: "Fountain installation - Jagdamb Farms"
  },
  {
    src: "/images/gallery/mla-rajesh-bakane.jpeg",
    title: "MLA - Rajesh Bakane",
    category: "Residential Project",
    alt: "Fountain installation - MLA - Rajesh Bakane"
  },
  {
    src: "/images/gallery/midas-education-city-saunsar-m-p.jpeg",
    title: "Midas Education City - Saunsar M.P.",
    category: "Institutional Project",
    alt: "Fountain installation - Midas Education City - Saunsar M.P."
  },
  {
    src: "/images/gallery/mr-ajay-khamankar-partner-ucn.jpeg",
    title: "Mr. Ajay Khamankar - Partner UCN",
    category: "Residential Project",
    alt: "Fountain installation - Mr. Ajay Khamankar - Partner UCN"
  },
  {
    src: "/images/gallery/mr-bhoyar-bhadravati-chandrapur.jpeg",
    title: "Mr. Bhoyar - Bhadravati, Chandrapur",
    category: "Residential Project",
    alt: "Fountain installation - Mr. Bhoyar - Bhadravati, Chandrapur"
  },
  {
    src: "/images/gallery/mr-kamlesh-thaokar-tobacco.jpeg",
    title: "Mr. Kamlesh Thaokar - Tobacco",
    category: "Residential Project",
    alt: "Fountain installation - Mr. Kamlesh Thaokar - Tobacco"
  },
  {
    src: "/images/gallery/mr-pratik-jaiswal-24-carat.jpeg",
    title: "Mr. Pratik Jaiswal - 24 Carat",
    category: "Residential Project",
    alt: "Fountain installation - Mr. Pratik Jaiswal - 24 Carat"
  },
  {
    src: "/images/gallery/r-sandesh-group.jpeg",
    title: "R. Sandesh Group",
    category: "Commercial Project",
    alt: "Fountain installation - R. Sandesh Group"
  }
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

          {/* ===================== GALLERY GRID ===================== */}
          <div className={styles.galleryGrid}>
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 60}>
                <div className={styles.galleryCard}>
                  <button
                    className={styles.imageWrapper}
                    onClick={() => openLightbox(i)}
                    aria-label={`View ${img.title}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={450}
                      className={styles.galleryImage}
                      quality={85}
                      loading="lazy"
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
                    <span className={styles.projectCategory}>{img.category}</span>
                    <h3 className={styles.projectTitle}>{img.title}</h3>
                  </div>
                </div>
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
