import Image from "next/image";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbPackages } from "react-icons/tb";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative w-full h-[400px] md:h-[500px] md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/images/about-pic.avif"
              alt="Salon Interior"
              className="rounded-xl shadow-lg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="md:w-1/2 md:pr-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#19705D" }}
            >
              درباره نارژین
            </h2>
            <p className="text-gray-600 mb-4">
              اپلیکیشن نارژین، پلتفرم جامع مدیریت و رزرو آنلاین برای سالن‌های
              زیبایی است. چه یک آرایشگاه بزرگ داشته باشید و چه یک سالن کوچک،
              نارژین به شما کمک می‌کند تا کسب‌وکارتان را به صورت حرفه‌ای مدیریت
              کنید و تجربه مشتریان خود را به یک سطح جدید ارتقا دهید.
            </p>
            <p className="text-gray-600 mb-6">
              تیم ما متشکل از آرایشگران حرفه‌ای و خلاق است که با آخرین متدهای
              روز دنیا آشنا هستند و همواره بهترین خدمات را به شما ارائه می‌دهند.
            </p>
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#19705D" }}
                >
                  ۱۰+
                </div>
                <div className="text-gray-600">سال سابقه</div>
              </div>
              <div className="mr-8">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#19705D" }}
                >
                  ۵۰۰۰+
                </div>
                <div className="text-gray-600">مشتری راضی</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#19705D" }}
                >
                  ۱۵+
                </div>
                <div className="text-gray-600">آرایشگر حرفه‌ای</div>
              </div>
            </div>
            <a
              href="https://your-main-website.com"
              className="inline-block px-6 py-3 rounded-lg text-white font-medium transition hover:opacity-90"
              style={{ backgroundColor: "#19705D" }}
            >
              درباره بیشتر بدانید
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            {
              title: "مدیریت هوشمندانه مشتریان",
              desc: "به جای دفترچه کاغذی، یک دستیار حرفه‌ای داشته باشید. نارژین برای هر مشتری یک پروفایل کامل ایجاد می‌کند. از تاریخچه خدمات و جزئیات رنگ مو گرفته تا علایق و یادداشت‌های شخصی، همه چیز در دسترس شماست. با این ویژگی می‌توانید به مشتریان خود حس خاص بودن بدهید و به راحتی با آن‌ها در ارتباط بمانید.",
              icon: <MdManageAccounts />,
            },
            {
              title: "رزرو آنلاین ۲۴ ساعته",
              desc: "وقت‌های خالی را به درآمد تبدیل کنید. مشتریان شما می‌توانند در هر ساعت از شبانه‌روز، به راحتی و بدون نیاز به تماس تلفنی، وقت خود را رزرو کنند. با تقویم هوشمند نارژین، همپوشانی نوبت‌ها به صفر می‌رسد و به طور خودکار پیام‌های یادآوری برای مشتریان ارسال می‌شود.",
              icon: <RiCustomerService2Fill />,
            },
            {
              title: "مدیریت خدمات و پکیج‌ها",
              desc: "کسب‌وکار خود را جذاب‌تر کنید. خدمات خود را به صورت منظم با قیمت و مدت زمان دقیق در اپلیکیشن ثبت کنید. همچنین می‌توانید پکیج‌های اختصاصی و جذاب (مانند پکیج عروس یا پکیج‌های ماهانه) ایجاد و به مشتریان ارائه دهید تا فروش خود را چند برابر کنید.",
              icon: <TbPackages />,
            },
            {
              title: "مدیریت مالی و حسابداری دقیق",
              desc: "هرگز از درآمد خود بی‌خبر نباشید. نارژین تمام تراکنش‌ها و پرداخت‌های شما را به صورت خودکار ثبت می‌کند. با گزارش‌های مالی روزانه، هفتگی و ماهانه، می‌توانید درآمد، هزینه‌ها و سود خود را به صورت لحظه‌ای بررسی کنید و تصمیم‌های بهتری برای رشد کسب‌وکارتان بگیرید.",
              icon: <GiTakeMyMoney />,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-[3rem] mb-4" style={{ color: "#19705D" }}>
                {service.icon}
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "#19705D" }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
