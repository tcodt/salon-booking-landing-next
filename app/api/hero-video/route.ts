import { NextResponse } from "next/server";

const UPSTREAM = "https://api.narjin.ir/landing/hero-video/";

// ویدیوی قاب موبایل بخش اول؛ از پنل مدیریت (/manage/landing-videos/) آپلود می‌شود.
export async function GET() {
  try {
    const response = await fetch(UPSTREAM, {
      headers: { accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!response.ok) return NextResponse.json({ video: null, poster: null });
    const data = (await response.json()) as { video?: string | null; poster?: string | null };
    return NextResponse.json({ video: data.video ?? null, poster: data.poster ?? null });
  } catch {
    return NextResponse.json({ video: null, poster: null });
  }
}
