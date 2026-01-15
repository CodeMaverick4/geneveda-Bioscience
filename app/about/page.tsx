"use client";

import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import { UserCheck, Globe, FlaskConical, BookOpen } from "lucide-react";
import AnimatedButton from "../components/AnimatedButton";

const stats = [
    { label: "Research Projects", value: "150+" },
    { label: "Students Mentored", value: "2000+" },
    { label: "Publications Support", value: "50+" },
    { label: "Global Partners", value: "25+" },
];

export default function AboutPage() {
    return (
        <main className="bg-white text-black min-h-screen">
            <section className="relative py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <h1 className="text-5xl lg:text-7xl font-bold text-[#7c1d85] mb-8">
                            About <br /> GeneVeda
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            GeneVeda Biosciences is a multidisciplinary biotech organization dedicated to advancing research, technology, and education.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            Our mission is to upskill the biology community, advance scientific discovery, strengthen technical skills, and help students, researchers, faculties, and professionals access international opportunities in the life sciences.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
                            <Image
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                alt="Modern Biotechnology Lab"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#7c1d85]/40 to-transparent" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-16 bg-[#7c1d85] text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-[#ffeb0f] mb-2">{stat.value}</div>
                            <div className="text-sm uppercase tracking-wider opacity-80">{stat.label}</div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">What We Do</h2>
                </ScrollReveal>

                <div className="space-y-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 bg-[#ffeb0f]/20 rounded-2xl flex items-center justify-center mb-6">
                                <FlaskConical className="w-8 h-8 text-[#7c1d85]" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-[#7c1d85]">R&D Services</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Our R&D division supports innovation across molecular biology, biotechnology, aptamer, NGS, AMR, microbiology, and applied life sciences. We assist research labs, startups, and industries in designing experiments, optimizing protocols, validating new technologies, and generating high-quality scientific data.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative h-[350px] rounded-3xl overflow-hidden shadow-xl group">
                            <Image
                                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
                                alt="R&D Research"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#7c1d85]/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl group">
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                alt="Bioinformatics Data Analysis"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#7c1d85]/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-[#ffeb0f]/20 rounded-2xl flex items-center justify-center mb-6">
                                <BookOpen className="w-8 h-8 text-[#7c1d85]" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-[#7c1d85]">Bioinformatics Data Analysis</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We transform complex datasets into clear, meaningful insights. Our expertise spans genomics, transcriptomics, proteomics, metagenomics, microbiome profiling, structural bioinformatics, molecular docking, and cheminformatics.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 bg-[#ffeb0f]/20 rounded-2xl flex items-center justify-center mb-6">
                                <UserCheck className="w-8 h-8 text-[#7c1d85]" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-[#7c1d85]">Study Abroad & Training</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We help learners pursue international education in biotechnology and related fields. We provide personalized support for profile evaluation, university selection, SOP/LOR preparation, scholarships, and applications.
                            </p>
                            <AnimatedButton href="/contact">Contact Our Team</AnimatedButton>
                        </div>
                        <div className="order-1 md:order-2 relative h-[350px] rounded-3xl overflow-hidden shadow-xl group">
                            <Image
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                                alt="Global Study Abroad"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#7c1d85]/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
