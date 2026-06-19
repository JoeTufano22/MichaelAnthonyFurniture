import Link from "next/link";
import { PROMOTIONS } from "@/lib/data";

export default function PromotionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <p className="text-xs text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link> {" > "} <span className="text-gray-700 font-medium">Promotions</span>
      </p>
      <h1 className="text-2xl font-bold uppercase text-gray-900 mb-8 text-center">Current Promotions</h1>

      <div className="space-y-8">
        {PROMOTIONS.map((promo) => (
          <div key={promo.id} className="relative overflow-hidden border border-gray-200 group">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-blue-700 text-white text-xs font-semibold px-3 py-1 mb-4 w-fit uppercase tracking-wider">
                  {promo.tag}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{promo.title}</h2>
                <p className="text-gray-600 mb-6">{promo.subtitle}</p>
                <Link
                  href="#contact-form"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 text-sm uppercase tracking-wider transition-colors w-fit"
                >
                  {promo.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 border border-gray-200 p-8 text-center">
        <p className="text-lg font-semibold text-gray-900 mb-1">Looking for a specific deal?</p>
        <p className="text-gray-600 text-sm mb-4">Call us or visit the showroom — our team can help find the best offer for your budget.</p>
        <a href="tel:9089643900" className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 text-sm uppercase tracking-wider transition-colors">
          Call 908-964-3900
        </a>
      </div>
    </div>
  );
}
