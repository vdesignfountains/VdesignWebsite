import crypto from "crypto";

/* ============================================================
   Data Layer — Filesystem (local dev) / Vercel Blob (production)
   
   When BLOB_READ_WRITE_TOKEN env var is set, uses Vercel Blob
   for persistent storage. Otherwise falls back to local filesystem.
   ============================================================ */

const USE_BLOB = !!process.env.BLOB_READ_WRITE_TOKEN;

// ───────────────────────── Filesystem helpers ─────────────────────────

async function readLocalJSON(filename) {
  const fs = (await import("fs/promises")).default;
  const path = (await import("path")).default;
  const filePath = path.join(process.cwd(), "data", filename);
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeLocalJSON(filename, data) {
  const fs = (await import("fs/promises")).default;
  const path = (await import("path")).default;
  const dirPath = path.join(process.cwd(), "data");
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(
    path.join(dirPath, filename),
    JSON.stringify(data, null, 2)
  );
}

async function saveLocalFile(buffer, filename) {
  const fs = (await import("fs/promises")).default;
  const path = (await import("path")).default;
  const dirPath = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(path.join(dirPath, filename), Buffer.from(buffer));
  return `/uploads/${filename}`;
}

async function deleteLocalFile(filepath) {
  const fs = (await import("fs/promises")).default;
  const path = (await import("path")).default;
  try {
    await fs.unlink(path.join(process.cwd(), "public", filepath));
  } catch {
    /* file may not exist */
  }
}

// ───────────────────────── Vercel Blob helpers ─────────────────────────

async function readBlobJSON(filename) {
  try {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: filename, limit: 1 });
    if (blobs.length === 0) return [];
    const res = await fetch(blobs[0].url, { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function writeBlobJSON(filename, data) {
  const { put, list, del } = await import("@vercel/blob");
  // Delete existing blob at this path first
  try {
    const { blobs } = await list({ prefix: filename, limit: 1 });
    if (blobs.length > 0) {
      await del(blobs.map((b) => b.url));
    }
  } catch {
    /* ignore */
  }
  await put(filename, JSON.stringify(data, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

async function saveBlobFile(buffer, filename) {
  const { put } = await import("@vercel/blob");
  const blob = await put(`uploads/${filename}`, Buffer.from(buffer), {
    access: "public",
    addRandomSuffix: false,
  });
  return blob.url;
}

async function deleteBlobFile(url) {
  try {
    const { del } = await import("@vercel/blob");
    await del(url);
  } catch {
    /* ignore */
  }
}

// ───────────────────────── Gallery API ─────────────────────────

export async function getGalleryItems() {
  return USE_BLOB
    ? readBlobJSON("gallery.json")
    : readLocalJSON("gallery.json");
}

export async function saveGalleryItems(items) {
  return USE_BLOB
    ? writeBlobJSON("gallery.json", items)
    : writeLocalJSON("gallery.json", items);
}

export async function addGalleryItem(file, clientName) {
  if (!USE_BLOB && process.env.VERCEL) {
    throw new Error(
      "Vercel Blob Storage is not connected. In your Vercel Dashboard, go to Storage -> Create Database -> Blob, and connect it to this project to save new uploads in production."
    );
  }

  const items = await getGalleryItems();
  const id = crypto.randomUUID();
  const ext = (file.name?.split(".").pop() || "jpeg").toLowerCase();
  const safeExt = ["jpeg", "jpg", "png", "webp"].includes(ext) ? ext : "jpeg";
  const filename = `${id}.${safeExt}`;
  const buffer = await file.arrayBuffer();

  const src = USE_BLOB
    ? await saveBlobFile(buffer, filename)
    : await saveLocalFile(buffer, filename);

  const newItem = {
    id,
    src,
    title: clientName,
    alt: `Fountain project — ${clientName}`,
    publishedAt: new Date().toISOString(),
  };

  items.unshift(newItem); // newest first
  await saveGalleryItems(items);
  return newItem;
}

export async function deleteGalleryItem(id) {
  const items = await getGalleryItems();
  const item = items.find((i) => i.id === id);
  if (!item) return false;

  // Delete the image file
  if (USE_BLOB && item.src.startsWith("http")) {
    await deleteBlobFile(item.src);
  } else if (!USE_BLOB) {
    await deleteLocalFile(item.src);
  }

  const filtered = items.filter((i) => i.id !== id);
  await saveGalleryItems(filtered);
  return true;
}

// ───────────────────────── Videos API ─────────────────────────

export async function getVideoItems() {
  return USE_BLOB
    ? readBlobJSON("videos.json")
    : readLocalJSON("videos.json");
}

export async function saveVideoItems(items) {
  return USE_BLOB
    ? writeBlobJSON("videos.json", items)
    : writeLocalJSON("videos.json", items);
}

export async function addVideoItem(youtubeUrl, title) {
  const items = await getVideoItems();
  const id = crypto.randomUUID();

  const videoId = extractYouTubeId(youtubeUrl);
  if (!videoId) throw new Error("Invalid YouTube URL");

  const newItem = {
    id,
    videoId,
    title,
    caption: "",
    publishedAt: new Date().toISOString(),
  };

  items.unshift(newItem); // newest first
  await saveVideoItems(items);
  return newItem;
}

export async function deleteVideoItem(id) {
  const items = await getVideoItems();
  const filtered = items.filter((i) => i.id !== id);
  if (filtered.length === items.length) return false;
  await saveVideoItems(filtered);
  return true;
}

// ───────────────────────── YouTube URL Parser ─────────────────────────

function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  // Try as raw video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
  return null;
}
