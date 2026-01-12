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
} from "lucide-react";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const menuItems = [
        "R&D services",
        "Bioinformatics data analysis",
        "Nextgeneration sequencing (NGS)",
        "Diagnostics",
        "Aptamers",
        "AMR",
        "Global study abroad guidance",
    ];

    /* ------------------------------------------------------------------ */
    /* Skeleton (pre-hydration) */
    /* ------------------------------------------------------------------ */
    if (!isMounted) {
        return (
            <header className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-4 bg-white border-b min-h-[80px]">
                <div className="flex items-center gap-3">
                    <Menu className="w-6 h-6" />
                    <span className="text-sm font-medium uppercase">Menu</span>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="text-3xl tracking-tight">genaveda</span>
                </div>

                <div className="flex items-center gap-6">
                    <Search className="w-5 h-5" />
                    <Globe className="w-5 h-5" />
                </div>
            </header>
        );
    }

    return (
        <>
            {/* ================= HEADER ================= */}
            <header className="relative z-20 bg-white border-b-2 border-black overflow-hidden">
                <div className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-4 min-h-[80px]">

                    {/* MAIN HEADER CONTENT */}
                    <div
                        className={`flex items-center justify-between w-full transition-all duration-300
            ${isSearchOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
                    >
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="flex items-center gap-3 hover:opacity-70"
                        >
                            <Menu className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase">Menu</span>
                        </button>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Link
                                href="/"
                                className="text-3xl tracking-tight hover:text-[#7c1d85]"
                            >
                                genaveda
                            </Link>
                        </div>

                        <div className="flex items-center gap-6">
                            <button onClick={() => setIsSearchOpen(true)}>
                                <Search className="w-5 h-5" />
                            </button>

                            <Link
                                href="/contact"
                                className="text-sm font-medium hover:underline hidden sm:block"
                            >
                                Contact us
                            </Link>

                            <button className="flex items-center gap-2">
                                <Globe className="w-5 h-5" />
                                <span className="text-sm font-medium">IN</span>
                            </button>
                        </div>
                    </div>

                    {/* ================= SEARCH OVERLAY ================= */}
                    {isSearchOpen && (
                        <div className="absolute inset-0 bg-white z-30 flex items-center justify-center animate-slideDown">
                            <div className="w-full max-w-5xl px-4 flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center h-12 border rounded-full px-3">
                                        <button className="flex items-center gap-2 pr-3 border-r text-sm">
                                            <Check className="w-4 h-4 text-purple-700" />
                                            Search all
                                            <ChevronDown className="w-4 h-4" />
                                        </button>

                                        <div className="flex items-center flex-1 px-3">
                                            <Search className="w-5 h-5 text-gray-400" />
                                            <input
                                                autoFocus
                                                placeholder="Search genaveda.com"
                                                className="w-full px-3 outline-none"
                                            />
                                        </div>

                                        <button className="bg-[#7c1d85] text-white px-6 py-2 rounded-full">
                                            Search
                                        </button>
                                    </div>
                                </div>

                                <button onClick={() => setIsSearchOpen(false)}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* ================= MENU OVERLAY ================= */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 animate-slideDown">
                    <div className="max-w-7xl mx-auto px-6 h-full flex flex-col">
                        <div className="flex items-center justify-between py-6 border-b">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-2"
                            >
                                <X className="w-6 h-6" />
                                Menu
                            </button>

                            <span className="text-3xl tracking-tight">genaveda</span>
                            <div className="w-16" />
                        </div>

                        <div className="flex-1 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className="flex justify-between items-center border-b py-3 text-xl"
                                    >
                                        {item}
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
