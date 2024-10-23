"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';
import CasesHero from '@/components/cases/CasesHero';

export const metadata = {
  title: 'Succesvolle Projecten | MVMNT Webdesign Portfolio',
  description: 'Ontdek hoe MVMNT bedrijven heeft geholpen met op maat gemaakte websites. Bekijk onze case studies en leer hoe wij waarde creëren voor onze klanten.',
  keywords: 'webdesign portfolio, case studies, succesvolle projecten, klantresultaten, website voorbeelden, MVMNT projecten, digitale oplossingen',
  openGraph: {
    title: 'MVMNT Portfolio: Transformerende Webdesign Projecten',
    description: 'Zie hoe MVMNT bedrijven helpt groeien met innovatieve webdesign oplossingen. Ontdek onze succesvolle projecten en laat je inspireren!',
    images: [
      {
        url: 'https://mvmnt.nl/images/mvmnt-cases-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MVMNT Webdesign Portfolio Overzicht',
      },
    ],
  },
};

const CaseStudyWidget = ({ caseData, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
      <div className="w-2/3 mx-auto lg:w-1/2">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <Image 
            src={caseData.image} 
            alt={caseData.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        </div>
      </div>
      <div className="w-2/3 mx-auto lg:w-1/2 text-black">
        <h3 className="text-2xl font-bold mb-3">{caseData.title}</h3>
        <p className="text-gray-700 mb-4">{caseData.description}</p>
        <div className="flex gap-2 mb-4">
          {caseData.technologies && caseData.technologies.map((tech, index) => (
            <Image 
              key={index}
              src={`/icons/${tech}.svg`}
              alt={tech}
              width={24}
              height={24}
            />
          ))}
        </div>
        {caseData.url && (
          <Link href={caseData.url} className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">
            {caseData.url} ↗
          </Link>
        )}
        <Link href={`/cases/${caseData.slug}`} className="inline-block bg-purple-600 text-white py-2 px-4 rounded text-sm font-semibold hover:bg-purple-700 transition-all mt-4">
          Bekijk Case →
        </Link>
      </div>
    </div>
  );
};

const CaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <CasesHero />
      <div className="container mx-auto md:px-24 py-16">
        {caseStudies.map((caseItem, index) => (
          <CaseStudyWidget 
            key={caseItem.id}
            caseData={caseItem}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyPage;
