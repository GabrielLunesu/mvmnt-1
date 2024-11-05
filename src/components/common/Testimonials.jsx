"use client"

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="py-6 pt-10 bg-white">
      <div className=" mx-auto px-4 ">
        
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 w-fit mx-auto text-white p-4 bg-purple-900 rounded-lg">Liefde:</h2>
     
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col gap-2">
            <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
            {/* <InfiniteMovingCards items={testimonials.slice().reverse()} direction="right" speed="fast" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Wij verhuren partytenten en zijn zeer tevreden over onze samenwerking met Mvmnt. Ze denken mee over het creatieve proces en de impact op onze bedrijfsvoering. Vanaf de intake tot de oplevering verliep alles vlekkeloos, en dankzij de nieuwe website zien we duidelijk meer aanvragen. Ik raad Mvmnt van harte aan voor iedereen die een website wil om zijn bedrijf te laten groeien.",
    name: "Marlon",
    title: "Airbros Parties",
  },
  {
    quote: "Wij hadden een idee voor een eigen platform voor ogen, dat Mvmnt in de praktijk heeft gebracht. We kunnen alleen maar zeggen dat jullie altijd meegedacht hebben in oplossingen in de plaats van problemen. We weten dat we het jullie niet makkelijk hebben gemaakt, maar zijn ontzettend blij met het resultaat. Mannen, bedankt!",
    name: "Leonard",
    title: "Troa",
  },
  {
    quote: "Omdat wij een jong en fris bedrijf zijn dat zich bezig houdt met videografie, zochten we naar een website bouwer die ons de uitstraling kon geven, die bij onze activiteiten pasten. We zijn heel blij met de nieuwe website.",
    name: "Kadirr",
    title: "Confiance Visuals",
  },
  {
    quote: "We zijn zeer tevreden met de nieuwe website voor ons aircobedrijf. De intake was grondig en de communicatie helder. De feedback op het ontwerp werd direct opgepakt en aangepast. De website is gebruiksvriendelijk en heeft een frisse uitstraling. We ontvangen al positieve reacties van klanten en merken dat we beter gevonden worden.",
    name: "Donato",
    title: "Lunesu Airco Techniek",
  },
];
