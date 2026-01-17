"use client";

import { useMemo, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import {
    Landmark,
    FlaskConical,
    Hospital,
    Users,
    TestTubeDiagonal,
    CheckCircle2,
} from "lucide-react";

const industries = [
    { id: "academia", name: "Academia", icon: Landmark },
    { id: "pharma", name: "Pharma / Biotech", icon: FlaskConical },
    { id: "clinical", name: "Clinical Laboratories", icon: Hospital },
    { id: "healthcare", name: "Healthcare Professionals", icon: Users },
    { id: "cros", name: "CROs", icon: TestTubeDiagonal },
] as const;

type IndustryId = (typeof industries)[number]["id"];

const statsByIndustry: Record<
    IndustryId,
    { value: string; description: string }[]
> = {
    academia: [
        { value: "550+", description: "Peer-reviewed publications supported" },
        { value: "120+", description: "University collaborations" },
        { value: "95%", description: "Research reproducibility focus" },
        { value: "24/7", description: "Data & pipeline monitoring" },
    ],
    pharma: [
        { value: "80+", description: "Therapeutic pipelines supported" },
        { value: "30+", description: "Assay validation workflows" },
        { value: "10x", description: "Faster decision cycles" },
        { value: "99.9%", description: "Data integrity checkpoints" },
    ],
    clinical: [
        { value: "300M+", description: "Genomic tests processed" },
        { value: "85", description: "Newborn lives supported daily" },
        { value: "ISO", description: "Process-ready lab workflows" },
        { value: "Fast", description: "Turnaround driven reporting" },
    ],
    healthcare: [
        { value: "1,200+", description: "Clinician assisted case reviews" },
        { value: "Actionable", description: "Reports built for decisions" },
        { value: "Secure", description: "Privacy-first data handling" },
        { value: "Global", description: "Multi-region support" },
    ],
    cros: [
        { value: "75+", description: "Years of innovation mindset" },
        { value: "End-to-End", description: "From sample to insights" },
        { value: "Scalable", description: "Ready for large cohorts" },
        { value: "Transparent", description: "Clear milestones & delivery" },
    ],
};

export default function IndustriesSection() {
    const [active, setActive] = useState<IndustryId>("academia");

    const activeStats = useMemo(() => statsByIndustry[active], [active]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-[-140px] right-[-140px] w-[420px] h-[420px] bg-emerald-200/35 rounded-full blur-[90px] -z-10" />
            <div className="absolute bottom-[-140px] left-[-140px] w-[420px] h-[420px] bg-emerald-300/20 rounded-full blur-[90px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <ScrollReveal width="100%" className="text-left mb-10">
                    <span className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm tracking-widest uppercase bg-emerald-100 px-4 py-1 rounded-full mb-4">
                        <CheckCircle2 className="w-4 h-4" />
                        Industries
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Industries <span className="text-emerald-600">Verified</span>
                    </h2>

                    <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl">
                        Select an industry to see the impact metrics we deliver with research-grade precision.
                    </p>
                </ScrollReveal>

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {industries.map((item, index) => {
                        const isActive = active === item.id;
                        return (
                            <ScrollReveal key={item.id} delay={index * 0.06}>
                                <button
                                    type="button"
                                    onClick={() => setActive(item.id)}
                                    className={[
                                        "flex items-center gap-3 px-5 py-3 rounded-full border text-sm font-semibold transition-all",
                                        "shadow-sm hover:shadow-md hover:-translate-y-[1px]",
                                        isActive
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-white text-gray-800 border-emerald-100 hover:border-emerald-200",
                                    ].join(" ")}
                                >
                                    <item.icon
                                        className={[
                                            "w-5 h-5 transition-colors",
                                            isActive ? "text-white" : "text-emerald-600",
                                        ].join(" ")}
                                    />
                                    {item.name}
                                </button>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activeStats.map((stat, index) => (
                        <ScrollReveal key={index} delay={0.1 + index * 0.08}>
                            <div className="group rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-[2px] overflow-hidden">
                                {/* Top Accent Bar */}
                                <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-500" />

                                <div className="p-6">
                                    <p className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                        {stat.value}
                                    </p>

                                    <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                                        {stat.description}
                                    </p>

                                    <div className="mt-5 h-px w-full bg-emerald-100" />

                                    <p className="mt-4 text-xs uppercase tracking-widest text-emerald-700 font-semibold">
                                        Verified Impact
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
