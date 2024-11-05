'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 border-b border-purple-300 text-left focus:outline-none"
      >
        <div className="flex items-center justify-between">
          <p className="text-purple-900 text-lg font-semibold">{question}</p>
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="#4C1D95"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 7.5L10 12.5L15 7.5" />
          </motion.svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-purple-900 py-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Faq() {
  const faqItems = [
    {
      question: "Wat betekent MVMNT?",
      answer: "De naam MVMNT staat voor beweging en innovatie, iets wat we in al onze projecten tot leven brengen."
    },
    {
      question: "Wat houdt onze complimenten-garantie in?",
      answer: "Onze complimenten garantie betekent dat we alles in het werk stellen om je te verrassen met een resultaat dat je verwachtingen overtreft. Van een persoonlijk intakegesprek en een design dat perfect past bij je merk tot een vlekkeloze lancering: we gaan voor niets minder dan een WOW ervaring. Wij zijn pas tevreden als jij complimenten van anderen krijgt over je website. Zodat je met trots zegt dat MVMNT je website heeft gemaakt."
    },
    {
      question: "Waarom zijn klanten overtuigd van websites van MVMNT?",
      answer: "Er zijn genoeg website ontwikkelaars die een aantrekkelijke website kunnen maken, maar wat heb je aan een mooi ontwerp als niemand het ziet? Mvmnt weet dat een effectieve website méér is dan alleen een visueel plaatje. Een succesvolle website combineert een aantrekkelijk design met slimme functionaliteit en uitstekende vindbaarheid in Google. Want wat levert een website op zonder bezoekers? Wij zorgen voor een perfecte balans tussen visuele aantrekkingskracht, gebruiksvriendelijke navigatie en strategische SEO, zodat je website niet alleen indruk maakt, maar ook gevonden wordt door je doelgroep. Met Mvmnt haal je zoveel meer uit je nieuwe website: meer bezoekers, meer klanten, meer groei."
    },
    {
      question: "Wat is SEO?",
      answer: "Stel, je bent eigenaar van een luxe horlogewinkel. Om je producten in de schijnwerpers te zetten, huur je een enorme ruimte op een drukke markt en trek je duizenden bezoekers aan met een grote opening. Duizenden mensen lopen door de winkel, maar velen zijn simpelweg nieuwsgierig of komen alleen voor de hapjes en drankjes. Van die duizenden bezoekers kunnen zich maar een handvol mensen jouw horloges veroorloven of hebben er echt interesse in. Uiteindelijk verkoop je er maar één of twee horloges, ondanks de enorme toestroom aan mensen. Als je echter dezelfde tijd en energie had gestoken in een kleinere, exclusieve presentatie gericht op mensen die echt in de markt zijn voor luxe horloges, zoals in een kleine showroom met gepersonaliseerde afspraken voor potentiële kopers, dan was je waarschijnlijk met veel minder bezoekers, maar met veel meer omzet geëindigd. En precies dat proces is de SEO van een goede website van Mvmnt."
    },
    {
      question: "Wat is een website met goede SEO?",
      answer: "Een goede SEO-strategie zorgt ervoor dat je website niet zomaar ergens in de zoekresultaten verdwijnt, maar juist bovenaan staat wanneer je doelgroep zoekt. Goede SEO is complex en betekent meer dan alleen de juiste zoekwoorden gebruiken; het draait om relevante content als blogs, technische optimalisatie en een snelle laadtijd. Dit proces gaat niet over een nacht ijs, maar vergt tijd en geduld. Met de juiste SEO trek je op termijn niet alleen bezoekers aan, maar bereik je ook de mensen die echt op zoek zijn naar je producten of diensten. Bij Mvmnt zorgen we ervoor dat je website opvalt en blijft groeien in Google, zodat je niet alleen meer bezoekers trekt, maar ook meer klanten binnenhaalt."
    },
    {
      question: "Hoelang duurt het om een website te maken bij MVMNT?",
      answer: "Een website realiseren is maatwerk en bestaat uit het afstemmen van jou wensen en behoeften en de vertaling daarvan naar de website zelf. Er is dus geen eenduidig antwoord, omdat er veel factoren een rol spelen. Maar wij weten ondertussen dat de gemiddelde doorlooptijd 14 dagen is voor het hele proces, mede afhankelijk van jouw beschikbaarheid"
    },
    {
      question: "Waarom zou ik niet zelf proberen een website te maken?",
      answer: "Tegenwoordig heb je allerlei tools om zelf een website te bouwen, het is mogelijk een simpele oplossing te creëren, als je niet veel wensen hebt. De kwaliteit van een dergelijke website is in alle facetten laag, denk aan laadtijd en de gebondenheid aan designs, die ook door vele andere partijen gebruikt worden. Daarnaast is SEO optimalisatie haast onmogelijk. Maar als je alleen een website zoekt, om een website te hebben is dat natuurlijk een perfecte oplossing."
    },
    {
      question: "Kan MVMNT mijn visie en creatieve ideeën tot leven brengen?",
      answer: "Absoluut! Bij MVMNT kunnen we alles maken wat je online vindt en wat je in je hoofd hebt. We brengen jouw visie en ideeën tot leven door ze om te zetten in unieke, op maat gemaakte oplossingen die perfect aansluiten bij jouw wensen en doelen."
    }
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-purple-900 text-4xl text-center font-semibold mb-20">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
