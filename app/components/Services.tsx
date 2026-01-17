"use client";

import {
    FlaskConical,
    Binary,
    Microscope,
    Activity,
    GraduationCap,
    Globe
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
    {
        title: "R&D Services",
        description: "End-to-end research support from hypothesis to publication.",
        icon: FlaskConical,
    },
    {
        title: "Bioinformatics Data Analysis",
        description: "Advanced computational analysis using robust pipelines for genomic & proteomic data.",
        icon: Binary,
    },
    {
        title: "Next-Gen Sequencing (NGS)",
        description: "High-throughput sequencing solutions (WGS, WES, RNA-Seq) for precise insights.",
        icon: Microscope,
    },
    {
        title: "Diagnostics & AMR",
        description: "Cutting-edge diagnostics and antimicrobial resistance studies for healthcare.",
        icon: Activity,
    },
    {
        title: "Industry Training Programs",
        description: "Hands-on technical training for students and professionals in molecular biology & coding.",
        icon: GraduationCap,
    },
    {
        title: "Study Abroad Guidance",
        description: "Mentorship for global academic and career opportunities, including SOP & LOR support.",
        icon: Globe,
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-white relative z-0">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Expertise
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions bridging the gap between research, innovation, and career development.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div
                                className="group h-full bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Hover Gradient Blob */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary-50/80 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-100 transition-colors duration-300 relative z-10">
                                    <service.icon className="w-8 h-8 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors relative z-10">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-medium relative z-10">
                                    {service.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
