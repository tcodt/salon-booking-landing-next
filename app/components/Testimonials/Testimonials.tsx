const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#19705D" }}>
            نظرات مشتریان
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نظرات مشتریان ما که از خدمات ما رضایت کامل داشته‌اند
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "احمد رضایی",
              text: "خدمات حرفه‌ای و محیطی بسیار تمیز. پرسنل بسیار خوش برخورد و متخصص. حتماً توصیه می‌کنم.",
            },
            {
              name: "رضا محمدی",
              text: "بهترین آرایشگاهی که تا حالا رفتم. کوتاهی مو عالی و اصلاح صورت بی‌نظیر. حتماً دوباره مراجعه خواهم کرد.",
            },
            {
              name: "امیر حسینی",
              text: "تجربه‌ای عالی و متفاوت. از کیفیت خدمات و مواد استفاده شده بسیار راضی بودم. قیمت‌ها هم منصفانه است.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#19705D" }}
                >
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="mr-3">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
