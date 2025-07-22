"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-4 text-green-400">
        About GoConnect
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg mb-6 text-gray-200">
        GoConnect is dedicated to revolutionizing business automation with cutting-edge AI and chatbot solutions. Our mission is to empower companies to connect, automate, and grow with intelligent technology.
      </motion.p>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-gray-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-green-300 mb-2">Our Team</h2>
        <p className="text-gray-300">A passionate group of AI engineers, designers, and innovators committed to delivering seamless automation experiences.</p>
      </motion.div>
    </section>
  );
} 