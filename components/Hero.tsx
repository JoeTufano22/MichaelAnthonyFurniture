const slides = [
  {
    brand: "Canadel Furniture",
    tagline: "Customizable Canadian Dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1600&q=80",
  },
  {
    brand: "Kincaid Furniture",
    tagline: "Solid Wood. Exceptional Craft.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80",
  },
  {
    brand: "Flexsteel",
    tagline: "Built to Last a Lifetime",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80",
  },
];

export default function Hero() {
  return (
    <section className="relative h-[480px] overflow-hidden bg-gray-900">
      {/* Background image — first slide, static for SSR */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${slides[0].image}')` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col justify-end p-10 max-w-7xl mx-auto">
        <p className="text-white text-5xl font-bold drop-shadow mb-4">{slides[0].brand}</p>
        <p className="text-white/80 text-xl mb-6">{slides[0].tagline}</p>
        <a
          href="#furniture"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 text-sm uppercase tracking-wider transition-colors w-fit"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
