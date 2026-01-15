"use client";

import { useState } from "react";
import AnimatedButton from "../../components/AnimatedButton";
import ScrollReveal from "../../components/ScrollReveal";
import {
    Microscope,
    Stethoscope,
    FileSpreadsheet,
    ShieldAlert,
    ClipboardList,
    BookOpen,
    CheckCircle2,
    Minus,
    ArrowDown,
    Activity
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DiagnosticsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const services = [
        {
            title: "Clinical Data Interpretation",
            desc: "Expert support in interpreting complex clinical datasets to derive meaningful health insights.",
            icon: FileSpreadsheet
        },
        {
            title: "Microbiology & Infection",
            desc: "Comprehensive insights into microbial identification and infection trends for research and clinical labs.",
            icon: Microscope
        },
        {
            title: "AMR Profiling & Reporting",
            desc: "Detailed analysis of Antimicrobial Resistance (AMR) patterns to guide stewardship and treatment strategies.",
            icon: ShieldAlert
        },
        {
            title: "Molecular Diagnostics Support",
            desc: "Guidance on molecular assay validation, troubleshooting, and result verification.",
            icon: Activity
        },
        {
            title: "Lab Workflow & SOP Guidance",
            desc: "Optimization of laboratory workflows and development of Standard Operating Procedures (SOPs).",
            icon: ClipboardList
        },
        {
            title: "Research Documentation",
            desc: "Assistance with clinical study reports, regulatory documentation, and compliance records.",
            icon: BookOpen
        }
    ];

    const workflow = [
        { title: "Consult", desc: "Understanding your diagnostic needs or research goals." },
        { title: "Review", desc: "Thorough assessment of current data and workflows." },
        { title: "Analyze", desc: "In-depth analysis and strategy formulation." },
        { title: "Report", desc: "Delivery of actionable reports and recommendations." },
    ];

    const highlights = [
        "Uncompromising accuracy & precision",
        "Strict adherence to ethical guidelines",
        "Rapid turnaround for critical insights",
        "Expert guidance from clinical specialists"
    ];

    const faqs = [
        {
            question: "Do you offer direct patient diagnostics?",
            answer: "No, we provide specialized support services, data interpretation, and research guidance to laboratories, hospitals, and researchers rather than direct patient care."
        },
        {
            question: "Can you help set up an AMR surveillance program?",
            answer: "Yes, we can guide you in designing protocols, selecting markers, and establishing data reporting systems for effective AMR surveillance."
        },
        {
            question: "What standards do you follow?",
            answer: "We align our guidance with global standards such as CLSI and EUCAST guidelines for antimicrobial susceptibility testing and reporting."
        }
    ];

    return (
        <main className="bg-white text-black min-h-screen ">
            <section className="relative py-20 lg:py-14 overflow-hidden bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <h1 className="text-5xl lg:text-7xl font-bold text-[#7c1d85] mb-6 leading-tight">
                            Diagnostics & <br /> AMR
                        </h1>
                        <p className="text-xl text-[#7c1d85] font-medium mb-4">
                            Reliable diagnostic insights and antimicrobial resistance (AMR) support for better healthcare & research
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
                            Empowering laboratories and researchers with precise data interpretation and robust strategies to combat infectious diseases.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <AnimatedButton href="/contact">
                                Book Consultation
                            </AnimatedButton>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="relative h-[400px] w-full flex items-center mx-auto justify-center">
                        <div className="relative w-80 h-80">
                            {/* Abstract Visual */}
                            <div className="absolute inset-0 bg-[#ffeb0f]/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute inset-4 bg-[#7c1d85]/10 rounded-full blur-2xl" />

                            {/* Central Icon */}
                            <div className="absolute inset-0 m-auto w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-10">
                                <Stethoscope className="w-20 h-20 text-[#7c1d85]" />
                            </div>

                            {/* Orbiting Elements */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 z-0"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                                    <ShieldAlert className="w-6 h-6 text-[#ffeb0f]" />
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                                    <Microscope className="w-6 h-6 text-[#7c1d85]" />
                                </div>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            <section className="py-24 max-w-7xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Capabilities</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Enhancing diagnostic precision and research quality.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
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

            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold text-gray-900 mb-12">How We Work</h2>
                            <div className="space-y-8">
                                {workflow.map((step, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#ffeb0f] flex items-center justify-center font-bold text-[#7c1d85] shadow-sm relative z-10 group-hover:bg-[#ffeb0f] transition-colors">
                                            {i + 1}
                                        </div>
                                        <div className="pb-8 border-l-2 border-gray-200 pl-8 -ml-12 lg:ml-0 lg:border-l-0 lg:pl-0 lg:border-l-transparent">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    <div>
                        <ScrollReveal delay={0.2}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
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
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto bg-[#7c1d85] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need diagnostic support?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Ensure your results are accurate and actionable.
                        </p>
                        <AnimatedButton href="/contact" variant="outline" className="!bg-[#ffeb0f] !text-black !border-[#ffeb0f] hover:!bg-white hover:!text-[#7c1d85] hover:!border-white">
                            Book a Call
                        </AnimatedButton>
                    </div>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ffeb0f]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
            </section>

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
