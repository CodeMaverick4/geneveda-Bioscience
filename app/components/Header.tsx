"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
    Menu,
    Search,
    X,
    Check,
    ChevronDown,
    ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    { label: "About Us", href: "/about" },
    { label: "R&D Services", href: "/services/rd" },
    { label: "Bioinformatics Data Analysis", href: "/services/bioinformatics" },
    { label: "Next Generation Sequencing (NGS)", href: "/services/ngs" },
    { label: "Diagnostics", href: "/services/diagnostics" },
    { label: "Global Study Abroad Guidance", href: "/services/study-abroad" },
];

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
                <div className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-4 min-h-[76px]">
                    <div
                        className={`flex items-center justify-between w-full transition-all duration-300
              ${isSearchOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/"
                                className="text-2xl md:text-3xl tracking-tight font-bold text-emerald-700 hover:text-emerald-600 transition-colors"
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
                                        className={[
                                            "relative text-sm font-semibold transition-colors",
                                            isActive ? "text-emerald-700" : "text-gray-700 hover:text-emerald-700",
                                        ].join(" ")}
                                    >
                                        {item.label}

                                        {/* Active underline */}
                                        {isActive && (
                                            <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-emerald-600 rounded-full" />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-all"
                                aria-label="Open search"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden flex items-center justify-center p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
                                aria-label="Open menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Search Overlay */}
                    {isSearchOpen && (
                        <div className="absolute inset-0 bg-white/95 z-30 flex items-center justify-center border-b border-emerald-100">
                            <div className="w-full max-w-5xl px-4 flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center h-12 border border-emerald-200 rounded-full px-3 shadow-sm bg-white">
                                        <button className="flex items-center gap-2 pr-3 border-r border-gray-200 text-sm text-gray-600 font-medium">
                                            <Check className="w-4 h-4 text-emerald-600" />
                                            Search all
                                            <ChevronDown className="w-4 h-4" />
                                        </button>

                                        <div className="flex items-center flex-1 px-3">
                                            <Search className="w-5 h-5 text-gray-400" />
                                            <input
                                                autoFocus
                                                placeholder="Search GeneVeda..."
                                                className="w-full px-3 outline-none bg-transparent placeholder:text-gray-400 text-gray-900"
                                            />
                                        </div>

                                        <button className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-500 transition-colors">
                                            Search
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="text-gray-500 hover:text-red-500 transition-colors"
                                    aria-label="Close search"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        {/* Overlay */}
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
                            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm z-[70] shadow-2xl p-6 overflow-y-auto bg-white border-r border-emerald-100"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-2xl font-bold text-emerald-700 tracking-tight">
                                    GeneVeda
                                </span>

                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-2 rounded-full hover:bg-emerald-50 transition-colors text-gray-500 hover:text-gray-800"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col space-y-1">
                                {menuItems.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            onClick={() => setIsSidebarOpen(false)}
                                            className={[
                                                "flex items-center justify-between p-4 rounded-xl transition-all font-semibold text-base",
                                                isActive
                                                    ? "bg-emerald-50 text-emerald-800"
                                                    : "text-gray-700 hover:bg-emerald-50/60 hover:text-gray-900",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                            <ChevronRight
                                                className={[
                                                    "w-4 h-4",
                                                    isActive ? "text-emerald-600" : "text-gray-300",
                                                ].join(" ")}
                                            />
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="mt-8 pt-8 border-t border-emerald-100">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center justify-center w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/20"
                                >
                                    Book a Call
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
