'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Step = ({ number, isActive, onClick }) => (
  <motion.div
    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center cursor-pointer ${isActive ? 'bg-pink-500' : 'bg-gray-300'}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
  >
    <span className={`text-sm md:text-lg font-bold ${isActive ? 'text-white' : 'text-gray-600'}`}>{number}</span>
  </motion.div>
);

const steps = [
  {
    title: "Kennismaking & Strategie",
    description: "We starten met een vrijblijvend gesprek om jouw doelen en wensen in kaart te brengen. Op basis daarvan creëren we een gepersonaliseerde strategie voor jouw website.",
    icon: "/design-icon.svg"
  },
  {
    title: "Ontwikkeling & Design",
    description: "Onze experts gaan aan de slag met het ontwerpen en bouwen van een website die niet alleen esthetisch sterk is, maar ook gebruiksvriendelijk en SEO-geoptimaliseerd.",
    icon: "/development-icon.svg"
  },
  {
    title: "Lancering & Ondersteuning",
    description: "Zodra je website klaar is, zorgen we voor een vlekkeloze lancering en bieden we doorlopende ondersteuning en updates, zodat je site altijd optimaal presteert.",
    icon: "/launch-icon.svg"
  }
];

const svgAnimations = [
  // Kennismaking & Strategie
  <svg key="strategy" className="w-full h-full" viewBox="0 0 100 100">
    <motion.circle
      cx="50" cy="50" r="40"
      stroke="#4C1D95" strokeWidth="4" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M30 50 L45 65 L70 40"
      stroke="#EC4899" strokeWidth="4" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
  </svg>,
  
  // Ontwikkeling & Design
  <svg key="development" className="w-full h-full" viewBox="0 0 100 100">
    <motion.rect
      x="20" y="20" width="60" height="60"
      stroke="#4C1D95" strokeWidth="4" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="50" cy="50" r="20"
      stroke="#EC4899" strokeWidth="4" fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  </svg>,
  
  // Lancering & Ondersteuning
  <svg key="launch" className="w-full h-full" viewBox="0 0 100 100">
    <motion.path
      d="M20 80 Q50 20 80 80"
      stroke="#4C1D95" strokeWidth="4" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.polygon
      points="50,20 40,40 60,40"
      fill="#EC4899"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <p className="uppercase text-center text-purple-900 text-xs tracking-widest mb-4">hoe het werkt</p>
        <h2 className="text-purple-900 mx-auto text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        Bij mvmnt maken we het proces simpel en effectief,<br className="hidden md:block" /> zodat jij snel online kunt gaan.
        </h2>
        
        <div className="relative mt-12 md:mt-20">
          {/* Steps indicator */}
          <div className="flex justify-center items-center mb-8 md:mb-10">
            {steps.map((_, index) => (
              <React.Fragment key={index}>
                <Step 
                  number={index + 1} 
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                />
                {index < steps.length - 1 && (
                  <motion.div 
                    className="w-12 md:w-20 h-0.5 bg-gray-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeStep > index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Main content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-900 mx-0 md:mx-20 lg:mx-40 rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <div className="flex items-center mb-4">
                    {/* <div className="bg-pink-100 rounded-full p-2 md:p-3 mr-4">
                      <Image src={steps[activeStep].icon} alt={steps[activeStep].title} width={24} height={24} />
                    </div> */}
                    <h3 className="text-xl md:text-2xl font-bold text-white">{steps[activeStep].title}</h3>
                  </div>
                  <p className="text-white text-sm md:text-base mb-6">
                    {steps[activeStep].description}
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-gray-100 rounded-xl p-4 md:p-6">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">Stap {activeStep + 1} Visualisatie</h4>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      {svgAnimations[activeStep]}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
