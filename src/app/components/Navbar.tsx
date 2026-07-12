"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl z-[999] rounded-2xl liquid-glass border-white/10">
                <div className="px-4 md:px-6 py-3 flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" alt="GoConnect Logo" width={32} height={32} priority />
                            <span className="text-lg font-bold tracking-tight text-white/90">GOCONNECT</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 text-sm md:text-base">
                        <Link href="/about" className="hover:text-green-300 transition-colors">About</Link>
                        <Link href="/services" className="hover:text-green-300 transition-colors">Services</Link>
                        <Link href="/work" className="hover:text-green-300 transition-colors">Work</Link>
                        <Link href="/contact" className="btn-secondary text-xs px-4 py-2 !rounded-lg">Contact</Link>

                        {/* Socials */}
                        <div className="flex gap-2 border-l border-white/10 pl-4 ml-2">
                            <a href="https://x.com/goconnect234" aria-label="X" target="_blank" rel="noopener noreferrer" className="text-sky-400/80 hover:text-white transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47 12 10.07 6.47 2.47H2.47l7.07 9.46L2.47 21.53h4l5.53-7.6 5.53 7.6h4l-7.07-9.6 7.07-9.46z"></path></svg></a>
                            <a href="https://github.com/olawanle" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-violet-400/80 hover:text-white transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.565 4.936.359.31.679.921.679 1.856 0 1.338-.012 2.419-.012 2.75 0 .269.18.58.688.481C19.138 20.194 22 16.44 22 12.017 22 6.484 17.523 2 12 2z" /></svg></a>
                        </div>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 text-white/80 hover:text-white transition"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-20 left-4 right-4 z-[998] p-4 rounded-2xl liquid-glass border-white/10 md:hidden"
                    >
                        <div className="flex flex-col gap-4 text-center">
                            <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2 border-b border-white/5">About</Link>
                            <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2 border-b border-white/5">Services</Link>
                            <Link href="/work" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2 border-b border-white/5">Work</Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/90 hover:text-emerald-400 py-2">Contact</Link>

                            <div className="flex justify-center gap-6 mt-2 pt-4 border-t border-white/10">
                                <a href="https://x.com/goconnect234" target="_blank" rel="noopener noreferrer" className="text-sky-400/80 hover:text-white"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47 12 10.07 6.47 2.47H2.47l7.07 9.46L2.47 21.53h4l5.53-7.6 5.53 7.6h4l-7.07-9.6 7.07-9.46z"></path></svg></a>
                                <a href="https://github.com/olawanle" target="_blank" rel="noopener noreferrer" className="text-violet-400/80 hover:text-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.565 4.936.359.31.679.921.679 1.856 0 1.338-.012 2.419-.012 2.75 0 .269.18.58.688.481C19.138 20.194 22 16.44 22 12.017 22 6.484 17.523 2 12 2z" /></svg></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
