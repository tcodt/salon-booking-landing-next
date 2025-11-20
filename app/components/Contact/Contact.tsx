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

        <div className="flex items-center justify-center">
          {/* ✅ فرم تماس جدید */}
          <div className="md:w-3/5 w-full mb-10 md:mb-0">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 md:p-8 p-4 rounded-xl shadow-sm"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
