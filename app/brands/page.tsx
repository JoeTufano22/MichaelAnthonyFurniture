import Link from "next/link";
import { BRANDS } from "@/lib/data";

export default function BrandsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <p className="text-xs text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link> {" > "} <span className="text-gray-700 font-medium">Brands</span>
      </p>
      <h1 className="text-2xl font-bold uppercase text-gray-900 mb-8 text-center">Brands You Trust</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BRANDS.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className="group border border-gray-200 p-6 hover:border-blue-600 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors">
                {brand.label}
              </h2>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{brand.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
