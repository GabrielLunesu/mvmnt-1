import React from 'react';

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-20 max-w-md text-center mx-auto">
              <span className="text-purple-900 font-bold">Dolor sit amet consectutar</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">Bouw & lanceer zoals jij dat wilt.</h2>
            </div>
            <div className="flex flex-wrap mx-12">
              <StepCard
                number="1"
                title="Concept & Strategie"
                description="We starten met een persoonlijk gesprek om jouw visie en doelen scherp te stellen. Vervolgens ontwerpen we een exclusief plan dat naadloos aansluit op jouw merk en ambities."
                icon="icon-1.svg"
              />
              <StepCard
                number="2"
                title="Ontwerp & Ontwikkeling"
                description="Onze specialisten creëren een op maat gemaakt ontwerp, gecombineerd met de nieuwste technologieën en geavanceerde SEO-technieken. Jouw website wordt een verfijnde balans van schoonheid, snelheid en vindbaarheid."
                icon="icon-2.svg"
              />
              <StepCard
                number="3"
                title="Livegang & Optimalisatie"
                description="Bij afronding begeleiden we je stap voor stap door een feilloze lancering. We garanderen dat jouw website direct moeiteloos presteert, geoptimaliseerd voor maximale impact en langdurig succes.s"
                icon="icon-3.svg"
              />
            </div>
          </div>
        </section>
    );
}

function StepCard({ number, title, description, icon }) {
    return (
        <div className="w-full lg:w-1/3 p-4 mb-8 lg:mb-0 relative z-10">
            <div className="relative border-2 border-pink-500 rounded-lg p-6 h-full flex flex-col items-center text-center bg-white shadow-lg">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-xl font-bold text-white">
                        {number}
                    </div>
                </div>
                <div className="mb-4 mt-6">
                    <img className="h-16 w-16 mx-auto" src={`vista-assets/images/how-it-works/${icon}`} alt={title} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-opacity-70">{description}</p>
            </div>
        </div>
    );
}