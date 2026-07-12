"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Wait a bit after 100% before finishing
                    return 100;
                }
                // Random increment for realistic "loading" feel
                return Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
            });
        }, 200);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-black"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="flex flex-col items-center gap-8 w-full max-w-xs px-4">
                {/* Logo with Pulse/Glitch effect */}
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        filter: [
                            "drop-shadow(0 0 0px rgba(34, 197, 94, 0))",
                            "drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))",
                            "drop-shadow(0 0 0px rgba(34, 197, 94, 0))",
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
                    <Image
                        src="/logo.png"
                        alt="GoConnect Loading"
                        width={120}
                        height={120}
                        className="relative z-10"
                        priority
                    />
                </motion.div>

                {/* Loading Text */}
                <div className="flex flex-col items-center gap-2 w-full">
                    <h2 className="text-2xl font-bold tracking-widest text-white uppercase font-mono">
                        Initialize<span className="animate-pulse">...</span>
                    </h2>

                    {/* Retro Progress Bar */}
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                        <motion.div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                    <div className="flex justify-between w-full text-xs font-mono text-green-400/70 mt-1">
                        <span>SYSTEM STATUS</span>
                        <span>{progress}%</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
