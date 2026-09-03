"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AdminGuard } from "@/app/components/AdminGuard";
import styles from "./page.module.css";

export default function AddPhotoPage() {
  return (
    <AdminGuard>
      <AddPhotoContent />
    </AdminGuard>
  );
}

function AddPhotoContent() {
  const [clientName, setClientName] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    // Validate type
    if (!["image/jpeg", "image/png", "image/webp"].includes(selected.type)) {
      setError("Only JPEG, PNG, and WebP images are allowed.");
      return;
    }

    // Validate size (10MB)
    if (selected.size > 10 * 1024 * 1024) {
      setError("Image must be smaller than 10MB.");
      return;
    }

    setFile(selected);
    setError("");
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      const fakeEvent = { target: { files: [dropped] } };
      handleFileChange(fakeEvent);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !clientName.trim()) {
      setError("Please select an image and enter the client name.");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("clientName", clientName.trim());

      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to upload photo.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  if (success) {
    return (
      <div className={styles.formPage}>
        <div className={styles.formCard}>
          <div className={styles.successWrap}>
            <span className={styles.successIcon}>✅</span>
            <h2 className={styles.successTitle}>Photo Published!</h2>
            <p className={styles.successMsg}>
              Your photo is now live on the gallery page.
            </p>
            <div className={styles.successActions}>
              <a href="/gallery" className={styles.viewBtn} target="_blank">
                View Gallery
              </a>
              <button
                onClick={() => {
                  setSuccess(false);
                  setFile(null);
                  setPreview(null);
                  setClientName("");
                }}
                className={styles.addAnotherBtn}
              >
                Add Another Photo
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
          <h1 className={styles.formTitle}>Add Photo</h1>
          <p className={styles.formDesc}>
            Upload a project photo. It will go live on the gallery immediately.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorMsg}>{error}</div>}

          {/* Image Upload */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Project Photo</label>
            <div
              className={`${styles.dropZone} ${preview ? styles.hasPreview : ""}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileRef.current?.click()}
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="Preview"
                  width={400}
                  height={300}
                  className={styles.previewImg}
                  unoptimized
                />
              ) : (
                <div className={styles.dropContent}>
                  <span className={styles.dropIcon}>📁</span>
                  <span className={styles.dropText}>
                    Click or drag an image here
                  </span>
                  <span className={styles.dropHint}>
                    JPEG, PNG, or WebP — max 10MB
                  </span>
                </div>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
            </div>
          </div>

          {/* Client Name */}
          <div className={styles.formGroup}>
            <label htmlFor="clientName" className={styles.label}>
              Client Name
            </label>
            <input
              id="clientName"
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className={styles.input}
              placeholder="e.g. Godrej Forest Estate — Nagpur"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={styles.publishBtn}
            disabled={uploading || !file || !clientName.trim()}
          >
            {uploading ? "Publishing..." : "Publish Photo"}
          </button>
        </form>
      </div>
    </div>
  );
}
