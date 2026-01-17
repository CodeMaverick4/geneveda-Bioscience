"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
    style?: React.CSSProperties;
}

export default function FloatingElement({
    children,
    delay = 0,
    duration = 6,
    yOffset = 20,
    className = "",
    style,
}: FloatingElementProps) {
    return (
        <motion.div
            className={className}
            style={style}
            animate={{
                y: [0, -yOffset, 0],
                rotate: [0, 1, -1, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
}
