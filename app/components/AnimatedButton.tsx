"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "outline";
    className?: string;
}

export default function AnimatedButton({ href, children, variant = "primary", className = "" }: AnimatedButtonProps) {
    return (
        <Link
            href={href}
            className={`relative inline-flex items-center justify-between gap-4 py-3 pl-8 pr-2 rounded-full font-semibold text-lg overflow-hidden group transition-all duration-300 border box-border shadow-lg
                ${variant === "primary" ? "bg-white border-transparent text-primary-900 shadow-primary-500/20" : "bg-transparent border-white/30 text-white hover:border-accent"}
                ${className}`}
        >
            {/* Hover Fill Effect */}
            <span className={`absolute inset-0 w-full h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-right ${variant === 'primary' ? 'bg-primary-50' : 'bg-white/10'}`} />

            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                {children}
            </span>

            <span className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${variant === 'primary' ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white' : 'bg-white/10  group-hover:bg-accent group-hover:text-black'}`}>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
        </Link>
    );
}
