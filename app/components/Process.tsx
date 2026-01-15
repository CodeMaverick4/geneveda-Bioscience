"use client";

import { MessageSquare, ClipboardList, PenTool, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
    {
        id: "01",
        title: "Consult",
        description: "Discuss your goals and requirements with our experts.",
        icon: MessageSquare,
    },
    {
        id: "02",
        title: "Plan",
        description: "We design a tailored roadmap for your project or career path.",
        icon: ClipboardList,
    },
    {
        id: "03",
        title: "Execute",
        description: "Implementation using advanced tools and methodologies.",
        icon: PenTool,
    },
    {
        id: "04",
        title: "Deliver",
        description: "Receive high-quality results, reports, or guidance.",
        icon: CheckCircle,
    },
];

export default function Process() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-20">
                    <span className="text-[#7c1d85] font-bold tracking-wider text-sm uppercase bg-[#7c1d85]/5 px-4 py-2 rounded-full">How We Work</span>
                    <h2 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900">
                        Streamlined Process
                    </h2>
                </ScrollReveal>

                <div className="relative">
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0">
                        <div className="h-full bg-gradient-to-r from-[#7c1d85]/0 via-[#7c1d85]/20 to-[#7c1d85]/0" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <ScrollReveal key={index} delay={index * 0.15}>
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center relative mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border-4 border-gray-50 group-hover:border-[#ffeb0f]/50">
                                        <div className="w-20 h-20 bg-[#7c1d85] text-white rounded-full flex items-center justify-center text-3xl transition-transform group-hover:scale-110">
                                            <step.icon className="w-8 h-8" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#ffeb0f] rounded-full flex items-center justify-center text-black font-bold text-sm shadow-md border-2 border-white">
                                            {step.id}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#7c1d85] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
