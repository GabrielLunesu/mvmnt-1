import Testimonials from '@/components/home/Testimonials';
import AnimatedTestimonials from '@/components/home/Testimonials1';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/home/Pricing';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Testimonials /> */}
      <AnimatedTestimonials />
      <HowItWorks />
      <Pricing />
      <CTA />
    </>
  );
}
