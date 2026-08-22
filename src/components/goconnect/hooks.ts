import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react"

export function usePrefersReducedMotion() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  return reduced
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

/** Fires once when the element first scrolls into view, for a one-shot entrance transition. */
export function useReveal<T extends HTMLElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, visible }
}

/** Tracks the cursor position over an element as --mx/--my CSS vars, for a spotlight-follows-cursor effect. */
export function useCardSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return

    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      el.style.setProperty("--my", `${e.clientY - rect.top}px`)
    }

    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [])

  return ref
}

/** Tracks which section id is currently crossing the vertical center of the viewport, for scrollspy nav. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "")
  const key = ids.join(",")

  useEffect(() => {
    const elements = key
      .split(",")
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting)
        if (intersecting.length === 0) return
        const topmost = intersecting.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        )
        setActive(topmost.target.id)
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mq = window.matchMedia(query)
      mq.addEventListener("change", onStoreChange)
      return () => mq.removeEventListener("change", onStoreChange)
    },
    [query],
  )
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])

  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}

/** Tracks scroll progress (0-100) via a ref'd bar element, avoiding re-renders per scroll tick. */
export function useScrollProgressBar<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const pct = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) * 100 : 0
      el.style.width = `${pct}%`
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return ref
}

/** Moves a fixed spotlight element to follow the cursor, skipped on touch/coarse pointers and reduced motion. */
export function useMouseSpotlight<T extends HTMLElement>(disabled: boolean) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (disabled) return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return

    const el = ref.current
    if (!el) return

    let rafId = 0
    let pending = false
    let x = 0
    let y = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (pending) return
      pending = true
      rafId = requestAnimationFrame(() => {
        el.style.opacity = "1"
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
        pending = false
      })
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMove)
    }
  }, [disabled])

  return ref
}

/** Eases each stat's ref'd text node from 0 to its target once `active` flips true. */
export function useCountUp(
  targets: ReadonlyArray<{ key: string; to: number; prefix?: string; suffix?: string }>,
  active: boolean,
  duration = 1100,
) {
  const nodesRef = useRef<Record<string, HTMLElement | null>>({})
  const startedRef = useRef(false)

  useEffect(() => {
    if (!active || startedRef.current) return
    startedRef.current = true

    const start = performance.now()
    let rafId = 0

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      targets.forEach((s) => {
        const node = nodesRef.current[s.key]
        if (node) node.textContent = `${s.prefix ?? ""}${Math.round(s.to * eased)}${s.suffix ?? ""}`
      })
      if (t < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
    // targets is a stable module-level constant in practice
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, duration])

  return nodesRef
}

/** Reveals items one at a time on an interval, restarting whenever `active` re-triggers. */
export function useTypedReveal(count: number, active: boolean, intervalMs = 500, delayMs = 450) {
  const [state, setState] = useState({ typed: 0, active })

  // Reset during render when `active` flips, rather than via a setState-in-effect.
  if (state.active !== active) {
    setState({ typed: 0, active })
  }

  useEffect(() => {
    if (!active) return
    const timers: number[] = []

    let i = 0
    const step = () => {
      i += 1
      setState((s) => ({ ...s, typed: Math.min(i, count) }))
      if (i < count) timers.push(window.setTimeout(step, intervalMs))
    }
    timers.push(window.setTimeout(step, delayMs))

    return () => timers.forEach((id) => window.clearTimeout(id))
  }, [active, count, intervalMs, delayMs])

  return state.typed
}
