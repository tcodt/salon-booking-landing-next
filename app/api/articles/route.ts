import { NextResponse } from "next/server";

const UPSTREAM = "https://api.narjin.ir/landing/article/";

export async function GET() {
  try {
    const response = await fetch(UPSTREAM, {
      headers: { accept: "application/json" },
      next: { revalidate: 60 },
    });
    const text = await response.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: true, message: "پاسخ نامعتبر از سرور مقالات" },
        { status: 502 },
      );
    }
    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error("articles proxy error:", err);
    return NextResponse.json(
      { error: true, message: "اتصال به API مقالات برقرار نشد" },
      { status: 502 },
    );
  }
}
