"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AdminGuard } from "@/app/components/AdminGuard";
import styles from "./page.module.css";

export default function DashboardPage() {
  return (
    <AdminGuard>
      <DashboardContent />
    </AdminGuard>
  );
}

function DashboardContent() {
  const [gallery, setGallery] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const router = useRouter();

  const fetchGallery = useCallback(async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setGallery(data);
    } catch { /* ignore */ }
    setLoadingGallery(false);
  }, []);

  const fetchVideos = useCallback(async () => {
    try {
      const res = await fetch("/api/videos");
      const data = await res.json();
      setVideos(data);
    } catch { /* ignore */ }
    setLoadingVideos(false);
  }, []);

  useEffect(() => {
    fetchGallery();
    fetchVideos();
  }, [fetchGallery, fetchVideos]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const handleDeleteGallery = async (id) => {
    if (!confirm("Delete this photo? This cannot be undone.")) return;
    setDeleting(id);
    try {
      await fetch(`/api/gallery/${id}`, { method: "DELETE" });
      setGallery((prev) => prev.filter((item) => item.id !== id));
    } catch { /* ignore */ }
    setDeleting(null);
  };

  const handleDeleteVideo = async (id) => {
    if (!confirm("Delete this video? This cannot be undone.")) return;
    setDeleting(id);
    try {
      await fetch(`/api/videos/${id}`, { method: "DELETE" });
      setVideos((prev) => prev.filter((item) => item.id !== id));
    } catch { /* ignore */ }
    setDeleting(null);
  };

  return (
    <div className={styles.dashboardPage}>
      {/* Admin Header */}
      <header className={styles.adminHeader}>
        <div className={styles.headerInner}>
          <div className={styles.headerBrand}>
            <Image
              src="/images/logo-round.png"
              alt="V Design Logo"
              width={38}
              height={38}
              className={styles.headerLogoImg}
            />
            <h1 className={styles.headerTitle}>V Design Admin</h1>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </header>

      <main className={styles.dashboardMain}>
        {/* Action Cards */}
        <div className={styles.actionCards}>
          <Link href="/admin/add-photo" className={styles.actionCard}>
            <span className={styles.actionIcon}>📸</span>
            <span className={styles.actionLabel}>Add Photo</span>
            <span className={styles.actionDesc}>Upload a new project photo to the gallery</span>
          </Link>
          <Link href="/admin/add-video" className={styles.actionCard}>
            <span className={styles.actionIcon}>🎬</span>
            <span className={styles.actionLabel}>Add Video</span>
            <span className={styles.actionDesc}>Publish a YouTube video to the showcase</span>
          </Link>
        </div>

        {/* Gallery Items */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Gallery Photos ({gallery.length})
            </h2>
          </div>

          {loadingGallery ? (
            <p className={styles.emptyMsg}>Loading...</p>
          ) : gallery.length === 0 ? (
            <p className={styles.emptyMsg}>
              No photos yet. Click &quot;Add Photo&quot; to publish your first project!
            </p>
          ) : (
            <div className={styles.itemGrid}>
              {gallery.map((item) => (
                <div key={item.id} className={styles.itemCard}>
                  <div className={styles.itemImageWrap}>
                    <Image
                      src={item.src}
                      alt={item.alt || item.title}
                      width={300}
                      height={200}
                      className={styles.itemImage}
                      unoptimized
                    />
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemTitle}>{item.title}</p>
                    <button
                      onClick={() => handleDeleteGallery(item.id)}
                      className={styles.deleteBtn}
                      disabled={deleting === item.id}
                    >
                      {deleting === item.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Video Items */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Videos ({videos.length})
            </h2>
          </div>

          {loadingVideos ? (
            <p className={styles.emptyMsg}>Loading...</p>
          ) : videos.length === 0 ? (
            <p className={styles.emptyMsg}>
              No videos yet. Click &quot;Add Video&quot; to publish your first video!
            </p>
          ) : (
            <div className={styles.itemGrid}>
              {videos.map((item) => (
                <div key={item.id} className={styles.itemCard}>
                  <div className={styles.itemImageWrap}>
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                      alt={item.title}
                      className={styles.itemImage}
                    />
                    <span className={styles.playBadge}>▶</span>
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemTitle}>{item.title}</p>
                    <button
                      onClick={() => handleDeleteVideo(item.id)}
                      className={styles.deleteBtn}
                      disabled={deleting === item.id}
                    >
                      {deleting === item.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
