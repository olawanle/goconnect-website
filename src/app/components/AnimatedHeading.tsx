"use client";
import { motion } from "framer-motion";

export default function AnimatedHeading({ children, className = "", ...props }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={className}
      {...props}
    >
      {children}
    </motion.h1>
  );
} 