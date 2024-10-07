"use client"
import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';

const CaseStudy = ({ caseData, index }) => {
    const isEven = index % 2 === 0;

    return (
      <div className={`h-screen w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
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
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-600 to-purple-900"></div>
          <div className="z-10 text-center px-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{caseData.title}</h2>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-xl mx-auto">{caseData.description}</p>
            <Link href={`/cases/${caseData.slug}`} className="inline-block bg-white text-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  const CaseStudyPage = () => {
    return (
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div className="h-screen bg-purple-900 flex items-center justify-center snap-start">
          <h1 className="text-6xl md:text-7xl font-bold text-white text-center px-4">
            Our Case Studies
          </h1>
        </div>
        {caseStudies.map((caseItem, index) => (
          <div key={caseItem.id} className="snap-start">
            <CaseStudy 
              caseData={caseItem} 
              index={index + 1}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default CaseStudyPage;