import { useEffect, useRef, useState } from "react"

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function usePrefersReducedMotion() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  return reduced
}

export function usePageVisibility() {
  const visibleRef = useRef(true)

  useEffect(() => {
    const onChange = () => {
      visibleRef.current = document.visibilityState === "visible"
    }
    document.addEventListener("visibilitychange", onChange)
    return () => document.removeEventListener("visibilitychange", onChange)
  }, [])

  return visibleRef
}

/** Marks document as scrolling so CSS can disable expensive paint effects. */
export function useScrollPerf() {
  useEffect(() => {
    let endTimer = 0

    const onScroll = () => {
      document.documentElement.dataset.scrolling = "true"
      window.clearTimeout(endTimer)
      endTimer = window.setTimeout(() => {
        delete document.documentElement.dataset.scrolling
      }, 120)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.clearTimeout(endTimer)
      delete document.documentElement.dataset.scrolling
    }
  }, [])
}

export function useInView<T extends HTMLElement>(rootMargin = "200px 0px") {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold: 0 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, inView }
}
