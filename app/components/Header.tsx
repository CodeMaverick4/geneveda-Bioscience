"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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

const menuItems = [
    { label: "About Us", href: "/about" },
    { label: "R&D Services", href: "/services/rd" },
    { label: "Bioinformatics Data Analysis", href: "/services/bioinformatics" },
    { label: "Next Generation Sequencing (NGS)", href: "/services/ngs" },
    { label: "Diagnostics", href: "/services/diagnostics" },
    // { label: "Aptamers", href: "/services/aptamers" },
    // { label: "AMR", href: "/services/amr" },
    { label: "Global Study Abroad Guidance", href: "/services/study-abroad" },
];

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState("light");
    const pathname = usePathname();

    // Initialize Theme
    useEffect(() => {
        setIsMounted(true);
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                setTheme(savedTheme);
                document.documentElement.classList.toggle("dark", savedTheme === "dark");
            } else {
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

    if (!isMounted) return null;

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffeb0f] border-b border-[#7c1d85]/10 shadow-sm transition-all duration-300">
                <div className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-4 min-h-[80px]">
                    <div
                        className={`flex items-center justify-between w-full transition-all duration-300
            ${isSearchOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
                    >
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="flex items-center gap-3 text-[#7c1d85] hover:opacity-75 transition-colors group"
                        >
                            <Menu className="w-6 h-6" />
                            <span className="text-sm font-bold uppercase tracking-wide group-hover:underline">Menu</span>
                        </button>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Link
                                href="/"
                                className="text-3xl tracking-tight font-bold text-[#7c1d85] hover:opacity-90 transition-opacity"
                            >
                                GeneVeda
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 text-[#7c1d85]">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-[#7c1d85]/5 transition-colors"
                            >
                                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                            </button>

                            <button onClick={() => setIsSearchOpen(true)} className="hover:opacity-75 transition-opacity">
                                <Search className="w-5 h-5" />
                            </button>
                            <Link
                                href="/contact"
                                className="text-sm font-bold hidden sm:block transition-transform hover:scale-105 bg-[#7c1d85] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
                            >
                                Contact
                            </Link>

                            <button className="flex items-center gap-2 hover:opacity-75 transition-opacity">
                                <Globe className="w-5 h-5" />
                                <span className="text-sm font-medium">IN</span>
                            </button>
                        </div>
                    </div>

                    {isSearchOpen && (
                        <div className="absolute inset-0 bg-[#ffeb0f] z-30 flex items-center justify-center animate-slideDown">
                            <div className="w-full max-w-5xl px-4 flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center h-12 border border-[#7c1d85] rounded-full px-3 shadow-md bg-white">
                                        <button className="flex items-center gap-2 pr-3 border-r border-[#7c1d85]/20 text-sm text-[#7c1d85]">
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

                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm z-[70] shadow-2xl p-6 overflow-y-auto bg-[#ffeb0f] border-r-4 border-[#ffeb0f]`}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-2xl font-bold text-[#7c1d85]">
                                    GeneVeda
                                </span>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#7c1d85]"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col space-y-2">
                                {menuItems.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            onClick={() => setIsSidebarOpen(false)}
                                            className={`flex items-center justify-between p-4 rounded-xl transition-all font-medium text-lg
                                            ${isActive ? "bg-white/30 text-[#7c1d85] font-bold" : "text-[#7c1d85] hover:bg-white/20"}
                                            `}
                                        >
                                            {item.label}
                                            <ChevronRight className={`w-5 h-5 opacity-60 ${isActive ? "opacity-100" : ""}`} />
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="mt-12 pt-8 border-t border-[#7c1d85]/10">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="w-full block text-center py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 active:scale-95
                                        bg-[#7c1d85] text-white"
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
