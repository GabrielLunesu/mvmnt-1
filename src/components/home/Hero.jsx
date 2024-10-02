"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StarsPattern1 from '@/assets/stars-pattern1.svg';
import StarsPattern2 from '@/assets/stars-pattern2.svg';
import gsap from 'gsap';
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Zap, Globe, Rocket } from "lucide-react"

const SEOCard = ({ title, icon: Icon, color }) => (
    <Card className={`w-64 h-64 ${color} overflow-hidden`}>
        <CardContent className="flex flex-col items-center justify-center h-full text-white relative">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-2"
            >
                {title}
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <Icon size={48} />
            </motion.div>
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {[...Array(5)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </motion.div>
        </CardContent>
    </Card>
)

export default function Hero() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const textRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        const text = textRef.current;
        const svg = svgRef.current;
        const colors = [
            { main: '#ffffff', shades: ['#490a3a', '#490a3a', '#490a3a', '#490a3a'] },
        ];

        const animateTextIn = () => {
            const letters = 'mvmnt'.split('');
            text.innerHTML = '';
            const timeline = gsap.timeline();

            letters.forEach((char, i) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.color = colors[i % colors.length].main;
                span.style.display = 'inline-block';
                span.style.opacity = '0';
                text.appendChild(span);

                timeline.to(span, {
                    opacity: 1,
                    y: [-20, 0],
                    rotation: [-50, 0],
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    onComplete: () => addDecor(span, colors[i % colors.length])
                }, i * 0.1);
            });

            // Ensure text is straight at the end
            timeline.to(text.children, {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });

            return timeline;
        };

        const animateTextOut = () => {
            const timeline = gsap.timeline();

            gsap.utils.toArray(text.children).forEach((span, i) => {
                timeline.to(span, {
                    opacity: 0,
                    y: 20,
                    rotation: 50,
                    duration: 0.6,
                    ease: "back.in(1.7)"
                }, i * 0.05);
            });

            return timeline;
        };

        const addDecor = (letter, color) => {
            const rect = letter.getBoundingClientRect();
            const svgRect = svg.getBoundingClientRect();
            const x0 = rect.left - svgRect.left + rect.width / 2;
            const y0 = rect.top - svgRect.top + rect.height / 2;

            for (let i = 0; i < 8; i++) {
                addTri(x0, y0, color.shades[Math.floor(Math.random() * 4)]);
                addCirc(x0, y0);
            }
        };

        const addTri = (x0, y0, shade) => {
            const tri = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            const size = 10;
            tri.setAttribute('points', `0,0 ${size*2},0 ${size},${size*2}`);
            tri.style.fill = shade;
            svg.appendChild(tri);

            gsap.fromTo(tri, 
                { rotation: Math.random() * 360, scale: 0.3, x: x0, y: y0, opacity: 1 },
                { x: x0 + (Math.random() - 0.5) * 100, y: y0 + (Math.random() - 0.5) * 100, opacity: 0, duration: 1.5, ease: "power1.out",
                    onComplete: () => svg.removeChild(tri)
                }
            );
        };

        const addCirc = (x0, y0) => {
            const circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            const size = 3 * Math.random();
            circ.setAttribute('r', size);
            circ.style.fill = '#490a3a';
            svg.appendChild(circ);

            gsap.fromTo(circ, 
                { x: x0, y: y0, opacity: 1 },
                { x: x0 + (Math.random() - 0.5) * 100, y: y0 + (Math.random() - 0.5) * 100, opacity: 0, duration: 1.5, ease: "power1.out",
                    onComplete: () => svg.removeChild(circ)
                }
            );
        };

        const clearSvg = () => {
            while (svg.firstChild) {
                svg.removeChild(svg.firstChild);
            }
        };

        const runAnimation = () => {
            const masterTimeline = gsap.timeline({ repeat: -1 });
            masterTimeline
                .add(animateTextIn())
                .add(animateTextOut(), "+=2") // Start out animation 2 seconds after in animation completes
                .add(clearSvg, "+=0.5"); // Clear SVG 0.5 seconds after out animation starts
        };

        runAnimation();

        return () => {
            gsap.killTweensOf(text.children);
            gsap.killTweensOf(svg.children);
        };
    }, []);

    return (
        <section className="bg-gradient-to-t from-white via-purple-700 to-black from-white bs-section-dragged">
            <div className="container mx-auto px-4">
                <div className="relative pt-64 pb-14">
                    <Image
                        className="hidden lg:block absolute left-16 xl:left-36 2xl:left-56 3xl:left-96 top-96"
                        src={StarsPattern1}
                        alt="Stars pattern 1"
                        width={76}
                        height={132}
                    />
                    <Image
                        className="hidden lg:block absolute right-4 xl:right-36 2xl:right-56 3xl:right-96 top-96"
                        src={StarsPattern2}
                        alt="Stars pattern 2"
                        width={76}
                        height={132}
                    />
                    <div className="relative z-50">
                        <h1 className="font-heading text-white text-center text-4xl sm:text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-6">
                            <span ref={textRef} className="inline-block"></span> maakt meer dan alleen een website
                        </h1>
                        <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{zIndex: -1}}></svg>
                        <p className="text-center text-white max-w-xl mx-auto text-lg mb-12">
                            Je partner in digitale groei. Wij creëren niet zomaar websites, maar bouwen complete online fundamenten voor ondernemers. Met onze betaalbare, SEO-geoptimaliseerde oplossingen zet je je bedrijf stevig op de digitale kaart.
                        </p>
                        <div className="mb-12 text-center">
                            <Link href="#" className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full">
                                <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
                                <div className="relative z-50 flex items-center py-2 px-4 bg-white group-hover:bg-opacity-80 group-focus:bg-opacity-80 rounded-full transition duration-200">
                                    <p className="text-pinkSecondary-900">Contact</p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center gap-8 flex-wrap">
                            <SEOCard title="SEO Optimized" icon={Zap} color="bg-green-500" />
                            <SEOCard title="Global Reach" icon={Globe} color="bg-blue-500" />
                            <SEOCard title="Fast Growth" icon={Rocket} color="bg-purple-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}