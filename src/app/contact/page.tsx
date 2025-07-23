"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_07v6k03", // Your Service ID
        "template_icp6rks", // Your Template ID
        form.current,
        "XP-IoLMCgyQ-Ag8es" // Your Public Key
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );
  };

  return (
    <section className="max-w-lg mx-auto p-8">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-8 text-green-400 text-center">
        Contact Us
      </motion.h1>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-green-900/60 to-black/80 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-green-700"
      >
        <input name="user_name" type="text" placeholder="Your Name" required className="rounded-lg px-4 py-3 bg-black/80 text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input name="user_email" type="email" placeholder="Your Email" required className="rounded-lg px-4 py-3 bg-black/80 text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" />
        <textarea name="message" placeholder="Your Message" required className="rounded-lg px-4 py-3 bg-black/80 text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[120px]" />
        <motion.button whileTap={{ scale: 0.97 }} type="submit" className="bg-green-400 text-black font-bold py-3 rounded-lg shadow-lg hover:bg-green-300 transition">
          Send Message
        </motion.button>
        {status === "success" && <p className="text-green-400 text-center">Message sent! We&apos;ll get back to you soon.</p>}
        {status === "error" && <p className="text-red-400 text-center">Something went wrong. Please try again.</p>}
      </motion.form>
    </section>
  );
} 