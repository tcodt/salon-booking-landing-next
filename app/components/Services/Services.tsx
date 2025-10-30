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
            ما با ارائه خدمات حرفه‌ای و استفاده از بهترین مواد، تجربه‌ای بی‌نظیر
            برای شما فراهم می‌کنیم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "مدیریت هوشمند",
              desc: "دیگه وقت خالی نداری",
              icon: <MdManageHistory />,
            },
            {
              title: "سامانه حسابداری",
              desc: "همه درآمد و هزینه‌هات رو دقیق ببین",
              icon: <MdOutlineAccountBalance />,
            },
            {
              title: "لیست مشتریان",
              desc: "همیشه با مشتریات در ارتباط باش",
              icon: <ImUsers />,
            },
            {
              title: "رزرو آسان",
              desc: "وقت آرایشگاهت رو در چند ثانیه رزرو کن",
              icon: <GiNotebook />,
            },
            {
              title: "مدیریت مالی",
              desc: "بهترین شکل کیف پول مدیریت کن",
              icon: <GiReceiveMoney />,
            },
            {
              title: "استقاده از هوش مصنوعی",
              desc: "با هوش مصنوعی مشاوره بگیر",
              icon: <FaBrain />,
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

export default Services;
