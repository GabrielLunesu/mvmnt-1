"use client"
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Pricing() {
    const [isMonthly, setIsMonthly] = useState(true);

    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        reset: true,
    });

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-center text-5xl font-bold mb-4 text-darkPink-900">Flexibel, voor jou</h2>
                <p className="text-center w-1/2 mx-auto text-gray-600 mb-10">Op maat gemaakte pakketten die aansluiten bij jouw unieke behoeften. Betaalbare oplossingen met maximale impact, ongeacht jouw budget.</p>
                
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1 rounded-full inline-flex">
                        <button 
                            className={`py-2 px-4 rounded-full transition-colors duration-300 ${isMonthly ? 'bg-darkPink-900 text-white' : 'text-darkPink-900'}`}
                            onClick={() => setIsMonthly(true)}
                        >
                            Maandelijks
                        </button>
                        <button 
                            className={`py-2 px-4 rounded-full transition-colors duration-300 ${!isMonthly ? 'bg-darkPink-900 text-white' : 'text-darkPink-900'}`}
                            onClick={() => setIsMonthly(false)}
                        >
                           Eenmalig
                        </button>
                    </div>
                </div>

                <animated.div style={props} className="flex flex-wrap justify-center items-start gap-8">
                    <PricingCard
                        title="Essential Pro"
                        price={isMonthly ? "€99" : "€1695"}
                        period={isMonthly ? "/per maand" : " eenmalig"}
                        description="Meer dan een prachtige website. Essential Pro creërt een converterende online aanwezigheid die zowel visueel indruk maakt als technisch optimaal is. Vindbaar, veilig en schaalbaar—dit pakket verhoogt de lat voor elk bedrijf."
                        features={[
                            "Custom responsive design (4/8/12 pagina's)",
                            "Basis SEO Installatie",
                            "Social media integratie",
                            "Whatsapp + email integratie",
                            "Content Management Systeem",
                            "Website beheer training sessie",
                            "Google Maps integratie"
                        ]}
                        highlighted={true}
                    />
                    <PricingCard
                        title="Dynamic"
                        price={isMonthly ? "€250" : "€2495"}
                        period={isMonthly ? "/per maand" : " eenmalig"}
                        description="Ontworpen voor groei. Dynamic combineert een sterke marketingfocus met geavanceerde SEO-optimalisatie en maatwerkfunctionaliteiten. Dit pakket biedt de tools aan om je concurrenten te overtreffen en jouw bedrijf online te laten excelleren."
                        features={[
                            "Custom responsive design (tot 20 pagina's)",
                            "Geavanceerde SEO Installatie",
                            "Social media integratie",
                            "Whatsapp + email integratie",
                            "Content Management Systeem",
                            "Website beheer training sessie",
                            "Google Maps integratie",
                            "Custom CRM integratie",
                            "Custom modules"
                        ]}
                    />
                    <PricingCard
                        title="Limitless"
                        price="€9000"
                        period=" vanaf"
                        description="Onbegrensde mogelijkheden. Een volledig op maat gecodeerde website, exclusief ontwikkeld voor jouw merk. Geen limieten, geen concessies—pure digitale perfectie op het hoogste niveau."
                        features={[
                            "Volledig maatwerk",
                            "eigen projectmanager",
                            "Full stack development webapps + mobiele apps",
                            "Schaalbaarheidsplanning",
                            "Onderhoudssupport op maat",
                            "Custom API"
                        ]}
                    />
                </animated.div>
            </div>
        </section>
    );
}

function PricingCard({ title, price, period, description, features, highlighted = false }) {
    const cardClass = highlighted
        ? "bg-gradient-to-b from-purple-400 to-purple-900 text-white"
        : "bg-white text-darkPink-900 border border-gray-200";

    const buttonClass = highlighted
        ? "bg-white text-purple-900 hover:bg-gray-100"
        : "bg-purple-900 text-white hover:bg-purple-800";

    return (
        <div className={`w-full md:w-96 p-6 rounded-3xl shadow-lg ${cardClass} ${highlighted ? 'transform scale-105' : ''} flex flex-col`}>
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">{price}</span>
                <span className="text-sm ml-1 mb-1 opacity-80">{period}</span>
            </div>
            <p className="mb-6 text-sm">{description}</p>
            <ul className="space-y-3 mb-6 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg className={`w-5 h-5 mr-2 mt-1 flex-shrink-0 ${highlighted ? 'text-purple-300' : 'text-purple-500'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full py-2 rounded-full font-semibold ${buttonClass} mt-auto`}>
                Get Started
            </button>
        </div>
    );
}
