"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
    Menu,
    Search,
    X,
    Check,
    ChevronDown,
    Globe,
    ChevronRight,
    Sun,
    Moon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState("light");

    // Initialize Theme
    useEffect(() => {
        setIsMounted(true);
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                setTheme(savedTheme);
                document.documentElement.classList.toggle("dark", savedTheme === "dark");
            } else {
                // Default to system preference if no save
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setTheme(systemDark ? "dark" : "light");
                document.documentElement.classList.toggle("dark", systemDark);
            }
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    const menuItems = [
        { label: "About Us", href: "/about" },
        { label: "R&D services", href: "/#services" },
        { label: "Bioinformatics data analysis", href: "/#services" },
        { label: "Nextgeneration sequencing (NGS)", href: "/#services" },
        { label: "Diagnostics", href: "/#services" },
        { label: "Aptamers", href: "/#services" },
        { label: "AMR", href: "/#services" },
        { label: "Global study abroad guidance", href: "/#services" },
    ];

    if (!isMounted) return null;

    return (
        <>
            {/* ================= HEADER ================= */}
            {/* Background forced to Yellow (#ffeb0f) in both light and dark modes per instructions */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffeb0f] border-b border-[#7c1d85]/10 shadow-sm transition-all duration-300">
                <div className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-4 min-h-[80px]">

                    {/* MAIN HEADER CONTENT */}
                    <div
                        className={`flex items-center justify-between w-full transition-all duration-300
            ${isSearchOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
                    >
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="flex items-center gap-3 text-[#7c1d85] hover:opacity-75 transition-colors group"
                        >
                            <Menu className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase group-hover:underline">Menu</span>
                        </button>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Link
                                href="/"
                                className="text-3xl tracking-tight font-bold text-[#7c1d85] hover:opacity-80 transition-opacity"
                            >
                                GeneVeda
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 text-[#7c1d85]">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-black/5 transition-colors"
                            >
                                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                            </button>

                            <button onClick={() => setIsSearchOpen(true)} className="hover:opacity-75 transition-opacity">
                                <Search className="w-5 h-5" />
                            </button>

                            <Link
                                href="/contact"
                                className="text-sm font-medium hover:underline hidden sm:block transition-all"
                            >
                                Contact us
                            </Link>

                            <button className="flex items-center gap-2 hover:opacity-75 transition-opacity">
                                <Globe className="w-5 h-5" />
                                <span className="text-sm font-medium">IN</span>
                            </button>
                        </div>
                    </div>

                    {/* ================= SEARCH OVERLAY ================= */}
                    {isSearchOpen && (
                        <div className="absolute inset-0 bg-[#ffeb0f] z-30 flex items-center justify-center animate-slideDown">
                            <div className="w-full max-w-5xl px-4 flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center h-12 border border-[#7c1d85] rounded-full px-3 shadow-sm bg-white">
                                        <button className="flex items-center gap-2 pr-3 border-r border-gray-200 text-sm text-[#7c1d85]">
                                            <Check className="w-4 h-4" />
                                            Search all
                                            <ChevronDown className="w-4 h-4" />
                                        </button>

                                        <div className="flex items-center flex-1 px-3">
                                            <Search className="w-5 h-5 text-gray-400" />
                                            <input
                                                autoFocus
                                                placeholder="Search GeneVeda..."
                                                className="w-full px-3 outline-none bg-transparent placeholder:text-gray-400 text-black"
                                            />
                                        </div>

                                        <button className="bg-[#7c1d85] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#6a1970] transition-colors">
                                            Search
                                        </button>
                                    </div>
                                </div>

                                <button onClick={() => setIsSearchOpen(false)} className="text-[#7c1d85] hover:opacity-75 transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* ================= LEFT SIDEBAR ================= */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black z-[60]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-sm z-[70] shadow-2xl p-6 overflow-y-auto
                                md:bg-[#ffeb0f] bg-[#7c1d85]
                            `}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-2xl font-bold md:text-[#7c1d85] text-[#ffeb0f]">
                                    GeneVeda
                                </span>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-2 rounded-full hover:bg-black/10 transition-colors md:text-[#7c1d85] text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col space-y-2">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className="flex items-center justify-between p-3 rounded-xl transition-all font-medium text-lg
                                            md:text-[#7c1d85] md:hover:bg-white/50
                                            text-white hover:bg-white/10"
                                    >
                                        {item.label}
                                        <ChevronRight className="w-5 h-5 opacity-60" />
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-12 pt-8 border-t md:border-black/10 border-white/20">
                                <Link
                                    href="/contact"
                                    className="w-full block text-center py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 active:scale-95
                                        md:bg-[#7c1d85] md:text-white
                                        bg-[#ffeb0f] text-[#7c1d85]"
                                >
                                    Book a Consultation
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
