"use client";

import { useState, useRef } from "react";
import Link from "next/link";
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

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    // Validate type
    const ext = selected.name?.toLowerCase().split(".").pop() || "";
    const isImage =
      selected.type.startsWith("image/") ||
      ["jpg", "jpeg", "png", "webp", "heic", "heif", "avif"].includes(ext);

    if (!isImage) {
      setError("Please select a valid image file (JPEG, PNG, WebP).");
      return;
    }

    // Validate size (15MB)
    if (selected.size > 15 * 1024 * 1024) {
      setError("Image must be smaller than 15MB.");
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
    if (!file) {
      setError("Please select a project photo to upload.");
      return;
    }
    if (!clientName.trim()) {
      setError("Please enter the client / project name.");
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

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
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
              <a href="/gallery" className={styles.viewBtn} target="_blank" rel="noopener noreferrer">
                View Gallery
              </a>
              <button
                onClick={() => {
                  setSuccess(false);
                  setFile(null);
                  setPreview(null);
                  setClientName("");
                  if (fileRef.current) fileRef.current.value = "";
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
            <label className={styles.label} htmlFor="photoFileInput">
              Project Photo {file && <span className={styles.selectedBadge}>✓ Photo Selected</span>}
            </label>
            <div
              className={`${styles.dropZone} ${preview ? styles.hasPreview : ""}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <input
                id="photoFileInput"
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
              {preview ? (
                <div className={styles.previewContainer}>
                  <img
                    src={preview}
                    alt="Preview"
                    className={styles.previewImg}
                  />
                  <div className={styles.previewFooter}>
                    <span className={styles.fileName}>{file?.name}</span>
                    <span className={styles.changeBadge}>Click to replace</span>
                  </div>
                </div>
              ) : (
                <div className={styles.dropContent}>
                  <span className={styles.dropIcon}>📁</span>
                  <span className={styles.dropText}>
                    Click or drag an image here
                  </span>
                  <span className={styles.browseButton}>
                    Choose File from Device
                  </span>
                  <span className={styles.dropHint}>
                    JPEG, PNG, or WebP — max 15MB
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Client Name */}
          <div className={styles.formGroup}>
            <label htmlFor="clientName" className={styles.label}>
              Client / Project Name
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
            disabled={uploading}
          >
            {uploading ? "Publishing..." : "Publish Photo"}
          </button>
          {(!file || !clientName.trim()) && (
            <p className={styles.requiredHint}>
              * Select a photo and enter a project name to publish
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
