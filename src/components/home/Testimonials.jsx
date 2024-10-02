import React from 'react';

export default function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between gap-8 mb-16">
                    <TestimonialCard
                        name="John Doe"
                        role="CEO of TechCorp"
                        text="MVMNT has transformed our online presence. Their expertise in web development and SEO has significantly boosted our visibility and customer engagement."
                    />
                    <TestimonialCard
                        name="Jane Smith"
                        role="Founder of StartUp Inc."
                        text="Working with MVMNT was a game-changer for our startup. Their affordable, high-quality solutions helped us establish a strong digital foundation."
                    />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-8 mb-16">
                    <TestimonialCard
                        name="Alice Johnson"
                        role="Marketing Director"
                        text="The SEO optimization MVMNT provided has dramatically improved our search rankings. We're seeing a notable increase in organic traffic."
                    />
                    <h2 className="text-4xl font-bold text-purple-900 text-center flex-grow">
                        Wat ze zeggen over ons
                    </h2>
                    <TestimonialCard
                        name="Bob Williams"
                        role="Small Business Owner"
                        text="MVMNT delivered a website that perfectly represents our brand. Their attention to detail and customer service is unmatched."
                    />
                </div>
                <div className="flex flex-wrap justify-between gap-8">
                    <TestimonialCard
                        name="Emma Davis"
                        role="E-commerce Manager"
                        text="Our online sales have skyrocketed since MVMNT optimized our e-commerce site. Their expertise in creating user-friendly interfaces is evident."
                    />
                    <TestimonialCard
                        name="Michael Brown"
                        role="Nonprofit Director"
                        text="MVMNT's affordable solutions allowed our nonprofit to have a professional online presence without breaking the bank. We're truly grateful."
                    />
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ name, role, text }) {
    return (
        <div className="w-full lg:w-[calc(50%-1rem)] xl:w-[calc(33.33%-1rem)] bg-purple-50 rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
                <img
                    className="w-12 h-12 rounded-full"
                    src={`https://placehold.co/100x100/purple/white?text=${name.charAt(0)}`}
                    alt={`${name}'s avatar`}
                />
                <div>
                    <p className="font-semibold text-purple-900">{name}</p>
                    <p className="text-sm text-gray-600">{role}</p>
                </div>
            </div>
            <p className="text-purple-800">{text}</p>
        </div>
    );
}

