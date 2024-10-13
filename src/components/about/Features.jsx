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
        <p className="uppercase text-center text-purple-900 text-xs tracking-widest mb-4">Wat we doen</p>
        <h1 className="font-heading text-purple-900 text-center text-4xl md:text-5xl font-bold mb-4">Ontworpen voor de moderne ondernemer</h1>
        <p className="text-purple-900 text-opacity-70 text-lg text-center max-w-2xl mx-auto mb-20">Als full-service digital agency met een specialisatie in web design bieden we complete oplossingen die jouw bedrijf laten groeien, zonder dat je in de techniek hoeft te duiken.</p>
        <div className="flex flex-wrap -m-4">
          <FeatureCard 
            iconSrc="/vista-assets/images/features/money.svg"
            title="Gebruiksvriendelijk en snel"
            description="Onze websites combineren intuïtief design met topprestaties en snelle laadtijden."
          />
          <FeatureCard
            iconSrc="/vista-assets/images/features/profile.svg"
            title="SEO-geoptimaliseerd vanaf dag één"
            description="We zorgen ervoor dat jouw website meteen goed vindbaar is in zoekmachines, voor maximale online zichtbaarheid."
          />
          <FeatureCard 
            iconSrc="/vista-assets/images/features/chart.svg"
            title="Volledig schaalbaar"
            description="Van eenvoudige bedrijfswebsites tot uitgebreide platforms, wij bieden oplossingen die met jouw bedrijf meegroeien."
          />
          <FeatureCard 
            iconSrc="/vista-assets/images/features/cloud.svg"
            title="Alles onder één dak"
            description="Naast web design verzorgen we ook marketing, SEO, en onderhoud, zodat je je kunt focussen op wat echt telt: ondernemen."
          />
        </div>
      </div>
    </section>
  );
}
