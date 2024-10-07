"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import highfive from "@/assets/highfive.svg"

const testimonials = [
  {
    name: "Hanna Stanton",
    role: "Founder of AIME Inc.",
    message: "We use Vista daily and we're very happy that they created this amazing bookkeeping software.",
    shortMessage: "Cool software!"
  },
  {
    name: "John Doe",
    role: "CEO of TechStart",
    message: "Vista revolutionized our bookkeeping process. Highly recommended!",
    shortMessage: "Game changer!"
  },
  {
    name: "Emma Watson",
    role: "CFO of GreenEnergy",
    message: "The ease of use and accuracy of Vista is unparalleled.",
    shortMessage: "Incredibly accurate!"
  },
  {
    name: "Emma Watson",
    role: "CFO of GreenEnergy",
    message: "The ease of use and accuracy of Vista is unparalleled.",
    shortMessage: "Incredibly accurate!"
  },
  {
    name: "Emma Watson",
    role: "CFO of GreenEnergy",
    message: "The ease of use and accuracy of Vista is unparalleled.",
    shortMessage: "Incredibly accurate!"
  },
  {
    name: "Emma Watson",
    role: "CFO of GreenEnergy",
    message: "The ease of use and accuracy of Vista is unparalleled.",
    shortMessage: "Incredibly accurate!"
  },
 
  // Add more testimonials as needed
];

const TestimonialCard = ({ testimonial, x, y, isMobile }) => {
  const cardContent = (
    <>
      <div className="flex items-center mb-2 ">
        <div className="w-10 h-10 bg-gray-600 rounded-full mr-3 "></div>
        <div>
          <h3 className="text-gray-200 font-semibold">{testimonial.name}</h3>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm">{testimonial.message}</p>
      <p className="text-purple-400 mt-2 font-bold">{testimonial.shortMessage}</p>
    </>
  );

  return isMobile ? (
    <motion.div
      className="bg-gray-800 rounded-lg p-4 shadow-lg w-full max-w-md mx-auto"
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.5 }}
    >
      {cardContent}
    </motion.div>
  ) : (
    <motion.div
      className="absolute bg-purple-900 rounded-lg p-4 shadow-lg w-64"
      style={{ x, y }}
      animate={{ 
        x: [x - 10, x + 10, x - 10],
        y: [y - 5, y + 5, y - 5],
        rotate: [-1, 1, -1]
      }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      {cardContent}
    </motion.div>
  );
};

const MobileSlider = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-64">
      <AnimatePresence mode="wait">
        <TestimonialCard
          key={index}
          testimonial={testimonials[index]}
          isMobile={true}
        />
      </AnimatePresence>
    </div>
  );
};

const AnimatedTestimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const positions = [
    { x: -300, y: -150 },
    { x: 300, y: -150 },
    { x: -350, y: 150 },
    { x: 350, y: 150 },
    { x: 0, y: -250 },
    { x: 0, y: 250 },
  ];

  return (
    <div className="bg-white py-24 relative overflow-hidden" style={{ minHeight: '100vh' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={highfive} alt="highfive" width={500} height={500} />
      </div>
      {isMobile ? (
        <div className="mt-20 p-10">
          <MobileSlider testimonials={testimonials} />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center ">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              x={positions[index % positions.length].x}
              y={positions[index % positions.length].y}
              isMobile={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedTestimonials;