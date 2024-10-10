import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="items-center bg-gradient-to-b from-purple-900 via-purple-700 to-purple-900 pt-28 pb-40">
      <div className=" mx-auto px-4">
        <div className="flex flex-wrap items-center -m-4">
          
          <div className="w-full p-10 ">
            <div className="p-10 bg-gradient-to-t from-purple-300 via-pink-700 to-purple-900 rounded-3xl relative max-w-lg mx-auto mb-28 lg:mb-0" style={{height: '470px'}}>
              <div className="absolute top-10 left-5 md:left-10 right-5 md:right-10">
                <div className="bg-white rounded-2xl p-8 w-full">
                  <form action="">
                    <label htmlFor="name" className="block text-sm mb-2 font-medium">
                      <span>Name</span>
                      <span className="text-pink-500">*</span>
                    </label>
                    <input type="text" id="name" className="px-4 py-3 rounded-full mb-8 bg-gray-50 text-sm placeholder-black placeholder-opacity-50 text-black border border-transparent focus:border-black focus:border-opacity-30 transition duration-200 outline-none w-full" placeholder="Name" />
                    
                    <label htmlFor="email" className="block text-sm mb-2 font-medium">
                      <span>Email</span>
                      <span className="text-pink-500">*</span>
                    </label>
                    <input type="email" id="email" className="px-4 py-3 rounded-full mb-8 bg-gray-50 text-sm placeholder-black placeholder-opacity-50 text-black border border-transparent focus:border-black focus:border-opacity-30 transition duration-200 outline-none w-full" placeholder="Email address" />
                    
                    <label htmlFor="message" className="block text-sm mb-2 font-medium">Message</label>
                    <textarea id="message" rows="5" className="px-4 py-3 rounded-2xl resize-none mb-8 bg-gray-50 text-sm placeholder-black placeholder-opacity-50 text-black border border-transparent focus:border-black focus:border-opacity-30 transition duration-200 outline-none w-full" placeholder="Enter a message..."></textarea>
                    
                    <button type="submit" className="group relative inline-block p-0.5 w-full font-semibold overflow-hidden rounded-full shadow-pink hover:shadow-none focus:shadow-none">
                      <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-pink-500 group-hover:from-white group-focus:from-white group-hover:to-transparent group-focus:to-white group-hover:opacity-40 group-focus:opacity-20 rounded-full"></div>
                      <div className="relative z-50 py-3 px-4 bg-pink-500 group-hover:bg-purple-900 group-focus:bg-purple-900 rounded-full transition duration-200">
                        <p className="text-white group-focus:text-opacity-40 transition duration-200">Send Message</p>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
