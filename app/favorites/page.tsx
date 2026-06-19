import Link from "next/link";

export default function FavoritesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <p className="text-xs text-gray-500 mb-4 text-left">
        <Link href="/" className="hover:underline">Home</Link> {" > "} <span className="text-gray-700 font-medium">Favorites</span>
      </p>
      <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Favorites</h1>
      <p className="text-gray-500 mb-6">Items you heart while browsing will appear here.</p>
      <Link
        href="/furniture/living-room"
        className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 text-sm uppercase tracking-wider transition-colors"
      >
        Start Browsing
      </Link>
    </div>
  );
}
