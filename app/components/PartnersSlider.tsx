"use client";

import { Dna, Activity, Microscope, Zap, Database, Globe } from "lucide-react";

// List of technologies/services items
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
        <section className="py-12 bg-gray-50/50 border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <p className="text-sm font-bold text-[#7c1d85] uppercase tracking-widest bg-[#7c1d85]/5 inline-block px-4 py-1 rounded-full">
                    Technologies & Services We Power
                </p>
            </div>

            <div className="relative w-full overflow-hidden group">
                {/* Gradient Masks for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* 
           Crucial for seamless loop: 
           We use the 'animate-marquee' class defined in globals.css.
           This container holds 2 identical sets of items.
           It translates from 0 to -50% (width of one set).
        */}
                <div className="flex animate-marquee gap-8">
                    {/* Set 1 */}
                    <div className="flex gap-8 items-center">
                        {items.map((item, index) => (
                            <div
                                key={`a-${index}`}
                                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white  shadow-sm transition-all hover:border-[#7c1d85] hover:shadow-md  cursor-default group/card"
                            >
                                <div className="p-2 bg-[#7c1d85]/5 rounded-lg group-hover/card:bg-[#7c1d85] transition-colors">
                                    <item.icon className="w-5 h-5 text-[#7c1d85] group-hover/card:text-white transition-colors" />
                                </div>
                                <span className="text-lg font-bold text-gray-700 whitespace-nowrap">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Set 2 (Clone) */}
                    <div className="flex gap-8 items-center">
                        {items.map((item, index) => (
                            <div
                                key={`b-${index}`}
                                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-gray-200 shadow-sm transition-all hover:border-[#7c1d85] hover:shadow-md hover:-translate-y-1 cursor-default group/card"
                            >
                                <div className="p-2 bg-[#7c1d85]/5 rounded-lg group-hover/card:bg-[#7c1d85] transition-colors">
                                    <item.icon className="w-5 h-5 text-[#7c1d85] group-hover/card:text-white transition-colors" />
                                </div>
                                <span className="text-lg font-bold text-gray-700 whitespace-nowrap">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
