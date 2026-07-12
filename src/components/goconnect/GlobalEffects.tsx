import { useEffect } from "react"

import { usePrefersReducedMotion, useScrollPerf } from "./hooks"

export function GlobalEffects() {
  const reducedMotion = usePrefersReducedMotion()
  useScrollPerf()

  useEffect(() => {
    if (reducedMotion) return

    const root = document.documentElement
    let rafId = 0
    let x = 0
    let y = 0
    let pending = false

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (!pending) {
        pending = true
        rafId = requestAnimationFrame(() => {
          if (!root.dataset.scrolling) {
            root.style.setProperty("--spot-x", `${x}px`)
            root.style.setProperty("--spot-y", `${y}px`)
          }
          pending = false
        })
      }
    }

    document.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("mousemove", onMove)
    }
  }, [reducedMotion])

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>
      {!reducedMotion && <div className="spotlight" aria-hidden="true" />}
      <div className="noise" aria-hidden="true" />
    </>
  )
}
