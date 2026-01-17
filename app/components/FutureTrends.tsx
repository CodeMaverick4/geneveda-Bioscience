"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

const tabs = ["Research Areas", "Applications", "Future Trends"];

const trends = [
    {
        title: "Artificial Intelligence in Biology",
        subtitle: "AI-powered drug discovery, protein folding prediction, and genomic analysis",
        description: "Machine learning algorithms are accelerating biological research by analyzing vast datasets, predicting molecular interactions, and identifying potential therapeutic targets with unprecedented speed.",
        tags: ["AlphaFold", "Drug Discovery", "Genomics"],
        color: "blue",
        borderColor: "border-blue-200",
        bgHover: "hover:bg-blue-50",
        tagBg: "bg-blue-100",
        tagText: "text-blue-700"
    },
    {
        title: "Organ-on-a-Chip Technology",
        subtitle: "Miniaturized tissue models revolutionizing drug testing and disease research",
        description: "Microfluidic devices that simulate human organs enable researchers to study disease mechanisms and test treatments without animal models, leading to more accurate and ethical research.",
        tags: ["Microfluidics", "Tissue Engineering", "Drug Testing"],
        color: "purple",
        borderColor: "border-purple-200",
        bgHover: "hover:bg-purple-50",
        tagBg: "bg-purple-100",
        tagText: "text-purple-700"
    },
    {
        title: "Quantum Biology",
        subtitle: "Exploring quantum effects in biological systems",
        description: "Understanding how quantum phenomena like superposition and entanglement play roles in photosynthesis, enzyme catalysis, and even bird navigation opens new frontiers in biology.",
        tags: ["Photosynthesis", "Enzyme Activity", "Quantum Effects"],
        color: "green",
        borderColor: "border-green-200",
        bgHover: "hover:bg-green-50",
        tagBg: "bg-green-100",
        tagText: "text-green-700"
    },
    {
        title: "Longevity Science",
        subtitle: "Understanding and potentially extending the human lifespan",
        description: "Research into aging mechanisms, cellular senescence, and metabolic pathways is revealing potential interventions that could extend healthy lifespan and reduce age-related diseases.",
        tags: ["Anti-Aging", "Senescence", "Metabolism"],
        color: "orange",
        borderColor: "border-orange-200",
        bgHover: "hover:bg-orange-50",
        tagBg: "bg-orange-100",
        tagText: "text-orange-700"
    }
];

export default function FutureTrends() {
    const [activeTab, setActiveTab] = useState("Future Trends");

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Tabs */}
                <ScrollReveal width="100%" className="flex justify-center mb-16">
                    <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-gray-100">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab ? "bg-white shadow-md text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Header */}
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Future Trends
                    </h2>
                    <p className="text-lg text-gray-500 font-medium">
                        Emerging technologies and innovations on the horizon
                    </p>
                </ScrollReveal>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {trends.map((trend, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className={`h-full bg-white rounded-3xl p-8 border ${trend.borderColor} shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:opacity-90 transition-opacity">
                                    {trend.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium mb-6">
                                    {trend.subtitle}
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {trend.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {trend.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${trend.tagBg} ${trend.tagText}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
