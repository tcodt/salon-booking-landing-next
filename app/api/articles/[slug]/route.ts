import { NextRequest, NextResponse } from "next/server";

const UPSTREAM = "https://api.narjin.ir/landing/article";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> | { slug: string } },
) {
  try {
    const params = await Promise.resolve(context.params);
    const slug = params.slug;
    if (!slug) {
      return NextResponse.json({ error: true, message: "slug لازم است" }, { status: 400 });
    }
    const response = await fetch(`${UPSTREAM}/${encodeURIComponent(slug)}`, {
      headers: { accept: "application/json" },
      next: { revalidate: 60 },
    });
    const text = await response.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: true, message: "پاسخ نامعتبر از سرور مقاله" },
        { status: 502 },
      );
    }
    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error("article slug proxy error:", err);
    return NextResponse.json(
      { error: true, message: "اتصال به API مقاله برقرار نشد" },
      { status: 502 },
    );
  }
}
