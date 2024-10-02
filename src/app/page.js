import Testimonials from '@/components/home/Testimonials';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/home/Pricing';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <CTA />
    </>
  );
}
