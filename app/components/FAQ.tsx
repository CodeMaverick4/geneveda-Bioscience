"use client";

import { useState } from "react";
import { ArrowDown, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Do you offer custom R&D services for startups?",
        answer: "Yes, we prioritize supporting startups with tailored R&D solutions effectively designed for scalability and cost-efficiency."
    },
    {
        question: "What types of bioinformatics analysis do you provide?",
        answer: "We cover genomics, transcriptomics, proteomics, metagenomics, molecular docking, and structural bioinformatics with publication-ready reporting."
    },
    {
        question: "Is your study abroad guidance only for students?",
        answer: "We assist both students and professionals looking to pursue Masters, PhDs, or research positions globally."
    },
    {
        question: "Can I join your training programs if I have no coding background?",
        answer: "Absolutely. Our 'Coding for Biology' and other training modules are designed to take you from beginner to advanced levels."
    },
    {
        question: "How do I start a project with GeneVeda?",
        answer: "Simply book a free consultation call. We will discuss your needs, outline a plan, and get started immediately."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50 dark:bg-[#0b0f14] transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Answers to common questions about our services.</p>
                </ScrollReveal>

                <div className="flex flex-col gap-4 w-full">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div
                                className={`w-full bg-white dark:bg-[#1a1f2e] rounded-[2rem] border overflow-hidden transition-all duration-300 border-black dark:border-gray-700 ${openIndex === index ? "shadow-lg" : "shadow-sm"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 px-8 text-left gap-4"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === index ? "text-[#7c1d85] dark:text-[#ffeb0f]" : "text-gray-900 dark:text-white"
                                        }`}>
                                        {faq.question}
                                    </span>

                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index
                                            ? "bg-[#7c1d85] text-white"
                                            : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300"
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
                                            <div className="px-8 pb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
