"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 9);
  const thirdRow = products.slice(9);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Reduce the translation range
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 800]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -800]), springConfig);
  
  // Adjust the scroll progress range for faster animation
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.1], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.1], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.1], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-350, 320]), springConfig);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-t via-purple-900 from-white to-purple-900 h-[180vh] md:h-[235vh] py-36 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row -mt-24 md:-mt-80 -ml-[45rem] md:-ml-[30rem] -mb-8 md:mb-12 space-x-3 md:space-x-12">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row -ml-[8rem] md:-ml-72 -mb-8 md:mb-12 space-x-3 md:space-x-12">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row -ml-[35rem] md:-ml-[30rem] space-x-3 md:space-x-12">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-3xl md:text-7xl font-bold text-white">
       <b>Meer</b> dan een website,<br/> jouw idee, onze creatie.
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-white">
      Je partner in digitale groei. Wij creëren niet zomaar websites, maar bouwen complete online fundamenten voor ondernemers. Met onze SEO-geoptimaliseerde websites realiseer je gegarandeerd meer bezoekers en dus meer omzet.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10, // Reduced hover lift
      }}
      key={product.title}
      className="group/product mt-16 md:mt-0 -mb-6 h-36 w-[15rem] md:-mb-8 md:h-72 md:w-[30rem] relative flex-shrink-0">
      <div className="block group-hover/product:shadow-xl">
        <Image
          src={product.thumbnail}
          height="900"
          width="900"
          className="object-cover object-left-top absolute h-full w-full rounded-lg inset-0"
          alt={product.title} />
      </div>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-2 left-2 opacity-0 group-hover/product:opacity-100 text-white text-xs md:text-sm">
        {product.title}
      </h2>
    </motion.div>
  );
};
