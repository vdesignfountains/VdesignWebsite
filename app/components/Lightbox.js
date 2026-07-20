"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./Lightbox.module.css";

export function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !images[currentIndex]) return null;

  const current = images[currentIndex];

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Image lightbox">
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close lightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Previous */}
        <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={onPrev} aria-label="Previous image">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Image */}
        <div className={styles.imageContainer}>
          <Image
            src={current.src}
            alt={current.alt || current.title || "Gallery image"}
            width={1200}
            height={800}
            className={styles.image}
            quality={90}
            priority
          />
          {current.title && (
            <div className={styles.caption}>
              <h3>{current.title}</h3>
              {current.category && <span>{current.category}</span>}
            </div>
          )}
        </div>

        {/* Next */}
        <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={onNext} aria-label="Next image">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Counter */}
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
