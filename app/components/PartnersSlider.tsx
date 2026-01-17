"use client";

import { Dna, Globe, Microscope, Cpu, Activity, Database, FlaskConical, Atom } from "lucide-react";

const items = [
    { name: "Genomics", icon: Dna },
    { name: "Global Research", icon: Globe },
    { name: "NGS Analysis", icon: Microscope },
    { name: "Systems Biology", icon: Cpu },
    { name: "Diagnostics", icon: Activity },
    { name: "Bio-Data", icon: Database },
    { name: "Drug Discovery", icon: FlaskConical },
    { name: "Proteomics", icon: Atom },
];

export default function PartnersSlider() {
    return (
        <section className="py-12 bg-white border-b border-emerald-100 overflow-hidden">
            <div className="text-center mb-10">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-[0.2em]">
                    Trusted Technologies & Methods
                </span>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Fade Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Animated Marquee */}
                <div className="flex animate-marquee gap-12 w-max items-center">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-12 items-center shrink-0">
                            {items.map((item, index) => (
                                <div
                                    key={`${i}-${index}`}
                                    className="flex items-center gap-3 font-semibold text-lg text-gray-900"
                                >
                                    <item.icon className="w-6 h-6 text-emerald-600" />
                                    <span className="text-gray-900 hover:text-gray-900 transition-colors">
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
