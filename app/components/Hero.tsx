"use client";

import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white min-h-[calc(100vh-80px)] flex items-center transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12 lg:py-0">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center items-start text-left mt-8"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[#7c1d85] mb-6 leading-[1.1]">
                        Advancing Bioscience <br />
                        <span className="relative inline-block text-gray-900">
                            Research, Innovation
                            <span className="absolute left-0 bottom-2 w-full h-3 bg-[#ffeb0f]/40 -z-10 skew-x-12" />
                        </span>
                        <br />
                        & Global Careers
                    </h1>

                    <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed mb-8">
                        GeneVeda Biosciences is a multidisciplinary biotech organization dedicated to advancing research,
                        technology, and education.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <AnimatedButton href="/contact">
                            Get Consultation
                        </AnimatedButton>

                        <AnimatedButton href="/services/rd" variant="outline" className="!border-gray-300 !text-gray-600 hover:!border-[#7c1d85] hover:!text-[#7c1d85]">
                            Explore Services
                        </AnimatedButton>
                    </div>
                </motion.div>

                {/* Right Content - Premium Biotech Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative w-full h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 group"
                >
                    {/* 
                         Selected Image: Abstract DNA Structure in Purple/Blue tones. 
                         Perfectly matches the #7c1d85 theme. 
                     */}
                    <Image
                        src="https://images.unsplash.com/photo-1633167606207-d840b507049c?auto=format&fit=crop&q=80&w=800"
                        alt="Advanced DNA Research & Innovation"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />

                    {/* Subtle Overlay to ensure text readability if badge overlaps, and to blend with theme */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#7c1d85]/10 to-transparent mix-blend-overlay pointer-events-none" />

                    {/* Floating Glassmorphism Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 flex items-center gap-5"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#ffeb0f]/20 flex items-center justify-center shrink-0 border border-[#ffeb0f]">
                            {/* DNA Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c1d85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6" /><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" /><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" /><path d="M17 6l-2.5-2.5" /><path d="M14 8l-1-1" /><path d="M7 18l2.5 2.5" /><path d="M3.5 14.5l.5.5" /><path d="M20 9l2.5 2.5" /><path d="M14.5 16.5l.5.5" /><path d="M6.5 5l2.5 2.5" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#7c1d85] text-lg">Future of Biotech</h3>
                            <p className="text-sm text-gray-600 font-medium">Pioneering research & education.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7c1d85]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ffeb0f]/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        </section>
    );
}
