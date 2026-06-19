export default function About() {
  return (
    <section id="about" className="py-10 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 uppercase mb-6 pb-3 border-b border-gray-200">
          Who We Are
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Map embed placeholder */}
          <div className="rounded overflow-hidden border border-gray-200 aspect-video bg-gray-200">
            <iframe
              title="Michael Anthony Furniture Gallery Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9!2d-74.29!3d40.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b0a1b1b1b1b1%3A0x1!2s2596+US-22+East%2C+Union%2C+NJ+07083!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* About text */}
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Located in Union, NJ, Michael Anthony Furniture Gallery sets the standard for quality
              and exceptional customer service. Our large selection of furniture, fabrics, and
              accessories allows our customers the freedom to explore their personal style.
            </p>
            <p>
              Our knowledgeable design staff are well-versed in their field and are ready to assist
              you with all of your home furnishing needs.
            </p>
            <div className="pt-4 space-y-2 text-sm">
              <p><span className="font-semibold">Address:</span> 2596 US-22 East, Union, NJ 07083</p>
              <p><span className="font-semibold">Phone:</span> 908-964-3900</p>
              <p><span className="font-semibold">Serving:</span> Westfield, Summit, Cranford, Scotch Plains, and Union</p>
            </div>
            <a
              href="https://maps.google.com/?q=2596+US-22+East+Union+NJ+07083"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-700 font-semibold hover:underline text-sm"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
