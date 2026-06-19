import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/data";

export default function Nav() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-gray-900 text-white text-xs py-1.5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="tel:9089643900" className="font-medium tracking-wide hover:text-gray-300 transition-colors">
            📞 908-964-3900
          </a>
          <a href="https://www.instagram.com/michaelanthony_furniture" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/Mafg22" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
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
