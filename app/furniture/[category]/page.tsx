import Link from "next/link";
import { CATEGORIES, BRANDS, getProductsByCategory } from "@/lib/data";
import { notFound } from "next/navigation";

const MATERIALS = ["Fabric", "Leather", "Fabric and Leather", "Wood", "Foam", "Metal", "Wicker and Rattan"];
const STATUSES = ["New", "Active", "Closeout", "Hot Buy", "Best Seller", "Clearance", "Featured Product"];

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  const products = getProductsByCategory(category);
  const brandsInCategory = [...new Set(products.map((p) => p.brand))];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <p className="text-xs text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link>
        {" > "}
        <span className="font-medium text-gray-700">{cat.label}</span>
      </p>

      <h1 className="text-2xl font-bold uppercase text-gray-900 mb-6 text-center">{cat.label}</h1>

      <div className="flex gap-8">
        {/* Sidebar filters */}
        <aside className="hidden lg:block w-56 shrink-0 text-sm">
          <p className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">Refine Your Search</p>

          <FilterSection title="Status" items={STATUSES} />
          <FilterSection title="Brand" items={brandsInCategory} />
          <FilterSection title="Material" items={MATERIALS} />
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-5 text-sm">
            <p className="text-gray-500">{products.length} items</p>
            <div className="flex items-center gap-3">
              <label className="text-gray-600 font-medium">Sort by:</label>
              <select className="border border-gray-300 px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                <option>Rank</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.id}
                href={`/furniture/${category}/${p.id}`}
                className="group border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.tag && (
                    <span className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-0.5">
                      {p.tag}
                    </span>
                  )}
                  {/* Favorite icon */}
                  <button
                    aria-label="Add to favorites"
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </button>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500 font-medium">{p.brand}</p>
                  <p className="text-xs text-gray-400">{p.collection}</p>
                  <p className="font-bold text-gray-900 uppercase text-sm mt-1">{p.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">SKU: {p.sku}</p>
                  <label className="flex items-center gap-1.5 mt-2 text-xs text-gray-500 cursor-pointer" onClick={(e) => e.preventDefault()}>
                    <input type="checkbox" className="rounded" /> Compare
                  </label>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <p className="font-bold text-gray-800 uppercase tracking-wider text-xs">{title}</p>
        <span className="text-gray-400 text-xs cursor-pointer">−</span>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item}>
            <label className="flex items-center gap-2 text-gray-600 hover:text-blue-700 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
