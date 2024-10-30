'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 border-b border-purple-300 text-left focus:outline-none"
      >
        <div className="flex items-center justify-between">
          <p className="text-purple-900 text-lg font-semibold">{question}</p>
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="#4C1D95"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 7.5L10 12.5L15 7.5" />
          </motion.svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-purple-900 py-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Faq() {
  const faqItems = [
    {
      question: "Wat bedoelen jullie met complimenten garantie?",
      answer: "MVMNT is an innovative bookkeeping software designed for modern business owners. It simplifies financial management and provides intuitive tools for tracking transactions, managing accounts, and generating reports."
    },
    {
      question: "Wat betekent MVMNT?",
      answer: "To add company details to your invoice, navigate to the 'Settings' section in your Vista dashboard. Look for 'Company Profile' or 'Invoice Customization'. Here, you can input your company name, logo, address, and other relevant details that will appear on your invoices."
    },
    {
      question: "Wat is SEO?",
      answer: "Vista supports a wide range of payment methods including credit/debit cards, bank transfers, and popular online payment platforms. The specific options available may depend on your location and account type."
    },
    {
      question: "Is garantie op jullie SEO diensten?",
      answer: "Yes, you can upgrade or downgrade your Vista plan at any time. Simply go to your account settings and select 'Change Plan'. Any changes will be prorated and reflected in your next billing cycle."
    },
    {
      question: "Wat gebeurt er als ik bij jullie website afneem?",
      answer: "If you cancel your subscription, you'll continue to have access to Vista until the end of your current billing period. After that, your account will be deactivated, but your data will be securely stored for a period of time in case you decide to reactivate your account."
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white via-purple-300 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-purple-900 text-4xl text-center font-semibold mb-20">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
