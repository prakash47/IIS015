"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * FadeInUp - Smooth entrance animation
 */
export function FadeInUp({
    children,
    delay = 0,
    className
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * TextReveal - Staggered text reveal effect
 */
export function TextReveal({
    text,
    className,
    delay = 0
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const words = text.split(" ");
    return (
        <span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: delay + i * 0.05,
                        ease: "easeOut"
                    }}
                    className="inline-block mr-[0.2em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}

/**
 * ParallaxImage - Moves image slower than scroll
 */
export function ParallaxImage({
    src,
    alt,
    className
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={cn("overflow-hidden relative", className)}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y, scale: 1.1 }}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

/**
 * GlowCard - Card with hover glow effect
 */
export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn("group relative rounded-2xl", className)}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-white rounded-2xl overflow-hidden">
                {children}
            </div>
        </div>
    );
}

/**
 * ScrollProgress - Top progress bar
 */
export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-50"
            style={{ scaleX }}
        />
    );
}
