import { MdManageHistory, MdOutlineAccountBalance } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { GiNotebook, GiReceiveMoney } from "react-icons/gi";
import { FaBrain } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#19705D" }}>
            خدمات ما
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نارژین، دستیار هوشمند مدیریت سالن‌های زیبایی است. ما در نارژین تلاش
            کرده‌ایم تا تمام نیازهای یک سالن را — از رزرو نوبت و مدیریت مشتریان
            گرفته تا حسابداری، گزارش مالی و حتی مشاوره با هوش مصنوعی — در یک
            اپلیکیشن ساده و قدرتمند گردآوریم. هدف نارژین این است که با حذف
            کارهای تکراری و زمان‌بر، به مدیران سالن‌ها کمک کند تمرکزشان را روی
            رشد کسب‌وکار و رضایت مشتریان بگذارند. چه صاحب سالن باشید و چه مشتری،
            نارژین کنار شماست تا تجربه‌ای سریع‌تر، دقیق‌تر و حرفه‌ای‌تر از دنیای
            زیبایی را رقم بزنید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "مدیریت هوشمند",
              desc: "با سیستم هوشمند نارژین، تمام کارهای سالن رو در یک پنل ساده و منظم انجام بده. دیگه وقتت صرف هماهنگی‌های تلفنی و نوبت‌های از دست‌رفته نمی‌شه!",
              icon: <MdManageHistory />,
            },
            {
              title: "سامانه حسابداری",
              desc: "مام درآمدها و هزینه‌هات رو به‌صورت لحظه‌ای ببین، گزارش بگیر و حساب‌وکتابت همیشه منظم باشه. دیگه هیچ عددی از قلم نمی‌افته!",
              icon: <MdOutlineAccountBalance />,
            },
            {
              title: "لیست مشتریان",
              desc: "باهاشون در ارتباط باش، پیام بده، تاریخ آخرین مراجعه‌شون رو ببین و تجربه‌ی شخصی‌سازی‌شده بساز.",
              icon: <ImUsers />,
            },
            {
              title: "رزرو آسان",
              desc: "رزرو نوبت فقط در چند ثانیه! مشتریان می‌تونن هر زمان که خواستن نوبت بگیرن و دیگه نیازی به تماس تلفنی نیست.",
              icon: <GiNotebook />,
            },
            {
              title: "مدیریت مالی",
              desc: "همه تراکنش‌ها و پرداخت‌ها رو در یک نگاه ببین. با کیف پول هوشمند نارژین، مدیریت مالی ساده‌تر و سریع‌تر از همیشه‌ست.",
              icon: <GiReceiveMoney />,
            },
            {
              title: "استقاده از هوش مصنوعی",
              desc: "هوش مصنوعی نارژین، دستیار دیجیتال سالن شماست! با تحلیل داده‌های مشتریان، بهترین زمان‌ها برای رزرو، پرطرفدارترین خدمات و پیشنهادهای شخصی‌سازی‌شده رو بهت معرفی می‌کنه",
              icon: <FaBrain />,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-center flex-col gap-4"
            >
              <div className="text-[3rem]" style={{ color: "#19705D" }}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold" style={{ color: "#19705D" }}>
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
