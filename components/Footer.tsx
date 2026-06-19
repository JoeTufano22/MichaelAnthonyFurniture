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
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 px-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Michael Anthony Furniture Gallery. All rights reserved.
      </div>
    </footer>
  );
}
