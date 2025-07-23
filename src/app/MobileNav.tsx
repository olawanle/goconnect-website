"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center relative">
      <button
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
        className="ml-2 p-2 rounded bg-gray-800 hover:bg-green-400 hover:text-black transition"
      >
        {/* Hamburger icon */}
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-black bg-opacity-95 border border-green-400 rounded-2xl shadow-2xl flex flex-col py-4 animate-fade-in z-50">
          <Link href="/about" className="hover:text-green-400 transition px-6 py-3 text-lg" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" className="hover:text-green-400 transition px-6 py-3 text-lg" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/pricing" className="hover:text-green-400 transition px-6 py-3 text-lg" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/testbot" className="hover:text-green-400 transition px-6 py-3 text-lg" onClick={() => setMenuOpen(false)}>Real Estate Bot</Link>
          <Link href="/property-manager-bot" className="hover:text-green-400 transition px-6 py-3 text-lg" onClick={() => setMenuOpen(false)}>Property Manager Bot</Link>
          <Link href="/how-it-works" className="hover:text-green-400 transition px-6 py-3 text-lg" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link href="/contact" className="hover:text-green-400 transition px-6 py-3 text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
} 