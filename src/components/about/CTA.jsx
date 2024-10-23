import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Maak Met Ons
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Jou Nieuwe Website
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Verbeter uw projecten met onze expertise.
        </p>
        <Link href="/contact" className="inline-block mb-8">
          <button className="bg-purple-900 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
            Start Nu
          </button>
        </Link>
        {/* <div className="flex justify-center items-center">
          <div className="flex -space-x-2 mr-4">
            <Image src="https://placehold.co/60x60" alt="Avatar 1" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src="https://placehold.co/60x60" alt="Avatar 2" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src="https://placehold.co/60x60" alt="Avatar 3" width={40} height={40} className="rounded-full border-2 border-white" />
          </div>
          <p className="text-gray-600">
            Sluit je aan bij andere ondernemers
          </p>
        </div> */}
      </div>
    </section>
  );
}
