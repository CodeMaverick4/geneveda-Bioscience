"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Do you offer custom R&D services for startups?",
        answer: "Yes, we specialize in tailored R&D solutions that are scalable and cost-efficient, perfect for early-stage biotech ventures."
    },
    {
        question: "What bioinformatics services do you provide?",
        answer: "We offer comprehensive pipelines for genomics, transcriptomics, molecular docking, and structural analysis with publication-ready visualizations."
    },
    {
        question: "Who can apply for your study abroad guidance?",
        answer: "Our mentorship is open to students and professionals seeking Masters, PhD, or research positions worldwide, including assistance with SOPs and LORs."
    },
    {
        question: "Is the training suitable for non-coders?",
        answer: "Absolutely. Our modules are designed to take you from zero to proficiency in biological data analysis, regardless of your coding background."
    },
    {
        question: "How do I start a project?",
        answer: "Booking a discovery call is the best way to start. We'll discuss your specific needs and propose a customized roadmap."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Common Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about partnering with us.
                    </p>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div
                                className={`rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-primary-50/50' : 'bg-white hover:bg-gray-50'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg font-bold pr-8 ${openIndex === index ? 'text-primary-700' : 'text-gray-900'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400'}`}>
                                        {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium">
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
