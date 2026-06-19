export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-stone-900">
          Michael Anthony Furniture
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a href="#products" className="hover:text-stone-900 transition-colors">Products</a>
          <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}
