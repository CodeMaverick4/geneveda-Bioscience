"use client";

import { useState } from "react";
import AnimatedButton from "../../components/AnimatedButton";
import ScrollReveal from "../../components/ScrollReveal";
import {
    FlaskConical,
    FileText,
    Microscope,
    LineChart,
    ClipboardCheck,
    Users,
    ArrowRight,
    CheckCircle2,
    Minus,
    ArrowDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RDServicePage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const offerings = [
        {
            title: "Research Planning & Study Design",
            desc: "Expert guidance on hypothesis formulation, experimental design, and statistical power analysis to ensuring robust results.",
            icon: FlaskConical
        },
        {
            title: "Literature Review & Proposal Support",
            desc: "Comprehensive review of existing research, identifying gaps, and assisting with grant or thesis proposal writing.",
            icon: FileText
        },
        {
            title: "Experimental Guidance & Workflow",
            desc: "Step-by-step support for lab protocols, technique optimization, and troubleshooting complex experiments.",
            icon: Microscope
        },
        {
            title: "Data Interpretation & Insights",
            desc: "Transforming raw data into meaningful scientific insights with advanced statistical analysis and visualization.",
            icon: LineChart
        },
        {
            title: "Technical Documentation & Reports",
            desc: "Preparation of high-quality technical reports, SOPs, and publication-ready manuscripts.",
            icon: ClipboardCheck
        },
        {
            title: "Custom Research Consultation",
            desc: "Tailored consulting for specific research challenges, from biotech product development to academic projects.",
            icon: Users
        }
    ];

    const steps = [
        { title: "Consult", desc: "We discuss your goals and requirements." },
        { title: "Plan", desc: "We design a roadmap and experimental strategy." },
        { title: "Execute", desc: "We support the implementation and data collection." },
        { title: "Deliver", desc: "You receive analyzed data and comprehensive reports." },
    ];

    const highlights = [
        "Expert scientific support from PhD-level researchers",
        "Quality & accuracy focused methodology",
        "Faster turnaround time for critical projects",
        "Dedicated mentorship & guidance throughout"
    ];

    const faqs = [
        {
            question: "Do you help with PhD research proposals?",
            answer: "Yes, we provide end-to-end support for refining research topics, conducting literature reviews, and structuring robust proposals."
        },
        {
            question: "Can you assist with raw data analysis?",
            answer: "Absolutely. We can take your raw experimental data and perform advanced statistical analysis and generate publication-quality figures."
        },
        {
            question: "What is the typical turnaround time?",
            answer: "It depends on the project scope, but we pride ourselves on speed. Small analyses can be done in 3-5 days, while complex projects typically take 2-4 weeks."
        }
    ];

    return (
        <main className="bg-white text-black min-h-screen">

            {/* HERO SECTION */}
            <section className="relative py-20 lg:py-14 overflow-hidden bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <h1 className="text-5xl lg:text-7xl font-bold text-[#7c1d85] mb-6 leading-tight">
                            R&D Services
                        </h1>
                        <p className="text-xl text-[#7c1d85] font-medium mb-4">
                            Research-driven bioscience solutions for labs, startups, and institutions
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
                            Accelerate your scientific discovery with our expert Research & Development support. We help turn ideas into rigorous, validated science.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <AnimatedButton href="/contact">
                                Book Consultation
                            </AnimatedButton>
                            <AnimatedButton href="#offerings" variant="outline" className="!border-gray-300 !text-gray-600 hover:!border-[#7c1d85] hover:!text-[#7c1d85]">
                                Explore Services
                            </AnimatedButton>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="relative h-[400px] w-full flex items-center mx-auto">
                        {/* Abstract Visual Representation of R&D */}
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 bg-[#ffeb0f]/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute inset-4 bg-[#7c1d85]/10 rounded-full blur-2xl" />
                            <FlaskConical className="absolute inset-0 m-auto w-32 h-32 text-[#7c1d85] drop-shadow-2xl" />
                            <div className="absolute top-0 right-0 p-4 bg-white rounded-2xl shadow-lg border border-gray-100 animate-bounce delay-700">
                                <LineChart className="w-8 h-8 text-[#ffeb0f]" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-4 bg-white rounded-2xl shadow-lg border border-gray-100 animate-bounce delay-1000">
                                <Microscope className="w-8 h-8 text-[#7c1d85]" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SERVICE OFFERINGS GRID */}
            <section id="offerings" className="py-24 max-w-7xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Service Offerings</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive support across the entire research lifecycle.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="h-full p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ffeb0f] transition-all group">
                                <div className="w-14 h-14 bg-[#fdfcec] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ffeb0f] transition-colors">
                                    <item.icon className="w-7 h-7 text-[#7c1d85]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* HOW WE WORK & HIGHLIGHTS */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Process */}
                    <div>
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold text-gray-900 mb-12">How We Work</h2>
                            <div className="space-y-8">
                                {steps.map((step, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#ffeb0f] flex items-center justify-center font-bold text-[#7c1d85] shadow-sm relative z-10 group-hover:bg-[#ffeb0f] transition-colors">
                                            {i + 1}
                                        </div>
                                        <div className="pb-8 border-l-2 border-gray-200 pl-8 -ml-12 lg:ml-0 lg:border-l-0 lg:pl-0 lg:border-l-transparent">
                                            {/* Mobile timeline line logic omitted for simplicity, keeping nice list */}
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Why Choose Us */}
                    <div>
                        <ScrollReveal delay={0.2}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose GeneVeda?</h2>
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                                <ul className="space-y-6">
                                    {highlights.map((point, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#7c1d85] flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-lg font-medium text-gray-700">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-gray-100">
                                    <p className="text-gray-500 italic mb-6">
                                        "GeneVeda's insights transformed our experimental approach, saving us months of trial and error."
                                    </p>
                                    <AnimatedButton href="/contact" className="w-full justify-center">
                                        Book a Call
                                    </AnimatedButton>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto bg-[#7c1d85] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start your R&D project?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Don't let technical hurdles slow you down. Get expert support today.
                        </p>
                        <AnimatedButton href="/contact" variant="outline" className="!bg-[#ffeb0f] !text-black !border-[#ffeb0f] hover:!bg-white hover:!text-[#7c1d85] hover:!border-white">
                            Book a Call
                        </AnimatedButton>
                    </div>
                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ffeb0f]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
            </section>

            {/* MINI FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Common Questions</h2>
                </ScrollReveal>

                <div className="flex flex-col gap-4 w-full">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div
                                className={`w-full bg-white rounded-[1.5rem] border overflow-hidden transition-all duration-300 border-black ${openIndex === index ? "shadow-lg bg-gray-50" : "shadow-sm hover:bg-gray-50"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 px-8 text-left gap-4"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === index ? "text-[#7c1d85]" : "text-gray-900"
                                        }`}>
                                        {faq.question}
                                    </span>

                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index
                                        ? "bg-[#7c1d85] text-white"
                                        : "bg-gray-100 text-black border border-black/20"
                                        }`}>
                                        <AnimatePresence mode="wait" initial={false}>
                                            {openIndex === index ? (
                                                <motion.div
                                                    key="minus"
                                                    initial={{ rotate: -90, opacity: 0 }}
                                                    animate={{ rotate: 0, opacity: 1 }}
                                                    exit={{ rotate: 90, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Minus className="w-5 h-5" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="arrow"
                                                    initial={{ rotate: 90, opacity: 0 }}
                                                    animate={{ rotate: 0, opacity: 1 }}
                                                    exit={{ rotate: -90, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ArrowDown className="w-5 h-5" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-8 pb-8 text-gray-600 leading-relaxed font-medium">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

        </main>
    );
}
