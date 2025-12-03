import Image from "next/image";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                <Image
                  src="/images/logo-main.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                  fill
                  sizes="64px"
                />
              </div>
              <span
                className="mr-3 text-4xl font-bold"
                style={{ color: "#19705D", fontFamily: "IranNastaliq" }}
              >
                نارژین
              </span>
            </div>
            <p className="mt-2 text-gray-400">
              اپلیکیشن نارژین یک راهکار هوشمند برای مدیریت و رزرو آنلاین خدمات
              آرایشگاهی است.
            </p>
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
                  <TbPhoneCall size={20} />
                </div>
                <div className="mr-4">
                  <p className="font-bold">تلفن</p>
                  <a href="tel:09912146083" className="text-gray-300">
                    09912146083
                  </a>
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
              <div className="flex flex-wrap items-center gap-4 space-x-reverse space-x-4">
                {" "}
                <a
                  href="https://instagram.com/m.erfanpld"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#19705D" }}
                >
                  <FaInstagram size={20} />
                </a>{" "}
                <a
                  href="https://wa.me/09912146083"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#19705D" }}
                >
                  <FaWhatsapp size={20} />
                </a>{" "}
                <a
                  href="https://t.me/erfanpld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#19705D" }}
                >
                  <FaTelegram size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-gray-400 text-sm">© ۱۴۰۲ تمامی حقوق محفوظ است</p>
            <div className="mt-2 flex space-x-reverse space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                حریم خصوصی
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                شرایط استفاده
              </a>
            </div>

            <div>
              <Image
                src="/images/enamad.png"
                alt="Enamad"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
