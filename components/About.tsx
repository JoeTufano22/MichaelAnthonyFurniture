export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-square bg-stone-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1609600981949-5d52a5a9d25c?w=800&q=80"
            alt="Craftsman at work"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-4">Our Story</p>
          <h2 className="text-4xl font-bold text-stone-900 mb-6 leading-tight">
            Built by Hand. <br />Designed to Endure.
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Michael Anthony started building furniture in his garage with a hand saw and a few chisels.
              Twenty years later, the tools have grown but the philosophy hasn&apos;t changed —
              every joint is cut by hand, every surface is finished by feel.
            </p>
            <p>
              We work exclusively with sustainably sourced domestic hardwoods: walnut, white oak, cherry,
              maple, and ash. No particleboard. No veneers. Just solid wood that gets better with age.
            </p>
            <p>
              Custom orders are always welcome. If you have a space, a vision, or just a rough sketch
              on a napkin, we&apos;ll turn it into something that outlasts the trends.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
            {[["20+", "Years of craft"], ["500+", "Pieces made"], ["100%", "Solid wood"]].map(([stat, label]) => (
              <div key={label}>
                <p className="text-3xl font-bold text-stone-900">{stat}</p>
                <p className="text-sm text-stone-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
