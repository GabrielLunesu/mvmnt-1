import React from 'react';
import Image from 'next/image';

const FeatureCard = ({ iconSrc, title, description }) => (
  <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
    <div className="bg-purple-900 rounded-3xl p-6 h-full">
      <div className="rounded-full border border-pink-500 w-10 h-10 flex items-center justify-center mb-4">
        <div className="bg-pinkSecondary-900 w-8 h-8 rounded-full border border-white border-opacity-10 flex items-center justify-center">
          <Image className="h-4" src={iconSrc} alt={title} width={16} height={16} />
        </div>
      </div>
      <p className="text-white text-lg font-bold mb-1">{title}</p>
      <p className="text-white text-opacity-70 text-sm max-w-xs">{description}</p>
    </div>
  </div>
);

export default function Features() {
  return (
    <section className="bg-white  py-28">
      <div className="container mx-auto px-4">
        <p className="uppercase text-center text-purple-900 text-xs tracking-widest mb-4">FEATURES</p>
        <h1 className="font-heading text-purple-900 text-center text-4xl md:text-5xl font-bold mb-4">Designed for the modern business owners</h1>
        <p className="text-purple-900 text-opacity-70 text-lg text-center max-w-2xl mx-auto mb-20">Our software provides intuitive bookkeeping solutions, allowing you to focus on growing your business rather than crunching numbers.</p>
        <div className="flex flex-wrap -m-4">
          <FeatureCard 
            iconSrc="/vista-assets/images/features/money.svg"
            title="Simple Accounting"
            description="Keep track of your financial transactions with ease and simplicity."
          />
          <FeatureCard 
            iconSrc="/vista-assets/images/features/profile.svg"
            title="Multiple Accounts"
            description="Gain a comprehensive financial overview of all your accounts."
          />
          <FeatureCard 
            iconSrc="/vista-assets/images/features/chart.svg"
            title="Detailed Analytics"
            description="Gain in-depth insights into your financial well-being with a diverse range of data."
          />
          <FeatureCard 
            iconSrc="/vista-assets/images/features/cloud.svg"
            title="Cloud-Based"
            description="Our platform is cloud-based, you can access your financial data from anywhere, at any time."
          />
        </div>
      </div>
    </section>
  );
}
