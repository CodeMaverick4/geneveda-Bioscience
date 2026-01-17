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
    const pathname = usePathname();

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
                <div className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-4 min-h-[80px]">
                    <div
                        className={`flex items-center justify-between w-full transition-all duration-300
            ${isSearchOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/"
                                className="text-3xl tracking-tight font-bold text-primary-500 hover:opacity-90 transition-opacity"
                            >
                                GeneVeda
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {menuItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors hover:text-primary-500
                                        ${isActive ? "text-primary-500 font-bold" : "text-gray-600"}`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-all"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden flex items-center justify-center p-2 text-primary-500 hover:bg-primary-50 rounded-full transition-colors"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {isSearchOpen && (
                        <div className="absolute inset-0 bg-white z-30 flex items-center justify-center animate-slideDown border-b border-gray-100">
                            <div className="w-full max-w-5xl px-4 flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center h-12 border border-primary-500 rounded-full px-3 shadow-md bg-white">
                                        <button className="flex items-center gap-2 pr-3 border-r border-gray-200 text-sm text-gray-500">
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

                                        <button className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition-colors">
                                            Search
                                        </button>
                                    </div>
                                </div>

                                <button onClick={() => setIsSearchOpen(false)} className="text-gray-500 hover:text-red-500 transition-colors">
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
                            className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm z-[70] shadow-2xl p-6 overflow-y-auto bg-primary-50 border-r border-primary-200`}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-2xl font-bold text-primary-500">
                                    GeneVeda
                                </span>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
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
                                            ${isActive ? "bg-primary-50 text-primary-500 font-bold" : "text-gray-600 hover:bg-gray-50"}
                                            `}
                                        >
                                            {item.label}
                                            <ChevronRight className={`w-5 h-5 opacity-60 ${isActive ? "opacity-100" : ""}`} />
                                        </Link>
                                    );
                                })}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
