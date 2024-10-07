import React from 'react';

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-t from-pink-300 via-pink-700 to-purple-900 py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-white text-center text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
        <p className="text-white text-opacity-70 text-center text-lg mb-20 max-w-2xl mx-auto">
          Our team is here to help you access capital and grow on your terms. Check out the resources below and reach out directly if you have any questions.
        </p>
        <div className="rounded-2xl border border-white border-opacity-20 p-3 bg-white bg-opacity-10 max-w-xl mx-auto">
          <div className="rounded-2xl bg-purple-900 w-full p-8">
            <form action="">
              <label htmlFor="name" className="block text-sm mb-2 text-white font-medium">
                <span>Name</span>
                <span className="text-pink-500">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                className="px-4 py-3 mb-8 rounded-full border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border focus:border-opacity-50 transition duration-200 outline-none w-full" 
                placeholder="Name" 
              />
              
              <label htmlFor="email" className="block text-sm mb-2 text-white font-medium">
                <span>Email</span>
                <span className="text-pink-500">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                className="px-4 py-3 mb-8 rounded-full border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border focus:border-opacity-50 transition duration-200 outline-none w-full" 
                placeholder="Email address" 
              />
              
              <label htmlFor="message" className="block text-sm mb-2 text-white font-medium">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="px-4 py-3 mb-8 rounded-2xl resize-none border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border focus:border-opacity-50 transition duration-200 outline-none w-full" 
                placeholder="Enter a message..."
              ></textarea>
              
              <button 
                type="submit" 
                className="group relative inline-block w-full p-0.5 font-semibold overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
                <div className="relative z-50 py-3 px-4 bg-white group-hover:bg-purple-900 group-focus:bg-purple-900 rounded-full transition duration-200">
                  <p className="text-purple-900 group-hover:text-white group-focus:text-white group-focus:text-opacity-40 transition duration-200">Send Message</p>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
