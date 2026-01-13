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
            className={`relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-lg overflow-hidden group transition-all duration-300 border-2 border-[#7c1d85] ${className} ${variant === "primary" ? "text-[#7c1d85]" : "text-[#7c1d85]"
                } hover:text-black`}
        >
            {/* Background Slide Animation */}
            <span className="absolute inset-0 bg-[#ffeb0f] w-full h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-right" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
        </Link>
    );
}
