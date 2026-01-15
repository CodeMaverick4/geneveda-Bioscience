"use client";

import { useState } from "react";
import AnimatedButton from "../../components/AnimatedButton";
import ScrollReveal from "../../components/ScrollReveal";
import {
    Dna,
    Database,
    FileCode2,
    BarChart3,
    Network,
    FileJson,
    ArrowRight,
    Minus,
    ArrowDown,
    BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BioinformaticsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const offerings = [
        {
            title: "NGS Data QC & Preprocessing",
            desc: "Rigorous quality control and preprocessing of raw sequencing data to ensure high-fidelity inputs for downstream analysis.",
            icon: Dna
        },
        {
            title: "Variant Calling & Annotation",
            desc: "Identification of SNPs and Indels with comprehensive functional annotation using leading databases (dbSNP, ClinVar).",
            icon: FileCode2
        },
        {
            title: "RNA-Seq & Expression Analysis",
            desc: "Differential gene expression analysis, clustering, and pathway enrichment to uncover biological significance.",
            icon: BarChart3
        },
        {
            title: "Metagenomics & Microbiome",
            desc: "Taxonomic profiling and functional analysis of microbial communities from complex environmental or clinical samples.",
            icon: Network
        },
        {
            title: "Functional Enrichment (GO/KEGG)",
            desc: "Gene Ontology mining and KEGG pathway mapping to translate gene lists into biological stories.",
            icon: BookOpen
        },
        {
            title: "Publication-Ready Reporting",
            desc: "Custom visualization (Heatmaps, PCA, Volcano plots) and comprehensive reports suited for high-impact journals.",
            icon: FileJson
        }
    ];

    const tools = [
        "FASTQC", "MultiQC", "Trimmomatic", "BWA / Bowtie2", "GATK",
        "STAR", "DESeq2", "Bioconductor", "Python (Pandas/NumPy)", "R Studio"
    ];

    const steps = [
        { title: "Consult", desc: "Understanding your research question and data." },
        { title: "Data Review", desc: "QC check of your raw data for feasibility." },
        { title: "Analysis", desc: "Running custom pipelines and statistical models." },
        { title: "Deliver", desc: "Interactive report handover and walkthrough." },
    ];

    const faqs = [
        {
            question: "What file formats do you accept?",
            answer: "We accept all standard formats including FASTQ, FASTA, BAM/SAM, and VCF. We can also assist with data retrieval from public repositories like SRA."
        },
        {
            question: "Can you help with custom pipeline development?",
            answer: "Yes, we build reproducible, scalable pipelines using Snakemake or Nextflow tailored to your specific workflow needs."
        },
        {
            question: "Do you provide support after delivery?",
            answer: "We offer a 2-week post-delivery support period to address any questions regarding the analysis results or figures."
        }
    ];

    return (
        <main className="bg-white text-black min-h-screen">

            <section className="relative py-20 lg:py-14 overflow-hidden bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <h1 className="text-5xl lg:text-7xl font-bold text-[#7c1d85] mb-6 leading-tight">
                            Bioinformatics & <br /> Data Analysis
                        </h1>
                        <p className="text-xl text-[#7c1d85] font-medium mb-4">
                            Genomics, transcriptomics, NGS data processing, and scientific reporting
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
                            Transform complex biological data into clear, actionable insights. Our expert team utilizes cutting-edge pipelines to drive your research forward.
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

                    <ScrollReveal delay={0.2} className="relative h-[400px] w-full flex items-center mx-auto justify-center">
                        <div className="relative w-72 h-72">
                            <div className="absolute inset-0 bg-[#ffeb0f]/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute inset-4 bg-[#7c1d85]/10 rounded-full blur-2xl" />
                            <Database className="absolute inset-0 m-auto w-32 h-32 text-[#7c1d85] drop-shadow-2xl" />

                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-100"
                            >
                                <Dna className="w-8 h-8 text-[#ffeb0f]" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-100"
                            >
                                <FileCode2 className="w-8 h-8 text-[#7c1d85]" />
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section id="offerings" className="py-24 max-w-7xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Analytic Capabilities</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">From raw reads to refined results.</p>
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

            <section className="py-16 bg-[#7c1d85]/5 border-y border-[#7c1d85]/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <ScrollReveal width="100%">
                        <h2 className="text-2xl font-bold text-[#7c1d85] mb-8 uppercase tracking-widest">Tools We Utilize</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {tools.map((tool, index) => (
                                <span
                                    key={index}
                                    className="px-6 py-3 bg-white rounded-full text-gray-700 font-bold shadow-sm border border-gray-200 hover:border-[#7c1d85] hover:text-[#7c1d85] transition-all cursor-default"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal width="100%" className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Workflow</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="relative">
                                <div className="flex flex-col items-center text-center p-6 ro group">
                                    <div className="w-16 h-16 rounded-full bg-[#fdfcec] border-2 border-[#ffeb0f] flex items-center justify-center text-2xl font-bold text-[#7c1d85] mb-6 group-hover:bg-[#ffeb0f] transition-colors relative z-10">
                                        {i + 1}
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-14 left-[50%] w-full h-1 bg-gray-100 -z-0" />
                                    )}

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto bg-[#7c1d85] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need expert data analysis?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Ensure your results are accurate, reproducible, and publication-ready.
                        </p>
                        <AnimatedButton href="/contact" variant="outline" className="!bg-[#ffeb0f] !text-black !border-[#ffeb0f] hover:!bg-white hover:!text-[#7c1d85] hover:!border-white">
                            Book a Consultation
                        </AnimatedButton>
                    </div>
                    {/* Decorative Circles */}
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
