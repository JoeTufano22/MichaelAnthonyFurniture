"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">Get in Touch</p>
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Start a Conversation</h2>
          <p className="text-stone-600">
            Have a project in mind? Tell us about your space and what you&apos;re looking for.
            We&apos;ll get back to you within 2 business days.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 rounded-2xl bg-stone-50 border border-stone-100">
            <p className="text-2xl font-semibold text-stone-900 mb-2">Thanks for reaching out!</p>
            <p className="text-stone-600">We&apos;ll be in touch within 2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">What are you looking for?</label>
              <select
                className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900"
                defaultValue=""
              >
                <option value="" disabled>Select a category</option>
                <option>Dining Table</option>
                <option>Bed Frame</option>
                <option>Desk or Office</option>
                <option>Storage / Shelving</option>
                <option>Living Room</option>
                <option>Custom / Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Tell us more</label>
              <textarea
                rows={5}
                required
                placeholder="Dimensions, wood species preference, timeline, budget — anything helps."
                className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-stone-900 text-white py-4 rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
