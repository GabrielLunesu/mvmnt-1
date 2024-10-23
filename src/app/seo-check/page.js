import React from 'react'
import AiSeoCheckerForm from '@/components/seo-check/AiSeoCheckerForm'
import Hero from '@/components/seo-check/Hero'

export const metadata = {
  title: 'AI SEO Checker | Gratis Website Analyse Tool | MVMNT',
  description: 'Verbeter je website ranking met onze geavanceerde AI SEO tool. Krijg een gepersonaliseerde SEO analyse en praktische tips om hoger te scoren in Google. Optimaliseer je content nu!',
  keywords: 'SEO checker, website analyse, AI SEO tool, Google ranking verbeteren, SEO optimalisatie, content analyse, zoekwoorden onderzoek, MVMNT',
  openGraph: {
    title: 'Gratis AI SEO Checker | Boost Je Website Ranking | MVMNT',
    description: 'Ontdek hoe je jouw website SEO kunt verbeteren met onze AI-aangedreven analysetool. Krijg direct inzicht en verhoog je online zichtbaarheid!',
    images: [
      {
        url: 'https://mvmnt.nl/images/ai-seo-checker-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MVMNT AI SEO Checker Tool',
      },
    ],
  },
}

const SeoCheck = () => {
  return (
    <div className=''>
      {/* <h1 className='text-4xl font-bold text-center mb-8'>AI SEO Checker</h1>
      <p className='text-xl text-center mb-12'>Discover how to improve your website's SEO with our AI-powered analysis tool</p> */}
      <Hero />
      <AiSeoCheckerForm />
    </div>
  )
}

export default SeoCheck
