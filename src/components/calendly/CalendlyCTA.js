'use client';
import React, { useState, useEffect } from 'react';
import CalendlyEmbed from './CalendlyEmbed';


export default function CalendlyCTA() {
    const [containerHeight, setContainerHeight] = useState('64rem');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) { // Mobile
                setContainerHeight('40rem');
            } else if (width < 1024) { // Tablet
                setContainerHeight('50rem');
            } else { // Desktop
                setContainerHeight('50rem');
            }
        };

        handleResize(); // Set initial height
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calendly URL with color parameters for a black theme
    const calendlyUrl = "https://calendly.com/mvmnt-info/strategie-sessie-mvmnt?background_color=000000&text_color=ffffff&primary_color=ffffff";

    return (
     
            <>
                <section className="pt-24 pb-32 bg-gradient-to-t from-purple-900 via-purple-500 to-white">
                    <div className="container mx-auto px-4">
                        <h1 className="font-heading text-center text-4xl md:text-6xl font-bold mb-6">Klaar om te starten?</h1>
                        <p className="text-opacity-70 text-center text-lg mb-20 max-w-2xl mx-auto">Laten we jouw visie werkelijkheid maken. Plan hieronder een afspraak met ons in. We pakken het samen zo snel mogelijk op.</p>
                        <div className="rounded-2xl border border-white border-opacity-20 p-3 bg-white bg-opacity-10 max-w-xl mx-auto">
                            <div 
                                className="rounded-2xl bg-black w-full p-8"
                                style={{ height: containerHeight }}
                            >
                                <CalendlyEmbed 
                                    url={calendlyUrl}
                                    className="rounded-2xl" 
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </>
     
    );
}

