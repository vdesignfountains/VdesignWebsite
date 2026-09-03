"use client";

import { useState } from "react";
import Link from "next/link";
import { AdminGuard } from "@/app/components/AdminGuard";
import styles from "./page.module.css";

export default function AddVideoPage() {
  return (
    <AdminGuard>
      <AddVideoContent />
    </AdminGuard>
  );
}

function AddVideoContent() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [title, setTitle] = useState("");
  const [publishing, setPublishing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Extract video ID for live preview
  const extractVideoId = (url) => {
    if (!url) return null;
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
      /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = extractVideoId(youtubeUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!youtubeUrl.trim() || !title.trim()) {
      setError("Please enter both a YouTube URL and title.");
      return;
    }
    if (!videoId) {
      setError("Invalid YouTube URL. Please enter a valid link.");
      return;
    }

    setPublishing(true);
    setError("");

    try {
      const res = await fetch("/api/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ youtubeUrl: youtubeUrl.trim(), title: title.trim() }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to publish video.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setPublishing(false);
    }
  };

  if (success) {
    return (
      <div className={styles.formPage}>
        <div className={styles.formCard}>
          <div className={styles.successWrap}>
            <span className={styles.successIcon}>✅</span>
            <h2 className={styles.successTitle}>Video Published!</h2>
            <p className={styles.successMsg}>
              Your video is now live on the Videos page.
            </p>
            <div className={styles.successActions}>
              <a href="/videos" className={styles.viewBtn} target="_blank">
                View Videos
              </a>
              <button
                onClick={() => {
                  setSuccess(false);
                  setYoutubeUrl("");
                  setTitle("");
                }}
                className={styles.addAnotherBtn}
              >
                Add Another Video
              </button>
              <Link href="/admin/dashboard" className={styles.backBtn}>
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formPage}>
      <div className={styles.formCard}>
        <div className={styles.formHeader}>
          <Link href="/admin/dashboard" className={styles.backArrow}>
            ← Dashboard
          </Link>
          <h1 className={styles.formTitle}>Add Video</h1>
          <p className={styles.formDesc}>
            Paste a YouTube link and it will go live on the Videos page immediately.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorMsg}>{error}</div>}

          {/* YouTube URL */}
          <div className={styles.formGroup}>
            <label htmlFor="youtubeUrl" className={styles.label}>
              YouTube URL
            </label>
            <input
              id="youtubeUrl"
              type="url"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className={styles.input}
              placeholder="https://youtube.com/watch?v=... or shorts link"
              required
            />
          </div>

          {/* Live Preview */}
          {videoId && (
            <div className={styles.previewWrap}>
              <label className={styles.label}>Preview</label>
              <div className={styles.videoPreview}>
                <img
                  src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                  alt="Video thumbnail"
                  className={styles.thumbImg}
                />
                <span className={styles.playBadge}>▶</span>
              </div>
            </div>
          )}

          {/* Video Title */}
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>
              Video Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              placeholder="e.g. Premium Fountain Installation"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={styles.publishBtn}
            disabled={publishing || !youtubeUrl.trim() || !title.trim()}
          >
            {publishing ? "Publishing..." : "Publish Video"}
          </button>
        </form>
      </div>
    </div>
  );
}
