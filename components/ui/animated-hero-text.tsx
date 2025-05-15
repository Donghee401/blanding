"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedHeroTextProps {
    badge?: string;
    title1?: string;
    title2?: string;
    paragraphText?: string;
}

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5 + i * 0.2,
            ease: [0.25, 0.4, 0.25, 1],
        },
    }),
};

export function AnimatedHeroText({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
    paragraphText = "Crafting exceptional digital experiences through innovative design and cutting-edge technology."
}: AnimatedHeroTextProps) {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/0.03 border border-border/0.08 mb-8 md:mb-12"
            >
                <Circle className="h-2 w-2 fill-rose-500/80" />
                <span className="text-sm text-foreground/60 tracking-wide">
                    {badge}
                </span>
            </motion.div>

            <motion.div
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-4xl sm:text-6xl md:text-7xl/24 font-bold mb-6 md:mb-8 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
                        {title1}
                    </span>
                    <br />
                    <span
                        className={cn(
                            "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-foreground/90 to-rose-300 "
                        )}
                    >
                        {title2}
                    </span>
                </h1>
            </motion.div>

            <motion.div
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
            >
                <p className="text-base sm:text-lg md:text-xl text-[--foreground]/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                    {paragraphText}
                </p>
            </motion.div>
        </div>
    );
} 