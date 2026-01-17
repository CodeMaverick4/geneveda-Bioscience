"use client";

import { Dna, Activity, Microscope, Zap, Database, Globe } from "lucide-react";

const items = [
    { name: "Metagenomics", icon: Dna },
    { name: "Advanced NGS", icon: Microscope },
    { name: "Bio-Informatics", icon: Database },
    { name: "Global Research", icon: Globe },
    { name: "Clinical Trials", icon: Activity },
    { name: "Rapid Diagnostics", icon: Zap },
    { name: "Genomic Data", icon: Dna },
    { name: "Molecular Bio", icon: Microscope },
    { name: "Aptamer Research", icon: Activity },
    { name: "AMR Studies", icon: Zap },
];

export default function PartnersSlider() {
    return (
        <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <p className="text-sm font-bold text-primary-500 uppercase tracking-widest bg-primary-50 inline-block px-4 py-1 rounded-full">
                    Technologies & Services We Power
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee gap-8 w-max">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center shrink-0">
                            {items.map((item, index) => (
                                <div
                                    key={`${i}-${index}`}
                                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-100 shadow-sm transition-all hover:border-primary-200 hover:shadow-md cursor-default group/card"
                                >
                                    <div className="p-1.5 bg-primary-50 rounded-full group-hover/card:bg-primary-500 transition-colors">
                                        <item.icon className="w-4 h-4 text-primary-600 group-hover/card:text-white transition-colors" />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700 whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
