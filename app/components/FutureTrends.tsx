"use client";

import ScrollReveal from "./ScrollReveal";

const trends = [
    {
        title: "AI in Drug Discovery",
        subtitle: "Accelerating therapeutics",
        description: "Machine learning algorithms are dramatically shortening the timeline for identifying viable drug candidates.",
        tags: ["AI", "Pharma"],
    },
    {
        title: "Organ-on-a-Chip",
        subtitle: "Ethical testing models",
        description: "Microfluidic devices simulating human physiology to reduce reliance on animal testing.",
        tags: ["Microfluidics", "Ethics"],
    },
    {
        title: "Quantum Biology",
        subtitle: "The new frontier",
        description: "Exploring quantum phenomena in biological processes like photosynthesis and enzyme catalysis.",
        tags: ["Quantum", "Research"],
    },
    {
        title: "Longevity Science",
        subtitle: "Extending healthspan",
        description: "Unraveling the mechanisms of aging to develop interventions for healthier, longer lives.",
        tags: ["Aging", "Genetics"],
    }
];

export default function FutureTrends() {
    return (
        <section className="py-24 bg-dark relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
                        Future Trends
                    </h2>
                    <p className="text-lg text-gray-400 font-light">
                        Innovations shaping the next decade of biology.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trends.map((trend, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="h-full bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {trend.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full border border-primary-500/30">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-accent transition-colors">
                                    {trend.title}
                                </h3>
                                <p className="text-sm font-semibold text-primary-400 mb-4">
                                    {trend.subtitle}
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                                    {trend.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
