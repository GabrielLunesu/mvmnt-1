"use client"

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="py-6 pt-10 bg-white">
      <div className=" mx-auto px-4 ">
        
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 w-fit mx-auto text-white p-4 bg-purple-900 rounded-lg">Liefde:</h2>
     
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
            <InfiniteMovingCards items={testimonials.slice().reverse()} direction="right" speed="fast" />
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Mvmnt heeft ons geweldig geholpen met een professionele website voor onze partytenten. Klanten kunnen nu makkelijk reserveren en we hebben veel positieve reacties gekregen. Sinds de lancering zijn onze boekingen flink gestegen waardoor we ons bedrijf verder konden uitbreiden!",
    name: "Marlon",
    title: "Airbros Parties",
  },
  {
    quote: "Mvmnt heeft ons geholpen om ons unieke concept van gratis woningverkoop helder in beeld te brengen. Het biedplatform is super gebruiksvriendelijk en onze klanten zijn daar erg enthousiast over. We hebben al veel nieuwe gebruikers en aanbiedingen sinds de lancering. Echt een gamechanger voor ons!",
    name: "Leonard",
    title: "Troa",
  },
  {
    quote: "Mvmnt heeft een schitterende website voor ons gemaakt die onze videoclips echt laat stralen. Klanten vinden het nu veel eenvoudiger om contact met ons op te nemen, en dat heeft geleid tot een flinke stijging in onze boekingen. We zijn echt onder de indruk van het resultaat!",
    name: "Kadirr",
    title: "Confiance Visuals",
  },
  {
    quote: "De samenwerking met Mvmnt was top! Onze nieuwe website legt de nadruk op onze airco-oplossingen en maakt het voor klanten heel makkelijk om informatie te vinden. Sinds de lancering zien we een aanzienlijke toename in aanvragen. Dit heeft ons bedrijf echt een boost gegeven!",
    name: "Donato",
    title: "Lunesu Airco Techniek",
  },
];
