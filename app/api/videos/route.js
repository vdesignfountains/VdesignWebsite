import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifySessionToken, COOKIE_NAME } from "@/lib/auth";
import { getVideoItems, addVideoItem } from "@/lib/data";

/** Public: return all video items */
export async function GET() {
  try {
    const items = await getVideoItems();
    return NextResponse.json(items);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

/** Admin only: add a new video */
export async function POST(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { youtubeUrl, title } = await request.json();

    if (!youtubeUrl || !title) {
      return NextResponse.json(
        { error: "YouTube URL and title are required" },
        { status: 400 }
      );
    }

    const newItem = await addVideoItem(youtubeUrl, title);
    return NextResponse.json(newItem, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Failed to add video" },
      { status: 500 }
    );
  }
}
