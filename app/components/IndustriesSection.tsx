"use client";

import { useState } from "react";
import {
    Landmark,
    FlaskConical,
    Hospital,
    Users,
    TestTubeDiagonal,
} from "lucide-react";
const tabs = [
    { name: "Academia", icon: Landmark },
    { name: "Pharma / Biotech", icon: FlaskConical },
    { name: "Clinical Laboratories", icon: Hospital },
    { name: "Healthcare Professionals", icon: Users },
    { name: "CROs", icon: TestTubeDiagonal },
];

export default function IndustriesSection() {
    const [activeTab, setActiveTab] = useState("Healthcare Professionals");

    const stats = [
        { value: "85", description: "newborn lives saved daily." },
        {
            value: "550+",
            description:
                "mentions of the T-SPOT.TB test in peer reviewed publications.",
        },
        {
            value: "75+",
            description:
                "years of innovation in maternal, fetal, and neonatal health.",
        },
        {
            value: "300M+",
            description:
                "genomic tests performed to detect rare inherited diseases and hereditary cancers.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900">
                    Industries we serve
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.name}
                                onMouseEnter={() => setActiveTab(tab.name)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300
                  ${activeTab === tab.name
                                        ? "bg-[#7c1d85] text-white border-[#7c1d85]"
                                        : "bg-white text-[#7c1d85] border-[#7c1d85] hover:bg-purple-50"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{tab.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-2 ${index !== 0 ? "lg:border-l lg:border-gray-200 lg:pl-8" : ""
                                }`}
                        >
                            <div className="flex items-baseline gap-2 group cursor-pointer">
                                <span className="text-4xl font-normal text-[#7c1d85]">
                                    {stat.value}
                                </span>
                                <span className="text-[#7c1d85] text-2xl transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
