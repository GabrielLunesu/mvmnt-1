"use client"
import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Link from 'next/link';
import Image from 'next/image';

const cases = [
  {
    id: 1,
    title: "Innovative App Design",
    description: "Revolutionizing user experience through intuitive interface design.",
    image: "https://placehold.co/1000x2000/png",
    color: "#ff6b6b",
    slug: "innovative-app-design"
  },
  {
    id: 2,
    title: "E-commerce Platform Overhaul",
    description: "Boosting online sales with a streamlined shopping experience.",
    image: "https://placehold.co/1000x2000/png",
    color: "#4ecdc4",
    slug: "ecommerce-platform-overhaul"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Empowering data-driven decisions with real-time insights.",
    image: "https://placehold.co/1000x2000/png",
    color: "#45b7d1",
    slug: "ai-powered-analytics"
  },
  {
    id: 4,
    title: "Blockchain Supply Chain Solution",
    description: "Enhancing transparency and efficiency in global logistics.",
    image: "https://placehold.co/1000x2000/png",
    color: "#f9d56e",
    slug: "blockchain-supply-chain"
  }
];

const CaseStudy = ({ caseData, index }) => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      set({ y: scrollY });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [set]);

  const isEven = index % 2 === 0;

  return (
    <div className={`h-screen w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
        <Image 
          src={caseData.image} 
          alt={caseData.title}
          layout="fill"
          objectFit="cover"
        />
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
      {cases.map((caseItem, index) => (
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