import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <>
                <section className="py-20 bg-purple-900">
  <div className="container mx-auto px-4">
    <div className="pb-20 border-b border-white border-opacity-30 mb-10">
      <div className="flex flex-wrap justify-between -m-4">
        <div className="w-full lg:w-1/6 p-4">
          <a href="#" className="inline-block">
            <img className="h-16" src="https://static.shuffle.dev/uploads/files/b9/b9efa4868a4e6d43f0e0bea33288205f1c6f3cf9/mv.png" alt />
          </a>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 p-4">
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#" className="text-white hover:text-opacity-70 text-xl transition duration-200">Features</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-opacity-70 text-xl transition duration-200">How it works</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 p-4">
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#" className="text-white hover:text-opacity-70 text-xl transition duration-200">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-opacity-70 text-xl transition duration-200">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 p-4">
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#" className="text-white hover:text-opacity-70 text-xl transition duration-200">About</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-opacity-70 text-xl transition duration-200">Blog</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 p-4">
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#" className="text-white hover:text-opacity-70 text-xl transition duration-200">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-opacity-70 text-xl transition duration-200">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center flex-wrap gap-6">
      <p className="text-white">© Vista. All rights reserved.</p>
      <div className="flex flex-wrap gap-6">
        <a href="#">
          <img src="vista-assets/images/logos/twitter-x-logo.svg" alt />
        </a>
        <a href="#">
          <img src="vista-assets/images/logos/linkedin-logo.svg" alt />
        </a>
        <a href="#">
          <img src="vista-assets/images/logos/instagram-logo.svg" alt />
        </a>
        <a href="#">
          <img src="vista-assets/images/logos/facebook-logo.svg" alt />
        </a>
      </div>
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

