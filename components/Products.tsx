const products = [
  {
    name: "Walnut Dining Table",
    description: "Solid black walnut with hand-cut dovetail joints. Seats 6–8. Custom sizes available.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    tag: "Dining",
  },
  {
    name: "White Oak Bookcase",
    description: "Quarter-sawn white oak with adjustable shelves and a hand-rubbed oil finish.",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    tag: "Storage",
  },
  {
    name: "Cherry Writing Desk",
    description: "American cherry with soft-close drawers and a leather writing surface inset.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    tag: "Office",
  },
  {
    name: "Maple Bed Frame",
    description: "Hard maple with mortise-and-tenon construction. Available in Queen, King, and Cal King.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
    tag: "Bedroom",
  },
  {
    name: "Live Edge Coffee Table",
    description: "Single-slab live-edge elm on hand-forged steel legs. Each piece is one of a kind.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80",
    tag: "Living Room",
  },
  {
    name: "Ash Media Console",
    description: "White ash with cable management cutouts and a matte lacquer finish.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    tag: "Living Room",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Featured Pieces</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="group rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-56 overflow-hidden bg-stone-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-900 mb-1">{p.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
