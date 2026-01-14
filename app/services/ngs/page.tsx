"use client";

import { useState } from "react";
import AnimatedButton from "../../components/AnimatedButton";
import ScrollReveal from "../../components/ScrollReveal";
import {
    Dna,
    Microscope,
    FileText,
    Activity,
    Layers,
    CheckCircle2,
    ArrowRight,
    Minus,
    ArrowDown,
    Zap,
    Pipette,
    ScanBarcode
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NGSPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // 1. Services Grid Data
    const services = [
        {
            title: "Library Preparation Guidance",
            desc: "Expert consultation on selecting the right library prep kits (Illumina, Nanopore) for your specific sample types and research goals.",
            icon: Pipette
        },
        {
            title: "Whole Genome Sequencing (WGS)",
            desc: "Comprehensive sequencing of the entire genome to assemble genomes, identify varients, or study evolution.",
            icon: Dna
        },
        {
            title: "Whole Exome Sequencing (WES)",
            desc: "Targeted sequencing of protein-coding regions to identify disease-causing variants with cost-effective high coverage.",
            icon: ScanBarcode
        },
        {
            title: "RNA Sequencing (RNA-Seq)",
            desc: "Transcriptome profiling to measure gene expression, discover novel transcripts, and analyze biological pathways.",
            icon: Activity
        },
        {
            title: "Targeted Panels / Amplicon",
            desc: "Focus on specific gene sets or regions (e.g., cancer panels, 16S rRNA) for deep sequencing and precision diagnostics.",
            icon: Layers
        },
        {
            title: "Quality Control & Reporting",
            desc: "Rigorous QC assessments of raw reads followed by detailed technical reports to ensure data integrity.",
            icon: FileText
        }
    ];

    // 2. Workflow Steps
    const workflow = [
        { title: "Sample Collection", desc: "Guidance on sample isolation and preservation." },
        { title: "Sequencing", desc: "High-throughput sequencing using state-of-the-art platforms." },
        { title: "Data Analysis", desc: "Processing raw data through validated bioinformatics pipelines." },
        { title: "Final Report", desc: "Delivery of actionable insights and publication-ready figures." },
    ];

    // 3. Applications Grid
    const applications = [
        "Cancer & Precision Medicine",
        "Microbial Genomics / AMR",
        "Rare Disease Research",
        "Transcriptomics & Gene Expression",
        "Variant Discovery (SNPs/Indels)",
        "Biomarker Research"
    ];

    // 4. Why Choose Us
    const highlights = [
        "Research-driven guidance from PhD experts",
        "Publication-ready outputs & figures",
        "Accurate & validated sequencing pipelines",
        "Fast turnaround + mentorship support"
    ];

    // 5. FAQ Data
    const faqs = [
        {
            question: "Which sequencing platform do you recommend?",
            answer: "It depends on your specific goals. For short-read accuracy (e.g., variant calling), we often recommend Illumina. For long reads (e.g., de novo assembly), Oxford Nanopore or PacBio might be better. We guide you through this choice."
        },
        {
            question: "What is the required sample quality?",
            answer: "High-quality DNA/RNA is crucial. We provide detailed protocols for sample extraction and QC requirements (e.g., RIN scores > 7 for RNA-Seq) to ensure success."
        },
        {
            question: "Do you include bioinformatics analysis?",
            answer: "Yes, we offer end-to-end services. You can choose to have us handle just the sequencing or the full workflow including comprehensive bioinformatics analysis."
        }
    ];

    return (
        <main className="bg-white text-black min-h-screen">

            {/* HERO SECTION */}
            <section className="relative py-20 lg:py-14 overflow-hidden bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <h1 className="text-5xl lg:text-7xl font-bold text-[#7c1d85] mb-6 leading-tight">
                            Next-Generation <br /> Sequencing (NGS)
                        </h1>
                        <p className="text-xl text-[#7c1d85] font-medium mb-4">
                            High-quality sequencing workflows + data-driven insights for research and diagnostics
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
                            Uncover the genetic blueprint of life with our comprehensive NGS services. From sample prep to advanced data analysis, we ensure precision at every step.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <AnimatedButton href="/contact">
                                Book Consultation
                            </AnimatedButton>
                            <AnimatedButton href="/services/bioinformatics" variant="outline" className="!border-gray-300 !text-gray-600 hover:!border-[#7c1d85] hover:!text-[#7c1d85]">
                                View Bioinformatics
                            </AnimatedButton>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="relative h-[400px] w-full flex items-center mx-auto justify-center">
                        <div className="relative w-80 h-80">
                            {/* Abstract NGS Visual */}
                            <div className="absolute inset-0 bg-[#ffeb0f]/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute inset-4 bg-[#7c1d85]/10 rounded-full blur-2xl" />

                            {/* Central Icon */}
                            <div className="absolute inset-0 m-auto w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-10">
                                <Dna className="w-20 h-20 text-[#7c1d85]" />
                            </div>

                            {/* Orbiting Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 z-0"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                                    <ScanBarcode className="w-6 h-6 text-[#ffeb0f]" />
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                                    <Activity className="w-6 h-6 text-[#7c1d85]" />
                                </div>
                                <div className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                                    <Layers className="w-6 h-6 text-gray-400" />
                                </div>
                                <div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                                    <Pipette className="w-6 h-6 text-[#7c1d85]" />
                                </div>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Sequencing Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive genomics solutions tailored to your research needs.</p>
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

            {/* WORKFLOW STEPS */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal width="100%" className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Workflow</h2>
                        <p className="text-gray-600">From sample to insight in 4 simple steps.</p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workflow.map((step, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="relative">
                                <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-full bg-[#7c1d85] flex items-center justify-center font-bold text-white text-xl mb-6 shadow-lg shadow-[#7c1d85]/20">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPLICATIONS & WHY CHOOSE US */}
            <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Applications Grid */}
                <div>
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Applications</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {applications.map((app, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#7c1d85]/50 transition-colors shadow-sm">
                                    <Zap className="w-5 h-5 text-[#ffeb0f] flex-shrink-0 fill-[#ffeb0f]" />
                                    <span className="font-semibold text-gray-800">{app}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Why Choose Us */}
                <div>
                    <ScrollReveal delay={0.2}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose GeneVeda?</h2>
                        <div className="bg-[#fcfafc] p-8 rounded-[2.5rem] border border-[#7c1d85]/10">
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
            </section>

            {/* CTA BANNER */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto bg-[#7c1d85] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need NGS support for your project?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Empower your research with high-throughput sequencing and expert analysis.
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
