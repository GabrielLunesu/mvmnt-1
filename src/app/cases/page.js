"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';

export default function Cases() {
    return (
        <div className="container mx-auto px-4 py-16 bg-gradient-to-t from-white via-purple-700 to-black from-white">
            <h1 className="text-4xl font-bold text-center mb-12 mt-12 text-white">Our Case Studies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((caseStudy) => (
                    <Link href={`/cases/${caseStudy.slug}`} key={caseStudy.id}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105">
                            <Image 
                                src={caseStudy.image} 
                                alt={caseStudy.title} 
                                width={400} 
                                height={300} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{caseStudy.title}</h2>
                                <p className="text-gray-600">{caseStudy.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}