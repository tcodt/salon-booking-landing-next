import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('📤 دریافت درخواست از فرانت‌اند:', body);

    let response: Response;
    try {
      response = await fetch(
        'https://queuingprojectapi.pythonanywhere.com/landing/contact/',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
          // جلوگیری از هنگ کردن درخواست در صورت مشکل شبکه/فیلترینگ
          signal: AbortSignal.timeout(15000),
        }
      );
    } catch (fetchError) {
      // این بلاک وقتی اجرا میشه که اصلاً نتونستیم به سرور وصل بشیم
      // (قطع شبکه، DNS، فیلترینگ سطح TLS، تایم‌اوت و ...)
      console.error('❌ خطای اتصال به pythonanywhere:', fetchError);
      return NextResponse.json(
        {
          error: true,
          message:
            'اتصال به سرور اصلی برقرار نشد. ممکن است مشکل شبکه یا فیلترینگ باشد.',
          details: String(fetchError),
        },
        { status: 502 }
      );
    }

    const responseText = await response.text();

    console.log('📥 وضعیت پاسخ:', response.status);
    console.log(
      '📥 هدرهای پاسخ:',
      JSON.stringify(Object.fromEntries(response.headers))
    );
    console.log('📥 محتوای خام پاسخ:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      // پاسخ JSON نیست (مثلاً یک صفحه HTML از فیلترینگ یا ارور سرور)
      console.error('❌ پاسخ سرور JSON معتبر نبود:', parseError);
      return NextResponse.json(
        {
          error: true,
          message:
            'پاسخ نامعتبر از سرور دریافت شد (ممکن است فیلترینگ شبکه باشد).',
          raw_snippet: responseText.slice(0, 500),
          upstream_status: response.status,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(data, {
      status: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
      },
    });
  } catch (error) {
    console.error('❌ خطای غیرمنتظره در API Route:', error);
    return NextResponse.json(
      {
        error: true,
        message: 'خطای داخلی سرور',
        details: String(error),
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, X-CSRFTOKEN',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}