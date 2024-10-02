import React from 'react';

export default function HowItWorks() {
    return (
        <section className="py-32 bg-white text-darkPink-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-4xl md:text-5xl mb-16 font-bold text-center">How it works</h2>
                <div className="relative flex flex-col lg:flex-row justify-between items-center">
                    {/* Water-like flowing effect */}
                    <div className="absolute inset-0 hidden lg:block">
                        <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                            <path d="M0,100 Q250,50 500,100 T1000,100 V300 H0 Z" fill="url(#water-gradient)" className="water-flow">
                                <animate attributeName="d" 
                                    dur="5s" 
                                    repeatCount="indefinite"
                                    values="
                                        M0,100 Q250,50 500,100 T1000,100 V300 H0 Z;
                                        M0,100 Q250,150 500,100 T1000,100 V300 H0 Z;
                                        M0,100 Q250,50 500,100 T1000,100 V300 H0 Z"
                                />
                            </path>
                            <defs>
                                <linearGradient id="water-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(255, 20, 147, 0.1)" />
                                    <stop offset="100%" stopColor="rgba(255, 105, 180, 0.1)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    
                    <StepCard
                        number={1}
                        title="Input Transactions"
                        description="Record your financial transactions such as receipts, and other relevant documents."
                        icon="calculator.svg"
                    />
                    <StepCard
                        number={2}
                        title="Categorization"
                        description="Automatically categorizes the recorded transactions, such as income and expenses."
                        icon="tag.svg"
                    />
                    <StepCard
                        number={3}
                        title="Generate Reports"
                        description="Generate financial reports, such as income statements, balance sheets, and cash flow."
                        icon="document.svg"
                    />
                </div>
            </div>
        </section>
    );
}

function StepCard({ number, title, description, icon }) {
    return (
        <div className="w-full lg:w-1/3 p-4 mb-8 lg:mb-0 relative z-10">
            <div className="relative border-2 border-pink-500 rounded-lg p-6 h-full flex flex-col items-center text-center bg-white shadow-lg">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-xl font-bold text-white">
                        {number}
                    </div>
                </div>
                <div className="mb-4 mt-6">
                    <img className="h-16 w-16 mx-auto" src={`vista-assets/images/how-it-works/${icon}`} alt={title} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-opacity-70">{description}</p>
            </div>
        </div>
    );
}

