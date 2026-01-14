"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedButton from "../../components/AnimatedButton";
import ScrollReveal from "../../components/ScrollReveal";
import {
    Globe,
    Minus,
    ArrowDown,
    Plane,
    GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StudyAbroadPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const services = [
        {
            title: "University Shortlisting",
            desc: "Curated list of universities in USA, UK, Europe, etc., matching your profile and budget.",
            icon: "/search.gif"
        },
        {
            title: "SOP & LOR Guidance",
            desc: "Expert editing and feedback to make your Statement of Purpose and Letters of Recommendation stand out.",
            icon: "/remote-worker.gif"
        },
        {
            title: "Profile Review & Roadmap",
            desc: "Strategic planning to enhance your profile with internships, projects, and publications.",
            icon: "/search.gif"
        },
        {
            title: "Scholarships & Funding",
            desc: "Guidance on identifying and applying for external scholarships and financial aid.",
            icon: "/remote-worker.gif"
        },
        {
            title: "Interview Preparation",
            desc: "Mock interviews and training for university admissions and visa interviews.",
            icon: "/remote-worker.gif"
        },
        {
            title: "Application Strategy",
            desc: "End-to-end mentorship on application portals, timelines, and documentation.",
            icon: "/search.gif"
        }
    ];

    const destinations = [
        { name: "United States", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80" },
        { name: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80" },
        { name: "Canada", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=400&q=80" },
        { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-01e6f06378c5?auto=format&fit=crop&w=400&q=80" },
        { name: "Germany", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80" },
        { name: "Ireland", image: "https://images.unsplash.com/photo-1590089415225-401cd6d9e45e?auto=format&fit=crop&w=400&q=80" },
        { name: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80" },
        { name: "New Zealand", image: "https://images.unsplash.com/photo-1578584897374-2d96695b23d9?auto=format&fit=crop&w=400&q=80" },
    ];

    const faqs = [
        {
            question: "Do you help with PhD applications?",
            answer: "Yes, we specialize in guiding students for both Masters and PhD programs, including finding supervisors and writing research proposals."
        },
        {
            question: "When should I start the process?",
            answer: "Ideally, 1 year before your intended intake. This gives enough time for test prep (GRE/IELTS), profile building, and applications."
        },
        {
            question: "Do you guarantee admission?",
            answer: "While we maximization your chances with expert guidance, admission decisions are ultimately made by the universities. Our track record, however, is exceptional."
        }
    ];

    // Data for the EXPANDED "How Study Abroad Works" section (6 Items)
    const journeySteps = [
        {
            title: "Explore Your Options",
            desc: "Start by browsing study abroad programs that align with your academic goals and personal interests. Discover opportunities that match your aspirations.",
            cta: "EXPLORE",
            href: "#",
            icon: "/search.gif"
        },
        {
            title: "Pick a Program",
            desc: "Select a program that best fits your goals. Consider rankings, location, curriculum, and cultural experiences to make an informed decision.",
            cta: "CHOOSE",
            href: "/contact",
            icon: "/remote-worker.gif"
        },
        {
            title: "Submit an Application",
            desc: "Complete your applications with our guidance. We help you organzie documents, write essays, and meet every deadline required.",
            cta: "APPLY",
            href: "/contact",
            icon: "/search.gif"
        },
        {
            title: "Funding Your Program",
            desc: "Explore scholarships, grants, and loan options. We assist in identifying financial aid opportunities to make your education affordable.",
            cta: "FIND FUNDS",
            href: "/contact",
            icon: "/remote-worker.gif"
        },
        {
            title: "Prepare to Travel",
            desc: "Get ready for your journey with visa counseling, accommodation assistance, and pre-departure briefings on life abroad.",
            cta: "PREPARE",
            href: "/contact",
            icon: "/search.gif"
        },
        {
            title: "Embark on Your Journey",
            desc: "Fly to your destination with confidence. We provide arrival support and connect you with alumni networks for a smooth transition.",
            cta: "FLY",
            href: "/contact",
            icon: "/remote-worker.gif"
        }
    ];

    return (
        <main className="bg-white text-black min-h-screen">

            {/* HERO SECTION */}
            <section className="relative py-20 lg:py-14 overflow-hidden bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <h1 className="text-5xl lg:text-7xl font-bold text-[#7c1d85] mb-6 leading-tight">
                            Global Study <br /> Abroad Guidance
                        </h1>
                        <p className="text-xl text-[#7c1d85] font-medium mb-4">
                            Guidance for students in biosciences / biotech to explore international education & career pathways
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
                            Turn your dream of studying abroad into reality. We provide personalized mentorship to help you secure admissions in top universities worldwide.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <AnimatedButton href="/contact">
                                Get Guidance
                            </AnimatedButton>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="relative h-[400px] w-full flex items-center mx-auto justify-center">
                        <div className="relative w-80 h-80">
                            {/* Visual */}
                            <div className="absolute inset-0 bg-[#ffeb0f]/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute inset-4 bg-[#7c1d85]/10 rounded-full blur-2xl" />

                            {/* Central Icon */}
                            <div className="absolute inset-0 m-auto w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-10">
                                <Globe className="w-20 h-20 text-[#7c1d85]" />
                            </div>

                            {/* Orbiting Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 z-0"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                                    <Plane className="w-6 h-6 text-[#ffeb0f]" />
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                                    <GraduationCap className="w-6 h-6 text-[#7c1d85]" />
                                </div>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* YOUR JOURNEY / HOW IT WORKS (UPDATED 6 STEPS) */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0f2e3d] mb-6 uppercase tracking-wide">
                        Your Journey to Success
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
                    {journeySteps.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} className="flex flex-col items-center text-center group h-full relative">

                            {/* Icon (GIF) */}
                            <div className="mb-6 relative w-16 h-16 transform transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>

                            <h3 className="text-xl font-bold text-[#0f2e3d] mb-4">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm px-4">
                                {item.desc}
                            </p>

                            <a href={item.href} className="mt-auto text-[#ffbc00] font-extrabold uppercase text-sm tracking-wider border-b-2 border-[#ffbc00] hover:text-[#7c1d85] hover:border-[#7c1d85] hover:border-b-[#7c1d85] transition-colors pb-1">
                                {item.cta}
                            </a>

                            {/* Vertical Divider (Desktop only, for items not in last column) */}
                            {(index + 1) % 3 !== 0 && (
                                <div className="hidden lg:block absolute right-0 top-10 bottom-10 w-[1px] bg-gray-100" style={{ right: '-1.5rem' }} />
                            )}
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-24 max-w-7xl mx-auto px-6 bg-gray-50/50">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Expert Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Focused support for every aspect of your application.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="h-full p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ffeb0f] transition-all group flex flex-col items-center text-center ">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6  transition-colors overflow-hidden ">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* DESTINATIONS CAROUSEL (NEW AUTO SLIDER) */}
            <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Destinations We Cover</h2>
                    <p className="text-gray-600">Explore opportunities in top educational hubs worldwide.</p>
                </ScrollReveal>

                <div className="relative w-full overflow-hidden">
                    {/* Gradient Overlay for Fade Effect */}
                    <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                    {/* Marquee Container */}
                    <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-8 px-8">
                        {/* Duplicate lists for seamless loop */}
                        {[...destinations, ...destinations, ...destinations].map((country, i) => (
                            <div
                                key={i}
                                className="relative w-72 h-48 rounded-xl overflow-hidden shadow-md flex-shrink-0 group cursor-pointer border border-gray-100"
                            >
                                <Image
                                    src={country.image}
                                    alt={country.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="288px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                    <span className="text-white font-bold text-xl tracking-wide">
                                        {country.name}
                                    </span>
                                </div>
                                {/* Highlight Overlay on Hover */}
                                <div className="absolute inset-0 bg-[#7c1d85]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto bg-[#7c1d85] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to plan your global journey?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Get personalized admissions counselling from experts who have walked the path.
                        </p>
                        <AnimatedButton href="/contact" variant="outline" className="!bg-[#ffeb0f] !text-black !border-[#ffeb0f] hover:!bg-white hover:!text-[#7c1d85] hover:!border-white">
                            Book a Consultation
                        </AnimatedButton>
                    </div>
                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ffeb0f]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
            </section>

            {/* MINI FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-6">
                <ScrollReveal width="100%" className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Common Questions</h2>
                </ScrollReveal>

                <div className="flex flex-col gap-4 w-full">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div
                                className={`w-full bg-white rounded-[1.5rem] border overflow-hidden transition-all duration-300 border-black ${openIndex === index ? "shadow-lg bg-gray-50" : "shadow-sm hover:bg-gray-50"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 px-8 text-left gap-4"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === index ? "text-[#7c1d85]" : "text-gray-900"
                                        }`}>
                                        {faq.question}
                                    </span>

                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index
                                        ? "bg-[#7c1d85] text-white"
                                        : "bg-gray-100 text-black border border-black/20"
                                        }`}>
                                        <AnimatePresence mode="wait" initial={false}>
                                            {openIndex === index ? (
                                                <motion.div
                                                    key="minus"
                                                    initial={{ rotate: -90, opacity: 0 }}
                                                    animate={{ rotate: 0, opacity: 1 }}
                                                    exit={{ rotate: 90, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Minus className="w-5 h-5" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="arrow"
                                                    initial={{ rotate: 90, opacity: 0 }}
                                                    animate={{ rotate: 0, opacity: 1 }}
                                                    exit={{ rotate: -90, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ArrowDown className="w-5 h-5" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-8 pb-8 text-gray-600 leading-relaxed font-medium">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

        </main>
    );
}
