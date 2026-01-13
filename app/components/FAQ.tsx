"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
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
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600">Answers to common questions about our services.</p>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div
                                className={`bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${openIndex === index ? "border-[#7c1d85] shadow-lg" : "border-gray-200 shadow-sm hover:border-[#ffeb0f]"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 px-8 text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === index ? "text-[#7c1d85]" : "text-gray-900"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-[#7c1d85] text-white rotate-180" : "bg-gray-100 text-gray-500"
                                        }`}>
                                        <ChevronDown className="w-5 h-5" />
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
                                            <div className="px-8 pb-8 text-gray-600 leading-relaxed">
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
