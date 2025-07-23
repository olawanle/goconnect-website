"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Consultation", desc: "We analyze your needs and propose tailored AI solutions." },
  { title: "Development", desc: "Our team builds and customizes your automation or chatbot." },
  { title: "Integration", desc: "We seamlessly integrate the solution into your workflow." },
  { title: "Support", desc: "Ongoing support and optimization for your business." },
];

export default function HowItWorksPage() {
  return (
    <section className="max-w-3xl mx-auto p-8">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-8 text-green-400 text-center">
        How It Works
      </motion.h1>
      <ol className="relative border-l border-green-400">
        {steps.map((step, idx) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.7 }}
            className="mb-10 ml-6"
          >
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-black text-black font-bold">
              {idx + 1}
            </span>
            <h3 className="text-2xl font-semibold text-green-300 mb-1">{step.title}</h3>
            <p className="text-gray-300">{step.desc}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
} 