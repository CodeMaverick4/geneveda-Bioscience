"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Publications", value: "550+" },
    { label: "Tests Performed", value: "300M+" },
    { label: "Research Network", value: "Global" },
];

export default function Stats() {
    return (
        <section className="py-20 bg-[#07140d] relative overflow-hidden border-y border-white/10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="flex flex-col items-center justify-center text-center group"
                        >
                            <div className="relative mb-4">
                                <span className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 group-hover:to-primary-300 transition-all duration-500">
                                    {stat.value}
                                </span>

                                <div className="absolute -inset-4 bg-primary-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <span className="text-sm font-mono uppercase tracking-[0.2em] text-white/70">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
