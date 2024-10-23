export const metadata = {
  title: 'Succesvolle Projecten | MVMNT Webdesign Portfolio',
  description: 'Ontdek hoe MVMNT bedrijven heeft geholpen met op maat gemaakte websites. Bekijk onze case studies en leer hoe wij waarde creëren voor onze klanten.',
  keywords: 'webdesign portfolio, case studies, succesvolle projecten, klantresultaten, website voorbeelden, MVMNT projecten, digitale oplossingen',
  openGraph: {
    title: 'MVMNT Portfolio: Transformerende Webdesign Projecten',
    description: 'Zie hoe MVMNT bedrijven helpt groeien met innovatieve webdesign oplossingen. Ontdek onze succesvolle projecten en laat je inspireren!',
    images: [
      {
        url: 'https://mvmnt.nl/images/mvmnt-cases-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MVMNT Webdesign Portfolio Overzicht',
      },
    ],
  },
};

export default function Layout({ children }) {
  return children;
}
