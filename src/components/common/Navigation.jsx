"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <section className="absolute top-0 left-0 right-0 z-50">
            <nav className="py-5">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Image src="https://i.ibb.co/HhfN9hq/mv-1.png" alt="Vista Logo" width={60} height={40} />
                        </Link>
                        <div className="hidden lg:flex gap-2 p-1 rounded-full bg-white bg-opacity-10 backdrop-blur-lg">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/how-it-works">Hoe Het Werkt</NavLink>
                            <NavLink href="/about">Over ons</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                        </div>
                        <Link href="/signin" className="hidden lg:flex items-center gap-2 text-white hover:text-pink-500 transition duration-200">
                            <span className="text-sm font-medium">Sign in</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </Link>
                        <button className="lg:hidden" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                            <svg width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="56" height="56" rx="28" fill="white"></rect>
                                <path d="M37 32H19M37 24H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50`}>
                <div onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-black opacity-20"></div>
                <nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="inline-block">
                            <Image src="/vista-assets/images/logos/vista-logo-dark.svg" alt="Vista Logo" width={100} height={40} />
                        </Link>
                        <button onClick={() => setMobileNavOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-12 py-12 my-12">
                        <li><Link href="/" className="text-sm font-medium">Home</Link></li>
                        <li><Link href="/features" className="text-sm font-medium">Features</Link></li>
                        <li><Link href="/pricing" className="text-sm font-medium">Pricing</Link></li>
                        <li><Link href="/about" className="text-sm font-medium">About</Link></li>
                        <li><Link href="/contact" className="text-sm font-medium">Contact</Link></li>
                    </ul>
                    <div className="text-center">
                        <Link href="/signin" className="inline-flex items-center gap-2 text-black hover:text-opacity-80 transition duration-200">
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

function NavLink({ href, children }) {
    return (
        <Link href={href} className="px-3 py-2 rounded-full text-white text-sm hover:bg-white hover:bg-opacity-20 transition duration-200">
            {children}
        </Link>
    );
}

