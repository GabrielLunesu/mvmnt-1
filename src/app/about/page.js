import React from 'react'
import Hero from '@/components/about/Hero'
import Features from '@/components/about/Features'
import Team from '@/components/about/Team'
import HowItWorks from '@/components/about/HowItWorks'
import Testimonials from '@/components/common/Testimonials'
import Faq from '@/components/about/Faq'
import CTA from '@/components/about/CTA'

const About = () => {
  return (
    <>
        <Hero />
        <Features />
        <HowItWorks />        
        <Testimonials />
        <Faq />
        <Team />
        <CTA />
       
        
    </>
  )
}

export default About