"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <section className="bg-gradient-to-t from-white via-purple-700 to-purple-900">
            <div className="container mx-auto px-4">
                <div className="relative pt-24 pb-14">
                    {/* <Image 
                        className="absolute left-1/2 top-0 transform -translate-x-1/2" 
                        src="/vista-assets/images/hero/lines.svg" 
                        alt=""
                        width={500}
                        height={500}
                    /> */}
                    {/* <Image 
                        className="hidden lg:block absolute left-4 xl:left-36 2xl:left-56 3xl:left-96 top-80 xl:top-64" 
                        src="/vista-assets/images/hero/cursor-pink1.png" 
                        alt=""
                        width={100}
                        height={100}
                    /> */}
                    {/* <Image 
                        className="hidden lg:block absolute right-4 xl:right-36 2xl:right-56 3xl:right-96 top-80" 
                        src="/vista-assets/images/hero/cursor-pink2.png" 
                        alt=""
                        width={100}
                        height={100}
                    /> */}
                    <div className="relative mt-20 z-50">
                        <h1 className="font-heading text-white text-center text-4xl sm:text-5xl md:text-7xl font-bold max-w-sm sm:max-w-xl md:max-w-3xl mx-auto mb-6">Bookkeeping tools tailored for business owners</h1>
                        <p className="text-center text-white text-lg mb-12">Daily bookkeeping for the modern business owner.</p>
                        <div className="mb-20 text-center">
                            <Link href="#" className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full">
                                <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
                                <div className="relative z-50 flex items-center py-2 px-4 bg-white group-hover:bg-opacity-80 group-focus:bg-opacity-80 rounded-full transition duration-200">
                                    <p className="mr-2 text-pinkSecondary-900">Get started</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M9.43032 8.28857L9.4303 8.28856L9.42602 8.29284L6.45312 11.2657V8.20662V4.7275L8.11268 6.38706L9.42602 7.70039C9.59121 7.86558 9.58501 8.13574 9.43032 8.28857Z" fill="black" stroke="currentColor" strokeWidth="2"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        {/* <Image 
                            className="w-full object-cover" 
                            src="/vista-assets/images/hero/dashboard-pink1.png" 
                            alt=""
                            width={1200}
                            height={600}
                        /> */}
                    </div>
                </div>
            </div>
            <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50`}>
                <div onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-black opacity-20"></div>
                <nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="inline-block">
                            <Image src="/vista-assets/images/logos/vista-logo-dark.svg" alt="" width={100} height={50} />
                        </Link>
                        <button onClick={() => setMobileNavOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-12 py-12 my-12">
                        <li><Link href="#" className="text-sm font-medium">Home</Link></li>
                        <li><Link href="#" className="text-sm font-medium">Features</Link></li>
                        <li><Link href="#" className="text-sm font-medium">Pricing</Link></li>
                        <li><Link href="#" className="text-sm font-medium">About</Link></li>
                        <li><Link href="#" className="text-sm font-medium">Contact</Link></li>
                    </ul>
                    <div className="text-center">
                        <Link href="#" className="inline-flex items-center gap-2 text-black hover:text-opacity-80 transition duration-200">
                            <span className="text-sm font-medium">Sign in</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>
        </section>
    );
}