"use client";

import { MessageSquare, ClipboardList, PenTool, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
    {
        id: "01",
        title: "Consultation",
        description: "We discuss your specific research goals, career objectives, or project requirements in detail.",
        icon: MessageSquare,
    },
    {
        id: "02",
        title: "Strategy",
        description: "Our experts design a tailored roadmap, selecting the right tools and methodologies.",
        icon: ClipboardList,
    },
    {
        id: "03",
        title: "Execution",
        description: "We implement the project using advanced bioinformatics pipelines or training modules.",
        icon: PenTool,
    },
    {
        id: "04",
        title: "Delivery",
        description: "You receive high-quality, publication-ready results or certification.",
        icon: CheckCircle,
    },
];

export default function Process() {
    return (
        <section className="py-24 bg-[#f7fbf7] relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-[-140px] right-[-140px] w-[420px] h-[420px] bg-emerald-200/35 rounded-full blur-[90px] -z-10" />
            <div className="absolute bottom-[-140px] left-[-140px] w-[420px] h-[420px] bg-emerald-300/20 rounded-full blur-[90px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <ScrollReveal width="100%" className="text-left mb-16">
                    <span className="inline-block text-emerald-700 font-semibold text-sm tracking-widest uppercase bg-emerald-100 px-4 py-1 rounded-full mb-4">
                        Process
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                        How We <span className="text-emerald-600">Work</span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                        A seamless, transparent 4-step process designed for efficiency and results.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.12}>
                            <div className="group relative p-7 rounded-3xl bg-white border border-emerald-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300">
                                {/* Step number (light watermark) */}
                                <div className="text-5xl font-bold text-emerald-100 absolute top-4 right-6 pointer-events-none">
                                    {step.id}
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-emerald-50 border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                                    <step.icon className="w-6 h-6 text-emerald-600" />
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                <div className="mt-6 h-px w-full bg-gradient-to-r from-emerald-200/70 via-emerald-100/60 to-transparent" />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
