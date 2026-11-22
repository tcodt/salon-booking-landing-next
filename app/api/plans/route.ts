import { NextResponse } from "next/server";

const UPSTREAM = `${process.env.NARJIN_API_URL ?? "https://api.narjin.ir"}/landing/plans/`;

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
        { error: true, message: "پاسخ نامعتبر از سرور پلن‌ها" },
        { status: 502 },
      );
    }
    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error("plans proxy error:", err);
    return NextResponse.json(
      { error: true, message: "اتصال به API پلن‌ها برقرار نشد" },
      { status: 502 },
    );
  }
}
