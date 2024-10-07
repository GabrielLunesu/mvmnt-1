"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome } from "react-icons/fa";


export default function Navigation() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Adjust this breakpoint as needed
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="absolute top-0 left-0 right-0 z-50">
            <nav className="py-5">
                <div className="container mx-auto px-6">
                    {isMobile ? (
                        // Mobile Navigation
                        <div className="flex items-center justify-center">
                            <div className="flex gap-0.5 p-0.5 rounded-full bg-white bg-opacity-10 backdrop-blur-lg">
                                <Link href="/" className="flex-shrink-0">
                                    <Image src="https://i.ibb.co/HhfN9hq/mv-1.png" alt="Vista Logo" width={35} height={35} />
                                </Link>
                                <NavLink href="/"><FaHome className='h-5 w-5' /></NavLink>
                                <NavLink href="/cases">Cases</NavLink>
                                <NavLink href="/about">Over ons</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
                            </div>
                        </div>
                    ) : (
                        // Desktop Navigation
                        <div className="flex items-center justify-between">
                            <Link href="/" className="flex-shrink-0">
                                <Image src="https://i.ibb.co/HhfN9hq/mv-1.png" alt="Vista Logo" width={60} height={40} />
                            </Link>
                            <div className="flex items-center justify-center flex-grow">
                                <div className="flex gap-2 p-1 rounded-full bg-white bg-opacity-10 backdrop-blur-lg">
                                    <NavLink href="/">Home</NavLink>
                                    <NavLink href="/cases">Cases</NavLink>
                                    <NavLink href="/about">Over ons</NavLink>
                                    <NavLink href="/contact">Contact</NavLink>
                                </div>
                            </div>
                            <Link href="/contact" className="flex items-center gap-2 text-white hover:text-pink-500 transition duration-200 flex-shrink-0">
                                <span className="text-sm font-medium">Contact</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
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

