import React from 'react';
import { FaLightbulb, FaPencilRuler, FaRocket } from 'react-icons/fa';

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-20 max-w-md text-center mx-auto">
              <span className="text-purple-900 font-bold">Hoe werkt het?</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">Bouw & lanceer zoals jij dat wilt.</h2>
            </div>
            <div className="flex flex-wrap mx-4">
              <StepCard
                number="1"
                title="Concept & Strategie"
                description="We starten met een persoonlijk gesprek om jouw visie en doelen scherp te stellen. Vervolgens ontwerpen we een exclusief plan dat naadloos aansluit op jouw merk en ambities."
                icon={<FaLightbulb />}
              />
              <StepCard
                number="2"
                title="Ontwerp & Ontwikkeling"
                description="Onze specialisten creëren een op maat gemaakt ontwerp, gecombineerd met de nieuwste technologieën en geavanceerde SEO-technieken. Jouw website wordt een verfijnde balans van schoonheid, snelheid en vindbaarheid."
                icon={<FaPencilRuler />}
              />
              <StepCard
                number="3"
                title="Livegang & Optimalisatie"
                description="Bij afronding begeleiden we je stap voor stap door een feilloze lancering. We garanderen dat jouw website direct moeiteloos presteert, geoptimaliseerd voor maximale impact en langdurig succes."
                icon={<FaRocket />}
              />
            </div>
          </div>
        </section>
    );
}

function StepCard({ number, title, description, icon }) {
    return (
        <div className="w-full lg:w-1/3 p-4 mb-8 lg:mb-0 relative z-10">
            <div className="relative border-2 border-purple-900 rounded-lg p-6 h-full flex flex-col items-center text-center bg-white shadow-lg">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-4">
                    <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center text-xl font-bold text-white">
                        {number}
                    </div>
                </div>
                <div className="mb-4 mt-6 text-4xl text-purple-900">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-opacity-70">{description}</p>
            </div>
        </div>
    );
}
