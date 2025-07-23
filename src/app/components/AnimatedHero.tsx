"use client";
import Image from "next/image";
import Link from "next/link";

export default function AnimatedHero() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center gap-8 pt-20 pb-28 px-4 text-center">
      <div>
        <Image src="/logo.png" alt="GoConnect Logo" width={120} height={120} priority className="mx-auto drop-shadow-lg" />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow mb-2">
        AI Automation, Reimagined
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-6">
        Supercharge your business with next-gen AI chatbots and automation. Connect, automate, and grow with GoConnect.
      </p>
      <div>
        <Link href="/contact">
          <button className="bg-green-400 text-black font-bold px-10 py-4 rounded-2xl shadow-2xl hover:bg-green-300 transition text-xl animate-bounce-slow">
            Get Started
          </button>
        </Link>
      </div>
    </main>
  );
} 