import Testimonials from '@/components/common/Testimonials';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/home/Pricing';
import CTA from '@/components/home/CTA';
import SeoCheck from '@/components/home/SeoCheck';
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
