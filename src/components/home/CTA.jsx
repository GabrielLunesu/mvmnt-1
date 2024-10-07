import React from 'react';

export default function CTA() {
    return (
        <React.Fragment>
            <>
                <section className="pt-24 pb-32 bg-gradient-to-t from-purple-900 via-purple-500 to-white">
  <div className="container mx-auto px-4">
    <h1 className="font-heading text-center text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
    <p className="text-opacity-70 text-center text-lg mb-20 max-w-2xl mx-auto">Our team is here to help you access capital and grow on your terms. Check out the resources below and reach out directly if you have any questions.</p>
    <div className="rounded-2xl border border-white border-opacity-20 p-3 bg-white bg-opacity-10 max-w-xl mx-auto">
      <div className="rounded-2xl bg-darkPink-900 w-full p-8">
        <form action>
          <label htmlFor="name" className="block text-sm mb-2 text-white font-medium">
            <span>Name</span>
            <span className="text-pink-500">*</span>
          </label>
          <input type="text" id="name" className="px-4 py-3 mb-8 rounded-full border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border focus:border-opacity-50 transition duration-200 outline-none w-full" placeholder="Name" />
          <label htmlFor="email" className="block text-sm mb-2 text-white font-medium">
            <span>Email</span>
            <span className="text-pink-500">*</span>
          </label>
          <input type="email" id="email" className="px-4 py-3 mb-8 rounded-full border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border focus:border-opacity-50 transition duration-200 outline-none w-full" placeholder="Email address" />
          <label htmlFor="message" className="block text-sm mb-2 text-white font-medium">Message</label>
          <textarea id="message" rows={5} className="px-4 py-3 mb-8 rounded-2xl resize-none border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border focus:border-opacity-50 transition duration-200 outline-none w-full" placeholder="Enter a message..." defaultValue={""} />
          <button type="submit" className="group relative inline-block p-0.5 w-full font-semibold overflow-hidden rounded-full shadow-pink hover:shadow-none focus:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-pink-500 group-hover:from-white group-focus:from-white group-hover:to-transparent group-focus:to-white group-hover:opacity-40 group-focus:opacity-20 rounded-full" />
            <div className="relative z-50 py-3 px-4 bg-pink-500 group-hover:bg-pinkSecondary-900 group-focus:bg-pinkSecondary-900 rounded-full transition duration-200">
              <p className="text-white group-focus:text-opacity-40 transition duration-200">Send Message</p>
            </div>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

