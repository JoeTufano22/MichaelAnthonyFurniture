import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  const product = PRODUCTS.find((p) => p.id === id);
  if (!cat || !product) notFound();

  const related = PRODUCTS.filter((p) => p.category === category && p.id !== id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <p className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link>
        {" > "}
        <Link href={`/furniture/${category}`} className="hover:underline">{cat.label}</Link>
        {" > "}
        <span className="text-gray-700 font-medium">{product.name}</span>
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-gray-100 aspect-square overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div>
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{product.brand}</p>
          <p className="text-sm text-gray-400 mb-2">{product.collection}</p>
          <h1 className="text-3xl font-bold text-gray-900 uppercase mb-1">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-6">SKU: {product.sku}</p>

          {product.tag && (
            <span className="inline-block bg-blue-700 text-white text-xs font-semibold px-3 py-1 mb-6">
              {product.tag}
            </span>
          )}

          <div className="space-y-2 text-sm text-gray-700 mb-8 border-t border-gray-100 pt-6">
            <div className="flex gap-3"><span className="font-semibold w-24">Category</span><span>{cat.label}</span></div>
            <div className="flex gap-3"><span className="font-semibold w-24">Material</span><span>{product.material}</span></div>
            <div className="flex gap-3"><span className="font-semibold w-24">Brand</span><span>{product.brand}</span></div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded p-5 text-sm text-gray-700 mb-6">
            <p className="font-semibold text-gray-900 mb-1">Visit Our Showroom</p>
            <p>Pricing and availability for this piece are available in-store. Our design team is happy to help you find the right fit for your home.</p>
            <p className="mt-2 font-medium">📞 908-964-3900 · 2596 US-22 East, Union, NJ 07083</p>
          </div>

          <Link
            href="#contact-form"
            className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 uppercase tracking-wider text-sm transition-colors"
          >
            Request Info on This Piece
          </Link>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-6 pb-3 border-b border-gray-200">
            More in {cat.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/furniture/${category}/${p.id}`} className="group border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-gray-100 aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500">{p.brand}</p>
                  <p className="font-bold text-gray-900 uppercase text-sm">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
