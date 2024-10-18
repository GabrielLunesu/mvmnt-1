import Testimonials from '@/components/common/Testimonials';
import AnimatedTestimonials from '@/components/home/Testimonials1';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/home/Pricing';
import CTA from '@/components/home/CTA';
import SeoCheck from '@/components/home/SeoCheck';
import HeroNew from '@/components/home/Hero-new';
import HeroParallax from '@/components/common/HeroParallax';
export default function Home() {
  return (
    <>
      {/* <Hero /> */}
     
      {/* <HeroNew /> */}
      {/* <Testimonials /> */}
      
      <HeroParallax />
      <Testimonials />
      
      <HowItWorks />
      <SeoCheck />
      <Pricing />
      <CTA />
    </>
  );
}
