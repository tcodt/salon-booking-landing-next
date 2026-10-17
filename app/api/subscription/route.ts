import { NextResponse } from "next/server";

const UPSTREAM = "https://api.narjin.ir/landing/subscription/";

export async function GET() {
  try {
    const response = await fetch(UPSTREAM, {
      headers: { accept: "application/json" },
      next: { revalidate: 30 },
    });
    const text = await response.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: true, message: "پاسخ نامعتبر از سرور اشتراک" },
        { status: 502 },
      );
    }
    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error("subscription proxy error:", err);
    return NextResponse.json(
      { error: true, message: "اتصال به API اشتراک برقرار نشد" },
      { status: 502 },
    );
  }
}
