"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./VideoEmbed.module.css";

export function VideoEmbed({ videoId, title, caption }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        {videoId ? (
          isLoaded ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.iframe}
            />
          ) : (
            <div
              className={styles.thumbnailWrapper}
              onClick={() => setIsLoaded(true)}
              role="button"
              tabIndex={0}
              aria-label={`Play ${title || "video"}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsLoaded(true);
                }
              }}
            >
              <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title || "Video thumbnail"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.thumbnail}
                unoptimized
              />
              <button className={styles.playButton} aria-label="Play video">
                <svg viewBox="0 0 68 48" width="68" height="48">
                  <path
                    className={styles.playButtonBg}
                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                    fill="#FF0000"
                  ></path>
                  <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
              </button>
            </div>
          )
        ) : (
          /* PLACEHOLDER: Replace videoId prop with actual YouTube video ID */
          <div className={styles.placeholder}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <p>Video Coming Soon</p>
            <span className={styles.placeholderNote}>
              Replace with YouTube video ID
            </span>
          </div>
        )}
      </div>
      {(title || caption) && (
        <div className={styles.info}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {caption && <p className={styles.caption}>{caption}</p>}
        </div>
      )}
    </div>
  );
}
