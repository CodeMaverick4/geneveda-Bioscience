"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "outline";
    className?: string;
}

export default function PrimaryButton({ href, children, variant = "primary", className = "" }: PrimaryButtonProps) {
    return (
        <Link
            href={href}
            className={`
                relative inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full font-semibold text-base overflow-hidden group border transition-all duration-300
                ${variant === "primary"
                    ? "bg-primary-600 border-primary-600 text-white hover:border-primary-500 hover:shadow-[0_0_15px_rgba(0,168,107,0.4)]"
                    : "bg-transparent border-white/30 text-white hover:border-accent hover:text-accent hover:bg-white/5"
                }
                ${className}
            `}
        >
            {/* Hover Fill Effect (Only for Primary) - Adjusted for dark mode */}
            {variant === "primary" && (
                <span className="absolute inset-0 bg-primary-500 w-full h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-right" />
            )}

            {/* Content */}
            <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${variant === "primary" ? "group-hover:text-white" : ""}`}>
                {children}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </Link>
    );
}
