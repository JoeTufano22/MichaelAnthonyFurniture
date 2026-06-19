export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-stone-50 pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-stone-500 mb-4">
          Handcrafted in the USA
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-tight mb-6">
          Furniture Built <br className="hidden md:block" />
          to Last a Lifetime
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10">
          Every piece is designed and crafted by hand — using solid wood, time-tested joinery,
          and a dedication to quality you can feel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-stone-900 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="border border-stone-400 text-stone-700 px-8 py-4 rounded-full text-sm font-semibold hover:bg-stone-100 transition-colors"
          >
            Request a Custom Piece
          </a>
        </div>
      </div>
    </section>
  );
}
