import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifySessionToken, COOKIE_NAME } from "@/lib/auth";
import { getGalleryItems, addGalleryItem } from "@/lib/data";

/** Public: return all gallery items */
export async function GET() {
  try {
    const items = await getGalleryItems();
    return NextResponse.json(items);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

/** Admin only: add a new gallery item */
export async function POST(request) {
  // Auth check
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("image");
    const clientName = formData.get("clientName");

    if (!file || !clientName) {
      return NextResponse.json(
        { error: "Image and client name are required" },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Only JPEG, PNG, and WebP images are allowed" },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Image must be smaller than 10MB" },
        { status: 400 }
      );
    }

    const newItem = await addGalleryItem(file, clientName);
    return NextResponse.json(newItem, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Failed to add photo" },
      { status: 500 }
    );
  }
}
