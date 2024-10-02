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
                            Monthly
                        </button>
                        <button 
                            className={`py-2 px-4 rounded-full ${!isMonthly ? 'bg-darkPink-900 text-white' : 'text-darkPink-900'} flex items-center`}
                            onClick={() => setIsMonthly(false)}
                        >
                            Yearly 
                            <span className="ml-2 text-xs bg-pink-200 text-pink-700 py-1 px-2 rounded-full">10% OFF</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    <PricingCard
                        title="Essential pro"
                        price={isMonthly ? "€99" : "€1069"}
                        period={isMonthly ? "/per maand" : "/per jaar"}
                        features={[
                            "Customized invoices",
                            "Automated reminders",
                            "Enable multiple payments",
                            "Helpful reports"
                        ]}
                    />
                    <PricingCard
                        title="Dynamic"
                        price={isMonthly ? "€175" : "€1890"}
                        period={isMonthly ? "/per maand" : "/per jaar"}
                        features={[
                            "Everything in Basic",
                            "Up-to 20 contributors",
                            "Add unlimited collaborators",
                            "Customized dashboard"
                        ]}
                        highlighted={true}
                    />
                    <PricingCard
                        title="Enterprise"
                        price={isMonthly ? "€5995" : "€64746"}
                        period={isMonthly ? "/per maand" : "/per jaar"}
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
        ? "bg-gradient-to-b from-pink-400 to-darkPink-900 text-white"
        : "bg-white text-darkPink-900 border border-gray-200";

    const buttonClass = highlighted
        ? "bg-white text-darkPink-900 hover:bg-gray-100"
        : "bg-darkPink-900 text-white hover:bg-darkPink-800";

    return (
        <div className={`w-full md:w-80 p-6 rounded-3xl ${cardClass}`}>
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
                        <svg className="w-5 h-5 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}