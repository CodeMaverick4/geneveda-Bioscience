"use client";

import PrimaryButton from "./PrimaryButton";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white min-h-[92vh] flex items-center pt-24 sm:pt-32 pb-12 sm:pb-24">
            {/* Background Gradients */}
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary-50/70 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white border border-primary-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
                        </span>
                        <span className="text-primary-700 font-bold text-xs tracking-widest uppercase">
                            Redefining Life Sciences
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.05]">
                        Advancing Bioscience <br />
                        <span className="relative inline-block text-gray-900 z-10 px-2">
                            Innovation
                            <div className="absolute inset-x-0 bottom-2 w-full h-4 bg-primary-200/50 -z-10 skew-x-[-12deg] rounded-sm" />
                        </span>{" "}
                        & Careers
                    </h1>

                    <p className="mt-2 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-12 font-medium">
                        GeneVeda empowers researchers, clinicians, and students with cutting-edge genomics, diagnostics, and global career pathways.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto mb-20">
                        <PrimaryButton href="/contact" className="shadow-xl shadow-primary-500/20">
                            Get Consultation
                        </PrimaryButton>

                        <PrimaryButton
                            href="/services"
                            variant="outline"
                        >
                            Explore Services
                        </PrimaryButton>
                    </div>

                    {/* Trust Indicator / Mini Stats */}
                    <div className="w-full max-w-5xl border-t border-gray-100 pt-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center text-center">
                            <div className="flex flex-col items-center">
                                <span className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">550+</span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Publications</span>
                            </div>
                            <div className="hidden md:block w-px h-16 bg-gray-100 mx-auto" />
                            <div className="flex flex-col items-center">
                                <span className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">300M+</span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Tests Performed</span>
                            </div>
                            <div className="hidden md:block w-px h-16 bg-gray-100 mx-auto" />
                            <div className="flex flex-col items-center col-span-2 md:col-span-1">
                                <span className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Global</span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Research Network</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
