'use client';
import Image from 'next/image';

interface Testimonial {
    name: string;
    position: string;
    company: string;
    text: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Andy Redfern",
        position: "CEO",
        company: "Growth & Brains",
        text: "Helped Growth & Brains consistently get 25-40 hot leads every month for the last 8 months",
        image: "/img/cold-email/testimonials/andy.jpg"
    },
    {
        name: "Joe S",
        position: "Founder",
        company: "Laser Sight Digital",
        text: "From trying with 4+ lead gen companies and still stuck with no leads… to filling his calendar & added $15k MRR in revenue",
        image: "/img/cold-email/testimonials/joe.jpg"
    },
    {
        name: "Hristo Arakliev",
        position: "COO/Co-founder",
        company: "Hyperzon",
        text: "Generated $350K in revenue in 4 months through optimized sales processes and booked sales opportunities",
        image: "/img/cold-email/testimonials/hristo.jpg"
    },
    {
        name: "Tina Nathani",
        position: "Co-Founder",
        company: "Trex Agency",
        text: "Secured their first $30k deal within 2 weeks of outreach as they expanded into the U.S.",
        image: "/img/cold-email/testimonials/tina.jpg"
    }
];

export default function ClientResults() {
    return (
        <section id="client-results" className="bg-black py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Client <span className="text-[#D12923]">Results</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how we've helped agencies like yours achieve remarkable growth through our proven cold email strategies
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="bg-zinc-900 rounded-2xl p-6 transition-transform duration-300 hover:scale-105"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-400">
                                        {testimonial.position} @ {testimonial.company}
                                    </p>
                                </div>
                            </div>
                            <p className="text-white text-lg leading-relaxed">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="#all-results"
                        className="inline-flex items-center text-white hover:text-[#D12923] transition-colors duration-300"
                    >
                        <span className="mr-2">View All Clients Results</span>
                        <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
