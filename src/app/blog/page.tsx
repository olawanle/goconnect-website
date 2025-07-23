"use client";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-4 text-green-400">
        Blog
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg mb-6 text-gray-200">
        Our latest news and insights will appear here soon. Stay tuned!
      </motion.p>
    </section>
  );
} 