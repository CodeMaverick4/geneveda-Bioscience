"use client";

import { Award, FileText, Zap, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ThreeDCard from "./ui/3DCard";

const features = [
    {
        title: "Scientific Rigor",
        description: "Methodologies backed by rigorous scientific validation and latest research protocols.",
        icon: Award,
    },
    {
        title: "Publication Quality",
        description: "High-quality data analytics and visual reports suitable for top-tier journals.",
        icon: FileText,
    },
    {
        title: "Fast Turnaround",
        description: "Optimized pipelines to deliver critical research insights without delay.",
        icon: Zap,
    },
    {
        title: "Expert Guidance",
        description: "Direct mentorship from industry leaders and academic pioneers.",
        icon: Users,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#f7fbf7] relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-emerald-200/40 rounded-full blur-[90px] -z-10" />
            <div className="absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] bg-emerald-300/20 rounded-full blur-[90px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-left mb-16">
                        <span className="text-emerald-700 font-semibold text-sm tracking-widest uppercase mb-3 inline-block bg-emerald-100 px-4 py-1 rounded-full">
                            Why GeneVeda?
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Accelerating Discovery <br />
                            <span className="text-emerald-600">With Precision</span>
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl">
                            Research-first workflows, reliable insights, and a team built for scientific excellence.
                        </p>
                    </div>
                </ScrollReveal>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="h-full">
                            <ThreeDCard className="h-full">
                                <div className="h-full p-7 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 group">
                                    <div className="mb-6 p-3.5 rounded-2xl bg-emerald-50 w-fit border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                                        <feature.icon className="w-7 h-7 text-emerald-600" />
                                    </div>

                                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h4>

                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>

                                    <div className="mt-6 h-px w-full bg-gradient-to-r from-emerald-200/60 via-emerald-100/40 to-transparent" />
                                </div>
                            </ThreeDCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
