"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CosmicBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
            {/* 1. Deep Space Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-black to-black opacity-80" />

            {/* 2. Stars - Client side only to avoid hydration mismatch */}
            {mounted && (
                <div className="absolute inset-0 opacity-40">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: Math.random() * 2 + 1 + "px",
                                height: Math.random() * 2 + 1 + "px",
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                                boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.4)",
                            }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* 3. Floating Orbs (Optimized) */}
            <motion.div
                className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[80px] mix-blend-screen will-change-transform"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[90px] mix-blend-screen will-change-transform"
                animate={{
                    x: [0, -40, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-[80px] mix-blend-screen -translate-x-1/2 -translate-y-1/2 will-change-transform"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* 4. Grid Overlay for "Tech" feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        </div>
    );
}
