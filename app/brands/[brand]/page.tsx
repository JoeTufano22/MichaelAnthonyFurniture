import Link from "next/link";
import { BRANDS, getProductsByBrand } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }));
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: slug } = await params;
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) notFound();

  const products = getProductsByBrand(slug);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <p className="text-xs text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link>
        {" > "}
        <Link href="/brands" className="hover:underline">Brands</Link>
        {" > "}
        <span className="text-gray-700 font-medium">{brand.label}</span>
      </p>

      <div className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{brand.label}</h1>
        <p className="text-gray-600 max-w-2xl">{brand.description}</p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/furniture/${p.category}/${p.id}`}
              className="group border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="bg-gray-100 aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-400">{p.collection}</p>
                <p className="font-bold text-gray-900 uppercase text-sm mt-0.5">{p.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">SKU: {p.sku}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-semibold">Full {brand.label} catalog coming soon.</p>
          <p className="text-sm mt-1">Visit our showroom or call 908-964-3900 to see the full collection.</p>
        </div>
      )}
    </div>
  );
}
