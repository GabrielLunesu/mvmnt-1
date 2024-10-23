import React from 'react';
import ContactPage from '../../components/contact/ContactPage';

export const metadata = {
  title: 'Contact MVMNT | Vraag een Offerte Aan | Webdesign Experts',
  description: 'Neem contact op met MVMNT voor professioneel webdesign vanaf €99 per maand. Stel uw vragen, vraag een offerte aan of plan een gratis consult in.',
  keywords: 'contact MVMNT, webdesign offerte, gratis consult, website vragen, professioneel webdesign, betaalbare websites, klantenservice',
  openGraph: {
    title: 'Contact MVMNT | Start Uw Webdesign Project Vandaag',
    description: 'Klaar om uw online aanwezigheid te verbeteren? Neem contact op met MVMNT voor expert webdesign oplossingen op maat, startend vanaf €99/maand.',
    images: [
      {
        url: 'https://mvmnt.nl/images/mvmnt-contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MVMNT Webdesign Contact Pagina',
      },
    ],
  },
};

export default function Contact() {
    return <ContactPage />;
}
