"use client";

import AnimatedButton from "./AnimatedButton";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal width="100%">
                    <div className="bg-primary-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-white rounded-full blur-[120px]" />
                            <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-primary-300 rounded-full blur-[140px]" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                                Ready to accelerate your <br /> research or career?
                            </h2>
                            <p className="text-white/90 text-xl mb-12 max-w-2xl font-light">
                                Join hundreds of scientists, students, and institutions achieving their goals with GeneVeda.
                            </p>

                            <div className="bg-white p-1 rounded-full inline-block">
                                <AnimatedButton href="/book-call">
                                    Book a Discovery Call
                                </AnimatedButton>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
