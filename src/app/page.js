import Testimonials from '@/components/common/Testimonials';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/home/Pricing';
import CTA from '@/components/home/CTA';
import SeoCheck from '@/components/home/SeoCheck';
import HeroParallax from '@/components/common/HeroParallax';
import CalendlyCTA from '@/components/calendly/CalendlyCTA';
import Faq from '@/components/common/Faq';
export const metadata = {
  title: 'MVMNT | Professionele Websites vanaf €99 per maand | Webdesign Bureau',
  description: 'MVMNT levert hoogwaardige, op maat gemaakte websites voor elk budget. Ontdek onze betaalbare webdesign oplossingen vanaf slechts €99 per maand. Boost uw online aanwezigheid nu!',
  keywords: 'webdesign, betaalbare websites, professioneel webdesign, website ontwikkeling, responsive design, SEO-optimalisatie, maandelijks abonnement, MVMNT',
  openGraph: {
    title: 'Topkwaliteit Websites vanaf €99/maand | MVMNT Webdesign',
    description: 'Krijg een professionele, op maat gemaakte website voor uw bedrijf. Betaalbare oplossingen, hoogwaardige resultaten. Start vandaag nog met MVMNT!',
    images: [
      {
        url: 'https://mvmnt.nl/images/mvmnt-homepage-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MVMNT Webdesign Services',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroParallax />
      <Testimonials />
      <HowItWorks />
      <SeoCheck />
      <Pricing />
      <Faq />
      <CalendlyCTA />
    </>
  );
}
