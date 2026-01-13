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
        <section className="py-24 bg-gray-50/50">
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
                                className="group h-full bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100/50 backdrop-blur-sm"
                            >
                                <div className="w-16 h-16 bg-[#F3E6F5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-8 h-8 text-[#7c1d85]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7c1d85] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
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
