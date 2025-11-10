import type React from "react";

interface ContactProps {
  handleSubmit: (e: React.FormEvent<Element>) => void;
  name: string;
  setName: (value: React.SetStateAction<string>) => void;
  email: string;
  setEmail: (value: React.SetStateAction<string>) => void;
  phone: string;
  setPhone: (value: React.SetStateAction<string>) => void;
  message: string;
  setMessage: (value: React.SetStateAction<string>) => void;
}

const Contact: React.FC<ContactProps> = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  message,
  setMessage,
}) => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#19705D" }}>
            تماس با ما
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            برای اطلاعات بیشتر یا ارتباط مستقیم، پیام خود را برای ما ارسال کنید
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* ✅ فرم تماس جدید */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "#19705D" }}
              >
                فرم تماس با ما
              </h3>

              {/* Name */}
              <div className="mb-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="نام و نام خانوادگی"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ borderColor: "#19705D" }}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ borderColor: "#19705D" }}
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="شماره تماس (اختیاری)"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ borderColor: "#19705D" }}
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="پیام شما..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ borderColor: "#19705D" }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-medium transition hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: "#19705D" }}
              >
                ارسال پیام
              </button>
            </form>
          </div>

          {/* ✅ اطلاعات تماس (بدون تغییر) */}
          <div className="md:w-1/2 md:pr-12">
            <div className="mb-8">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#19705D" }}
              >
                اطلاعات تماس
              </h3>

              {/* Phone */}
              <div className="flex items-start mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#19705D" }}
                >
                  📞
                </div>
                <div className="mr-4">
                  <p className="font-bold">تلفن</p>
                  <a href="tel:09912146083" className="text-gray-600">
                    09912146083
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#19705D" }}
                >
                  ⏱️
                </div>
                <div className="mr-4">
                  <p className="font-bold">ساعت کاری</p>
                  <p className="text-gray-600">
                    شنبه تا چهارشنبه: ۹ صبح تا ۸ شب
                  </p>
                  <p className="text-gray-600">
                    پنجشنبه و جمعه: ۱۰ صبح تا ۶ عصر
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              {" "}
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#19705D" }}
              >
                {" "}
                شبکه‌های اجتماعی{" "}
              </h3>{" "}
              <div className="flex items-center gap-4 space-x-reverse space-x-4">
                {" "}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#19705D" }}
                >
                  {" "}
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />{" "}
                  </svg>{" "}
                </a>{" "}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#19705D" }}
                >
                  {" "}
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />{" "}
                  </svg>{" "}
                </a>{" "}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#19705D" }}
                >
                  {" "}
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />{" "}
                  </svg>{" "}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
