import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
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
          <div className="text-center md:text-left">
            <p className="text-gray-400">© ۱۴۰۲ تمامی حقوق محفوظ است</p>
            <div className="mt-2 flex space-x-reverse space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-white">
                حریم خصوصی
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                شرایط استفاده
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
