"use client";
import React from "react";
import Image from "next/image";
import { HeroParallax as HeroParallaxUI } from "@/components/ui/hero-parallax";

// Helper function to get image dimensions
const getImageDimensions = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.src = url;
  });
};

export const products = [
  {
    title: "Confiance Visuals",
    link: "https://www.confiancevisuals.nl/",
    thumbnail: {
      src: "https://i.ibb.co/P9tLLDx/Screenshot-2024-10-16-at-22-45-57.png",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Airbro's Parties",
    link: "https://airbros.nl/",
    thumbnail: {
      src: "https://i.ibb.co/r7hqCx9/Screenshot-2024-10-16-at-22-49-23.png",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Lunesu",
    link: "https://Lunesu.nl/",
    thumbnail: {
      src: "https://i.ibb.co/99VGJfF/Screenshot-2024-10-16-at-22-52-57.png",
      width: 800,
      height: 600,
    },
  },
  {
    title: "TROA Makelaardij",
    link: "https://troa.nl/",
    thumbnail: {
      src: "https://i.ibb.co/8mP1qbz/Screenshot-2024-10-16-at-22-54-02.png",
      width: 800,
      height: 600,
    },
  },
  
  {
    title: "Synchronique Agency",
    link: "https://hekimade.com/",
    thumbnail: {
      src: "https://i.ibb.co/tsQLY0b/Screenshot-2024-10-16-at-22-59-20.png",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Thuistekoop",
    link: "https://hekimade.com/",
    thumbnail: {
      src: "https://i.ibb.co/LPyMJ4J/Screenshot-2024-10-16-at-23-04-16.png",
      width: 800,
      height: 600,
    },
  },
  // vanaf hier moet je nieuwe toevoegen
  {
    title: "Pika Marketing",
    link: "https://pikamarketing.com/",
    thumbnail: {
      src: "https://i.ibb.co/sw0YqQ8/Screenshot-2024-10-18-at-18-47-31.png",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Lead Master",
    link: "https://leadmaster.com/",
    thumbnail: {
      src: "https://i.ibb.co/n7pQZzw/Screenshot-2024-10-18-at-18-51-34.png",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Demogency",
    link: "https://demogency.com/",
    thumbnail: {
      src: "https://i.ibb.co/py2cT0d/Screenshot-2024-10-18-at-18-53-17.png",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Saranda Schoonheidshuis Academie",
    link: "https://saranda-maquillage-permanent.ch/",
    thumbnail: {
      src: "https://i.ibb.co/rGH49St/Screenshot-2024-10-18-at-18-54-58.png",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Luteo Fliesen",
    link: "https://luteofliesen.de/",
    thumbnail: {
      src: "https://i.ibb.co/Wc4Zsvf/Screenshot-2024-10-18-at-18-56-23.png",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Fast & Furious Depannage",
    link: "https://ff-depannage.ch/",
    thumbnail: {
      src: "https://i.ibb.co/yQZ59J4/Screenshot-2024-10-18-at-18-57-49.png",
      width: 800,
      height: 600,
    },
  },

];

// Update the HeroParallax component to use Next.js Image
export function HeroParallax({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <Image
            src={product.thumbnail.src}
            alt={product.title}
            width={product.thumbnail.width}
            height={product.thumbnail.height}
            loading="lazy"
            placeholder="blur"
            blurDataURL={product.thumbnail.src}
          />
          <h3>{product.title}</h3>
          <a href={product.link}>Visit Site</a>
        </div>
      ))}
    </div>
  );
}

// You'll need to update the 'products' array with actual dimensions
// This can be done programmatically or manually
async function updateProductDimensions() {
  for (let product of products) {
    if (typeof product.thumbnail === 'string') {
      const dimensions = await getImageDimensions(product.thumbnail);
      product.thumbnail = {
        src: product.thumbnail,
        ...dimensions
      };
    }
  }
}

// Main component that uses the HeroParallaxUI
export default function HeroParallaxDemo() {
  React.useEffect(() => {
    updateProductDimensions();
  }, []);

  return <HeroParallaxUI products={products} />;
}
