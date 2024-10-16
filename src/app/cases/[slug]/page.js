"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const titleAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, type: "spring", stiffness: 100 }
};

const CTA = () => (
    <motion.div 
        {...fadeInUp} 
        className="bg-transparent text-white py-16 px-4 text-center"
    >
        <h2 className="text-3xl font-bold mb-4">Klaar om uw project te starten?</h2>
        <p className="text-xl mb-8">Laten we samenwerken om uw visie werkelijkheid te maken.</p>
        <Link href="/contact" className="bg-white text-purple-700 py-3 px-8 rounded-full font-semibold text-lg hover:bg-purple-100 transition-colors duration-300">
            Neem contact op
        </Link>
    </motion.div>
);

export default function CaseStudy({ params }) {
    const { data: caseStudy, error } = useSWR(`/api/case-studies/${params.slug}`, fetcher);

    if (error) return <div className="container mx-auto px-4 py-16 text-center text-white">Failed to load case study</div>;
    if (!caseStudy) return <div className="container mx-auto px-4 py-16 text-center text-white">Loading...</div>;

    return (
        <div className="bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 min-h-screen text-white">
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <motion.div {...fadeInUp} className="mb-12">
                    <Link href="/cases" className="inline-flex items-center text-purple-200 hover:text-white transition-colors">
                        <ArrowLeft className="mr-2" size={20} />
                        <span>Terug naar alle cases</span>
                    </Link>
                </motion.div>

                <motion.h1 
                    {...titleAnimation} 
                    className="text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-300"
                >
                    {caseStudy.title}
                </motion.h1>

                <motion.div {...fadeInUp} className="mb-16 relative aspect-video">
                    <Image 
                        src={caseStudy.image} 
                        alt={caseStudy.title} 
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-2xl"
                    />
                </motion.div>

                <motion.p {...fadeInUp} className="text-purple-100 mb-16 text-xl leading-relaxed">
                    {caseStudy.description}
                </motion.p>

                {caseStudy.sections?.map((section, index) => (
                    <motion.div 
                        key={index}
                        {...fadeInUp} 
                        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-xl p-8 mb-12 last:mb-0"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-purple-200">{section.title}</h2>
                        <p className="text-purple-50 text-lg leading-relaxed">{section.content}</p>
                    </motion.div>
                ))}
            </div>
            <CTA />
        </div>
    );
}
