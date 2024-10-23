import React from 'react'
import Hero from '@/components/common/Hero'
import Features from '@/components/about/Features'
import Team from '@/components/about/Team'
import HowItWorks from '@/components/about/HowItWorks'
import Testimonials from '@/components/common/Testimonials'
import Faq from '@/components/about/Faq'
import CTA from '@/components/about/CTA'

export const metadata = {
  title: 'Over MVMNT | Innovatief Webdesign Bureau | Websites vanaf €99/maand',
  description: 'Ontdek MVMNT: uw partner voor betaalbare, hoogwaardige websites. Leer over onze missie, ons team en hoe wij topkwaliteit webdesign toegankelijk maken voor elk budget.',
  keywords: 'MVMNT, webdesign bureau, betaalbare websites, professioneel team, innovatieve oplossingen, klanttevredenheid, transparant proces, maandelijks abonnement',
  openGraph: {
    title: 'MVMNT: Revolutionair Webdesign vanaf €99/maand | Ons Verhaal',
    description: 'Maak kennis met MVMNT: wij maken premium webdesign betaalbaar voor iedereen. Ontdek hoe wij werken en waarom klanten ons vertrouwen.',
    images: [
      {
        url: 'https://mvmnt.nl/images/mvmnt-about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MVMNT Webdesign Team en Werkproces',
      },
    ],
  },
};

const About = () => {
  return (
    <>
        <Hero />
        <Features />
        <HowItWorks />        
        <Testimonials />
        <Faq />
        {/* <Team /> */}
        <CTA />
    </>
  )
}

export default About
