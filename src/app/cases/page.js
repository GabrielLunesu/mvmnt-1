"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';
import { Hero } from '@/components/cases/Hero';

const CaseStudy = ({ caseData, index }) => {
    return (
      <div className="h-screen w-full relative overflow-hidden snap-start bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{caseData.title}</h2>
            <p className="text-lg md:text-xl mb-6">{caseData.description}</p>
            <Link href={`/cases/${caseData.slug}`} className="inline-block bg-white text-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
              Verder lezen
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-video">
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
          </div>
        </div>
      </div>
    );
  };
  
  const CaseStudyPage = () => {
    return (
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div className="h-screen bg-purple-900 flex items-center justify-center snap-start">
          <Hero />
        </div>
        {caseStudies.map((caseItem, index) => (
          <CaseStudy 
            key={caseItem.id}
            caseData={caseItem} 
            index={index}
          />
        ))}
      </div>
    );
  };
  
  export default CaseStudyPage;
