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
            className={`relative inline-flex items-center justify-between gap-4 py-3 pl-8 pr-2 rounded-full font-semibold text-lg overflow-hidden group transition-all duration-300 border border-primary-500 box-border
                ${variant === "primary" ? "bg-white text-gray-900" : "bg-transparent text-primary-600"}
                hover:border-primary-600 ${className}`}
        >
            {/* Hover Fill Effect (Right to Left) */}
            <span className="absolute inset-0 bg-primary-500 w-full h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-right" />

            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                {children}
            </span>

            <span className="relative z-10 w-12 h-12 bg-primary-100/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-primary-600 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </span>
        </Link>
    );
}
