import Link from "next/link";

const categories = [
  { name: "Living Room",   slug: "living-room",   image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" },
  { name: "Dining Room",  slug: "dining-room",   image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80" },
  { name: "Bedroom",      slug: "bedroom",       image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80" },
  { name: "Kincaid",      slug: null,            href: "/brands/kincaid",  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" },
  { name: "Canadel",      slug: null,            href: "/brands/canadel",  image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80" },
  { name: "Flexsteel",    slug: null,            href: "/brands/flexsteel",image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80" },
];

export default function Products() {
  return (
    <section id="furniture" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-6 pb-3 border-b border-gray-200">
          Shop Michael Anthony Furniture Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const href = cat.href ?? `/furniture/${cat.slug}`;
            return (
              <Link key={cat.name} href={href} className="group relative block overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="flex items-center justify-between bg-white px-4 py-3 border-t border-gray-100">
                  <span className="font-semibold text-gray-900">{cat.name}</span>
                  <svg className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
