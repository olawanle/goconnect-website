import { useMouseSpotlight, usePrefersReducedMotion, useScrollPerf } from "./hooks"

export function GlobalEffects() {
  const reducedMotion = usePrefersReducedMotion()
  useScrollPerf()
  const spotRef = useMouseSpotlight<HTMLDivElement>(reducedMotion)

  return (
    <>
      {!reducedMotion && <div ref={spotRef} aria-hidden="true" className="gc-spotlight" />}
      <div aria-hidden="true" className="gc-grid-bg" />
    </>
  )
}
