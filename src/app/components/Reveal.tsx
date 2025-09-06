"use client"

import React from "react"

interface RevealProps {
  children: React.ReactNode
  className?: string
  rootMargin?: string
}

export default function Reveal({ children, className = "", rootMargin = "-10% 0px -10% 0px" }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin, threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} className={`reveal-on-scroll ${shown ? "revealed" : ""} ${className}`}>
      {children}
    </div>
  )
}
