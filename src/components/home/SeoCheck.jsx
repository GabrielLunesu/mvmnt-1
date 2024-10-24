import React from 'react';
import Link from 'next/link';

export default function SeoCheck() {
  return (
      <div className=" bg-white  mx-auto px-4">
        <div className="bg-gradient-to-b from-pink-300 via-pink-700 to-purple-900 rounded-2xl p-0.5 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-white py-16 px-4 w-full" data-np-autofill-form-type="subscribe" data-np-checked="1" data-np-watching="1">
            <h1 className="font-heading text-gray-900 text-center text-4xl md:text-5xl font-bold mb-4">Doe de <b>gratis</b> SEO check!</h1>
            <p className="text-gray-600 w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto text-center mb-10">Klik hieronder om je website op SEO te checken. Vind je SEO fouten en krijg tips om je website beter te laten presteren.</p>
            <form action="">
              <div className="relative max-w-sm mx-auto mb-6">
                <div className="absolute top-0 bottom-0 left-1/4 right-1/4 bg-purple-500 opacity-50 blur-xl"></div>
                <div className="relative z-10 flex justify-center">
                  <Link href="/seo-check" className="group relative inline-block overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full"></div>
                    <div className="relative z-10 flex items-center py-3 px-6 bg-purple-900 group-hover:bg-pink-600 group-focus:bg-pink-600 rounded-full transition duration-200">
                      <p className="text-white text-lg">SEO Check</p>
                    </div>
                  </Link>
                </div>
              </div>
            </form>
            <p className="text-gray-500 text-center text-sm">Volledig gratis. Hoogwaardige SEO rapport door <u>mvmnt.</u></p>
          </div>
        </div>
      </div>
  );
}
