"use client";

import AnimatedButton from "./AnimatedButton";
import ParticleRing from "./ParticleRing";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white min-h-[calc(100vh-80px)] flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12 lg:py-0">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center items-start text-left"
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
                        <AnimatedButton href="/consultation">
                            Get Consultation
                        </AnimatedButton>

                        <AnimatedButton href="/services" variant="outline" className="!border-gray-300 !text-gray-600 hover:!border-[#7c1d85]">
                            Explore Services
                        </AnimatedButton>
                    </div>
                </motion.div>

                {/* Right Content - 3D Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-[400px] lg:h-[600px] w-full relative"
                >
                    <ParticleRing />
                </motion.div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c1d85]/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffeb0f]/10 rounded-full blur-[80px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        </section>
    );
}
