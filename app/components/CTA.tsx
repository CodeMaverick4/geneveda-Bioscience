"use client";

import AnimatedButton from "./AnimatedButton";
import FloatingElement from "./ui/FloatingElement";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-28 px-6 bg-[#f7fbf7] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-140px] right-[-140px] w-[520px] h-[520px] bg-emerald-200/40 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-[-140px] left-[-140px] w-[520px] h-[520px] bg-emerald-300/25 rounded-full blur-[110px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <FloatingElement duration={5} yOffset={10}>
                    <div className="relative text-center">
                        <motion.div
                            initial={{ scale: 0.96, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.75 }}
                            className="relative bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-[3rem] p-12 md:p-20 shadow-[0_20px_70px_rgba(0,0,0,0.08)] overflow-hidden group"
                        >
                            {/* Hover Border Glow Effect */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-emerald-300/60 rounded-[3rem] transition-colors duration-500 pointer-events-none" />

                            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                                Ready to{" "}
                                <span className="text-emerald-600">Accelerate</span> <br />
                                Your Research?
                            </h2>

                            <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                                Join the next generation of scientists and institutions elevating their work with
                                GeneVeda’s research-driven services.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-block relative z-20"
                            >
                                <div className="absolute inset-0 bg-emerald-400 blur-md opacity-20 group-hover:opacity-30 transition-opacity rounded-full" />

                                <AnimatedButton
                                    href="/contact"
                                    className="relative bg-emerald-600 text-black hover:text-white font-bold tracking-wide px-10 py-4 rounded-full hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/20"
                                >
                                    Start Your Project
                                </AnimatedButton>
                            </motion.div>
                        </motion.div>
                    </div>
                </FloatingElement>
            </div>
        </section>
    );
}
