import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/data";

export default function Nav() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-gray-900 text-white text-xs py-1.5 px-6 flex items-center justify-between">
        <a href="tel:9089643900" className="font-medium tracking-wide hover:text-gray-300 transition-colors">
          📞 908-964-3900
        </a>
        <div className="flex items-center gap-5 text-gray-300">
          <Link href="/promotions" className="hover:text-white transition-colors">Promotions</Link>
          <Link href="#contact-form" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>

      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Image src="/logo.webp" alt="Michael Anthony Furniture Gallery" width={200} height={54} priority />
        </Link>

        {/* Primary links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700 uppercase tracking-wider">
          {/* Brands dropdown */}
          <div className="relative group">
            <Link href="/brands" className="hover:text-blue-700 transition-colors py-5 block">
              Brands
            </Link>
          </div>

          {/* Furniture mega-dropdown */}
          <div className="relative group">
            <span className="cursor-default hover:text-blue-700 transition-colors py-5 block">
              Furniture ▾
            </span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-200 shadow-lg w-48 z-50">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/furniture/${cat.slug}`}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/promotions" className="hover:text-blue-700 transition-colors">Promotions</Link>
          <Link href="#contact-form" className="hover:text-blue-700 transition-colors">Contact</Link>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center gap-4 text-gray-500">
          {/* Search */}
          <button
            aria-label="Search"
            className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-500 hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
            </svg>
            <span className="hidden sm:inline text-xs">Search keyword or item</span>
          </button>

          {/* Favorites */}
          <Link href="/favorites" aria-label="Favorites" className="hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
