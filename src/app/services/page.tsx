"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Automation",
    description: "Streamline your business processes with intelligent automation tailored to your needs.",
  },
  {
    title: "Chatbot Solutions",
    description: "Engage customers 24/7 with advanced, conversational AI chatbots for every platform.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-8 text-green-400 text-center">
        Our Services
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(34,255,0,0.2)" }}
            className="bg-gray-900 rounded-xl p-6 shadow-lg border border-green-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold text-green-300 mb-2">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 