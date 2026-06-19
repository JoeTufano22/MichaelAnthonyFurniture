"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact-form" className="py-14 px-6 bg-white border-t border-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-gray-900 mb-2">Contact Us</h2>
        <p className="text-gray-600 text-sm mb-8">
          Questions about a product, delivery, or financing? We&apos;ll get back to you within 1 business day.
        </p>

        {submitted ? (
          <div className="text-center py-12 bg-gray-50 rounded border border-gray-200">
            <p className="text-xl font-semibold text-gray-900 mb-1">Message sent!</p>
            <p className="text-gray-500 text-sm">We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Name</label>
                <input type="text" required placeholder="Jane Smith" className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Email</label>
                <input type="email" required placeholder="jane@example.com" className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Phone</label>
              <input type="tel" placeholder="(908) 555-0100" className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">I&apos;m interested in</label>
              <select defaultValue="" className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="" disabled>Select a category</option>
                <option>Living Room</option>
                <option>Dining Room</option>
                <option>Bedroom</option>
                <option>Entertainment</option>
                <option>Home Office</option>
                <option>Mattresses</option>
                <option>Accessories</option>
                <option>Financing</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Message</label>
              <textarea rows={4} required placeholder="How can we help?" className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none" />
            </div>
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 text-sm uppercase tracking-wider transition-colors">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
