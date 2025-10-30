const CtaSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#19705D" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          آماده‌اید تا ظاهرتان را متحول کنید؟
        </h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
          همین امروز نوبت خود را رزرو کنید و از خدمات حرفه‌ای ما بهره‌مند شوید
        </p>
        <a
          href="https://api.narjin.ir"
          className="inline-block px-8 py-4 rounded-lg bg-white font-medium text-lg transition hover:bg-gray-100"
          style={{ color: "#19705D" }}
        >
          رزرو آنلاین نوبت
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
