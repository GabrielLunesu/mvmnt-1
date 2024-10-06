"use client"
import React, { useState } from 'react';

export default function Pricing() {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-center text-5xl font-bold mb-4 text-darkPink-900">Flexibel, voor jou</h2>
                <p className="text-center text-gray-600 mb-10">Prijzen die met je mee groeien</p>
                
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1 rounded-full inline-flex">
                        <button 
                            className={`py-2 px-4 rounded-full ${isMonthly ? 'bg-darkPink-900 text-white' : 'text-darkPink-900'}`}
                            onClick={() => setIsMonthly(true)}
                        >
                            Maandelijks
                        </button>
                        <button 
                            className={`py-2 px-4 rounded-full ${!isMonthly ? 'bg-darkPink-900 text-white' : 'text-darkPink-900'}`}
                            onClick={() => setIsMonthly(false)}
                        >
                           Eenmalig
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    <PricingCard
                        title="Essential pro"
                        price={isMonthly ? "€99" : "€1695"}
                        period={isMonthly ? "/per maand" : " eenmalig"}
                        features={[
                            "Customized invoices",
                            "Automated reminders",
                            "Enable multiple payments",
                            "Helpful reports"
                        ]}
                        highlighted={true}
                    />
                    <PricingCard
                        title="Dynamic"
                        price={isMonthly ? "€250" : "€2495"}
                        period={isMonthly ? "/per maand" : " eenmalig"}
                        features={[
                            "Everything in Basic",
                            "Up-to 20 contributors",
                            "Add unlimited collaborators",
                            "Customized dashboard"
                        ]}
                    />
                    <PricingCard
                        title="Enterprise"
                        price="€9000"
                        period=" vanaf "
                        features={[
                            "All in Pro benefits",
                            "Auto sync to your dashboard",
                            "Flexible payments",
                            "Recurring billing"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function PricingCard({ title, price, period, features, highlighted = false }) {
    const cardClass = highlighted
        ? "bg-gradient-to-b from-purple-400 to-purple-900 text-white transform scale-105"
        : "bg-white text-darkPink-900 border border-gray-200";

    const buttonClass = highlighted
        ? "bg-white text-purple-900 hover:bg-gray-100"
        : "bg-purple-900 text-white hover:bg-purple-800";

    return (
        <div className={`w-full md:w-80 p-6 rounded-3xl shadow-lg transition-all duration-300 ${cardClass}`}>
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">{price}</span>
                <span className="text-sm ml-1 mb-1 opacity-80">{period}</span>
            </div>
            <button className={`w-full py-2 rounded-full font-semibold mb-6 ${buttonClass}`}>
                Get Started
            </button>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className={`w-5 h-5 mr-2 ${highlighted ? 'text-purple-500' : 'text-purple-500'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}