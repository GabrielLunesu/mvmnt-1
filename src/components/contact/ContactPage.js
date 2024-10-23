'use client';
import React from 'react';
import CalendlyEmbed from '../calendly/CalendlyEmbed';

export default function ContactPage() {
    const calendlyUrl = "https://calendly.com/mvmnt-info/strategie-sessie-mvmnt?background_color=000000&text_color=ffffff&primary_color=ffffff&lang=nl";

    return (
        <section className="py-40 bg-gradient-to-b from-purple-900 via-purple-600 to-purple-900">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-gradient-to-br from-pink-600 to-purple-900 rounded-3xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Contact Information */}
                        <div className="w-full lg:w-1/2 p-12 text-white">
                            <h1 className="text-4xl font-bold mb-6">Contact Informatie</h1>
                            <p className="mb-8 text-purple-200">
                                Wij streven naar klanttevredenheid en zetten ons in voor het leveren van uitstekende service en ondersteuning.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <span>info@mvmnt.nl</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <span>+31 6 12 34 56 78</span>
                                </div>
                            </div>
                            <div className="mt-12">
                                <h2 className="text-xl font-semibold mb-4">Volg ons</h2>
                                <div className="flex space-x-4">
                                    <Link href="#" className="text-white hover:text-purple-200">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                    </Link>
                                    <Link href="#" className="text-white hover:text-purple-200">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                    </Link>
                                    <Link href="#" className="text-white hover:text-purple-200">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Calendly Widget */}
                        <div className="w-full lg:w-2/3 bg-white p-12">
                            <h2 className="text-3xl font-bold mb-6 text-purple-600">Plan een afspraak</h2>
                            <div className="h-[500px]">
                                <CalendlyEmbed 
                                    url={calendlyUrl}
                                    className="rounded-lg" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
