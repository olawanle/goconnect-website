"use client"

import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  className?: string
  delay?: number
}

export default function Reveal({ children, width = "fit-content", className = "", delay = 0.25 }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0, 1] }} // Custom easing for premium feel
      >
        {children}
      </motion.div>
    </div>
  )
}
