"use client";

import { FlaskConical, Binary, Microscope, Activity, GraduationCap, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import FloatingElement from "./ui/FloatingElement";
import { motion } from "framer-motion";

const services = [
    {
        title: "R&D Services",
        description: "End-to-end research support from hypothesis to publication using advanced protocols.",
        icon: FlaskConical,
        link: "/services/rd"
    },
    {
        title: "Bioinformatics",
        description: "Complex genomic data analysis pipelines visualizing the unseen.",
        icon: Binary,
        link: "/services/bioinformatics"
    },
    {
        title: "NGS Solutions",
        description: "Precise high-throughput sequencing (WGS, WES) revealing genetic blueprints.",
        icon: Microscope,
        link: "/services/ngs"
    },
    {
        title: "Diagnostics",
        description: "Cutting-edge antimicrobial resistance studies protecting future health.",
        icon: Activity,
        link: "/services/diagnostics"
    },
    {
        title: "Training Programs",
        description: "Hands-on molecular biology training for the next generation of scientists.",
        icon: GraduationCap,
        link: "/services/training"
    },
    {
        title: "Study Abroad",
        description: "Strategic guidance for global academic admissions and career ascension.",
        icon: Globe,
        link: "/services/study-abroad"
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#002616] to-dark z-0" />
            <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-r from-transparent via-primary-900/10 to-transparent skew-y-6 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-wide drop-shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                            Our <span className="text-accent underline decoration-4 decoration-primary-600/50 underline-offset-8">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-xl font-light">
                            Bridging the gap between theoretical research and <span className="text-primary-300">tangible innovation</span>.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="hidden md:flex items-center gap-2 font-mono text-accent hover:text-white transition-colors tracking-widest uppercase text-sm"
                    >
                        View All Labs <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`${index % 2 === 1 ? 'lg:mt-12' : ''}`}>
                            <FloatingElement delay={index * 0.5} duration={7} yOffset={15}>
                                <Link href={service.link} className="block group">
                                    <div className="glass-panel glass-panel-hover p-8 rounded-3xl h-full transition-all duration-300 relative overflow-hidden">

                                        {/* Hover Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/5 group-hover:via-primary-500/10 transition-all duration-500" />

                                        <div className="relative z-10">
                                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-accent border border-white/10 group-hover:scale-110 group-hover:bg-primary-500/20 group-hover:border-primary-500/50 transition-all duration-300">
                                                <service.icon className="w-7 h-7" />
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors font-display">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                                {service.description}
                                            </p>

                                            <div className="mt-8 flex items-center justify-end">
                                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-300">
                                                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </FloatingElement>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 font-mono text-accent hover:text-white transition-colors tracking-widest uppercase text-sm"
                    >
                        View All Labs <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
