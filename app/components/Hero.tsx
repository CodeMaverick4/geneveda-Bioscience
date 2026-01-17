"use client";

import PrimaryButton from "./PrimaryButton";
import { motion } from "framer-motion";
import FloatingElement from "./ui/FloatingElement";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[75vh] flex items-center pt-20 md:pt-24 pb-12 bg-dark">
            {/* Background Image */}
            <div
                className="absolute inset-0 -z-20 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/bioscience-hero-section.png')" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/65" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingElement delay={0} duration={8} className="absolute top-[10%] left-[5%] opacity-20">
                    <div className="w-64 h-64 rounded-full border border-emerald-400/30 blur-3xl bg-emerald-900/20" />
                </FloatingElement>

                <FloatingElement delay={2} duration={10} className="absolute bottom-[15%] right-[10%] opacity-20">
                    <div className="w-80 h-80 rounded-full border border-emerald-300/20 blur-3xl bg-emerald-500/10" />
                </FloatingElement>

                {[...Array(6)].map((_, i) => (
                    <FloatingElement
                        key={i}
                        delay={i * 1.5}
                        duration={5 + i}
                        className="absolute opacity-40"
                        style={{
                            top: `${10 + Math.random() * 70}%`,
                            left: `${5 + Math.random() * 90}%`,
                        }}
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                    </FloatingElement>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15"
                    >
                        {/* ✅ Visible Dot */}
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                        </span>

                        <span className="text-white/90 font-mono text-xs tracking-widest uppercase">
                            Redefining Life Sciences
                        </span>
                    </motion.div>

                    {/* Title */}
                    <FloatingElement yOffset={10} duration={8}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Advancing{" "}
                            {/* ✅ Gradient with fallback visible */}
                            <span className="text-emerald-300 bg-clip-text md:text-transparent md:bg-gradient-to-r md:from-emerald-300 md:via-emerald-200 md:to-emerald-300">
                                Bioscience
                            </span>
                            <br />
                            <span className="text-white">New Reality</span>
                        </h1>
                    </FloatingElement>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                        className="text-base md:text-xl text-white/85 leading-relaxed max-w-3xl mb-10"
                    >
                        GeneVeda empowers researchers with anti-gravity thinking in genomics, diagnostics,
                        and global career pathways.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.75 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
                    >
                        <PrimaryButton
                            href="/contact"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white border-none shadow-lg shadow-emerald-500/25 font-semibold"
                        >
                            Start Your Journey
                        </PrimaryButton>

                        <PrimaryButton
                            href="/services"
                            variant="outline"
                            className="border-white/25 text-white hover:bg-white/10 hover:border-white/40"
                        >
                            Explore Labs
                        </PrimaryButton>
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent z-20" />
        </section>
    );
}
