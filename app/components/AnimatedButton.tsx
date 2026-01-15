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
            className={`relative inline-flex items-center justify-between gap-4 py-2 pl-6 pr-2 rounded-full font-semibold text-lg overflow-hidden group transition-all duration-300 border border-[#7c1d85] ${className} ${variant === "primary" ? "text-gray-800" : "text-[#7c1d85]"
                } hover:text-black hover:border-[#ffeb0f]`}
        >
            <span className="absolute inset-0 bg-[#ffeb0f] w-full h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-right" />

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>

            <span className="relative z-10 w-10 h-10 bg-[#ffeb0f] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-transparent transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
            </span>
        </Link>
    );
}
