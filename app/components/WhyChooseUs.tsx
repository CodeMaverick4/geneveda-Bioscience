"use client";

import { Award, FileText, Zap, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
    {
        title: "Research-driven solutions",
        description: "Methodologies backed by rigorous scientific validation.",
        icon: Award,
    },
    {
        title: "Publication-ready reports",
        description: "High-quality data presentation suitable for top-tier journals.",
        icon: FileText,
    },
    {
        title: "Fast turnaround workflows",
        description: "Optimized processes to deliver results without delay.",
        icon: Zap,
    },
    {
        title: "Expert mentorship",
        description: "Global guidance from industry leaders and academic pioneers.",
        icon: Users,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Partner With <span className="text-primary-500">GeneVeda?</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            We combine deep scientific expertise with state-of-the-art technology
                            to accelerate your research and career goals.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-start group">
                                    <div className="mb-4 p-4 bg-primary-50 rounded-2xl transition-colors">
                                        <feature.icon className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="relative w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 transition-colors duration-500">

                                <svg className="absolute w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                                    </pattern>
                                    <rect width="100" height="100" fill="url(#grid)" />
                                </svg>

                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="grid grid-cols-2 gap-6 w-full h-full max-w-sm opacity-30 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                        <div className="bg-white rounded-2xl w-full h-4/5 self-end backdrop-blur-md" />
                                        <div className="bg-primary-200 rounded-2xl w-full h-full backdrop-blur-md" />
                                        <div className="bg-white rounded-2xl w-full h-full backdrop-blur-md" />
                                        <div className="bg-white rounded-2xl w-full h-4/5 backdrop-blur-md" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-200 rounded-full opacity-30 blur-3xl" />
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-500 rounded-full opacity-30 blur-3xl" />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
