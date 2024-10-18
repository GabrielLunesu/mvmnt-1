import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-purple-600 to-purple-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-t from-purple-300 via-pink-700 to-purple-900 rounded-3xl relative p-10" style={{maxWidth: '470px', margin: '0 auto'}}>
          <div className="bg-white rounded-2xl p-16 text-center">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Klaar om je bedrijf naar het volgende niveau te tillen?
            </h2>
            <p className="text-lg text-black mb-8">
              Laten we samenwerken om je online aanwezigheid te versterken en je doelen te bereiken.
            </p>
            <Link href="/contact" className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300">
              Neem contact op
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
