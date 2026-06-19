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
        <a href="#" className="flex items-center gap-3">
          <svg width="52" height="44" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 28C8 24 10 22 14 22H38C42 22 44 24 44 28V36H8V28Z" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
            <path d="M4 26C4 23 6 22 8 22V36H4V26Z" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
            <path d="M48 26C48 23 46 22 44 22V36H48V26Z" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
            <path d="M14 22C14 16 18 12 26 12C34 12 38 16 38 22" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M8 36L6 40M44 36L46 40" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <div className="leading-tight">
            <div className="text-lg font-bold text-gray-900 tracking-tight">Michael Anthony</div>
            <div className="text-lg font-bold text-gray-900 tracking-tight">Furniture Gallery</div>
          </div>
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
