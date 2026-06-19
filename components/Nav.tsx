import Image from "next/image";

export default function Nav() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-xs py-1.5 px-6 flex items-center justify-between">
        <span className="font-medium tracking-wide">📞 908-964-3900</span>
        <div className="flex items-center gap-4 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">View Account</a>
          <a href="#" className="hover:text-white transition-colors">Favorites</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <Image src="/logo.webp" alt="Michael Anthony Furniture Gallery" width={220} height={60} priority />
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700 uppercase tracking-wider">
          <a href="#brands" className="hover:text-blue-700 transition-colors">Brands</a>
          <a href="#furniture" className="hover:text-blue-700 transition-colors">Furniture</a>
          <a href="#promotions" className="hover:text-blue-700 transition-colors">Promotions</a>
          <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
