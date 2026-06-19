const companyLinks = ["About Us", "Financing", "Gift Certificates", "Promotions", "Delivery", "Design Center", "Brands", "FAQ", "Join Email", "Showroom Specials", "Blog"];
const furnitureLinks = ["Living Room", "Dining Room", "Bedroom", "Entertainment", "Home Office", "Mattresses", "Accessories"];
const brands = ["American Drew", "Amisco", "ART Furniture", "Ashley", "Ashley Sleep", "Bassett Mirror Company", "Benchcraft", "Bernhardt", "Canadel", "Craftmaster", "Flexsteel", "Kincaid", "La-Z-Boy"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">

        {/* Company */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-gray-900 mb-4">Company Information</h4>
          <ul className="space-y-1.5">
            {companyLinks.map((l) => (
              <li key={l}><a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Find Furniture */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-gray-900 mb-4">Find Furniture</h4>
          <ul className="space-y-1.5">
            {furnitureLinks.map((l) => (
              <li key={l}><a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-gray-900 mb-4">Brands You Trust</h4>
          <ul className="space-y-1.5">
            {brands.map((b) => (
              <li key={b}><a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">{b}</a></li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div id="contact">
          <h4 className="font-bold uppercase tracking-widest text-gray-900 mb-4">Locations &amp; Directions</h4>
          <div className="space-y-2 text-gray-700">
            <p className="font-semibold text-gray-900">Michael Anthony Furniture Gallery</p>
            <p>2596 US-22 East</p>
            <p>Union, NJ 07083</p>
            <a href="https://maps.google.com/?q=2596+US-22+East+Union+NJ+07083" target="_blank" rel="noopener noreferrer" className="block text-blue-700 hover:underline mt-2">Get Directions</a>
            <p className="mt-3"><span className="font-semibold">Phone:</span> 908-964-3900</p>
            <p className="text-gray-500 text-xs mt-3 leading-relaxed">Serving Westfield, Summit, Cranford, Scotch Plains, and Union</p>
            <div className="flex items-center gap-4 mt-5">
              <a href="https://www.instagram.com/michaelanthony_furniture" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @michaelanthony_furniture
              </a>
              <a href="https://www.facebook.com/Mafg22" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Mafg22
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 px-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Michael Anthony Furniture Gallery. All rights reserved.
      </div>
    </footer>
  );
}
