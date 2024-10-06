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

export default function CaseStudy({ params }) {
    const { data: caseStudy, error } = useSWR(`/api/case-studies/${params.slug}`, fetcher);

    if (error) return <div className="container mx-auto px-4 py-16 text-center">Failed to load case study</div>;
    if (!caseStudy) return <div className="container mx-auto px-4 py-16 text-center">Loading...</div>;

    return (
        <div className="bg-purple-900 min-h-screen">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <motion.div {...fadeInUp} className="mb-8">
                    <Link href="/cases" className="inline-flex mt-12 items-center text-purple-600 hover:text-purple-800 transition-colors">
                        <ArrowLeft className="mr-2" size={20} />
                        <span>Back to all cases</span>
                    </Link>
                </motion.div>

                <motion.h1 {...fadeInUp} className="text-4xl font-bold mb-8 text-center">{caseStudy.title}</motion.h1>

                <motion.div {...fadeInUp} className="mb-12">
                    <Image 
                        src={caseStudy.image} 
                        alt={caseStudy.title} 
                        width={800} 
                        height={600} 
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                </motion.div>

                <motion.p {...fadeInUp} className="text-gray-700 mb-12 text-lg leading-relaxed">{caseStudy.description}</motion.p>

                {caseStudy.sections?.map((section, index) => (
                    <motion.div 
                        key={index}
                        {...fadeInUp} 
                        className="bg-white rounded-lg shadow-md p-8 mb-12 last:mb-0"
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{section.title}</h2>
                        <p className="text-gray-700">{section.content}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}