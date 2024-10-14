import React from 'react'
import AiSeoCheckerForm from '@/components/seo-check/AiSeoCheckerForm'
import Hero from '@/components/seo-check/Hero'
export const metadata = {
  title: 'AI SEO Checker | MVMNT',
  description: 'Get a personalized SEO analysis for your website with our AI-powered tool',
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
