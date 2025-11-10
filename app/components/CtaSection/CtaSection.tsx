const CtaSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#19705D" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          دیگه وقتشه سالن‌تو هوشمند کنی!
        </h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
          با نارژین، نوبت‌دهی، حسابداری و ارتباط با مشتریات فقط چند کلیک فاصله
          داره. همین امروز به جمع سالن‌دارهای موفق بپیوند.
        </p>
        <a
          href="tel:09912146083"
          className="inline-block px-8 py-4 rounded-lg bg-white font-medium text-lg transition hover:bg-gray-100"
          style={{ color: "#19705D" }}
        >
          مشاوره
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
