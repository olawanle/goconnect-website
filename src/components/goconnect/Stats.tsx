import { stats } from "@/data/goconnect-v2"

import { useCardSpotlight, useCountUp, useInView } from "./hooks"

function StatCell({
  stat,
  numberRef,
}: {
  stat: (typeof stats)[number]
  numberRef: (el: HTMLElement | null) => void
}) {
  const spotRef = useCardSpotlight<HTMLDivElement>()

  return (
    <div
      ref={spotRef}
      className="gc-spot-card px-[clamp(16px,4vw,32px)] py-[26px] transition-colors hover:bg-white/[0.02]"
    >
      <div
        ref={numberRef}
        className="font-display text-[clamp(34px,6vw,44px)] font-semibold leading-none tracking-[-0.03em] text-gc-text-bright"
      >
        {(stat.prefix ?? "") + "0" + stat.suffix}
      </div>
      <div className="mt-2.5 max-w-[280px] text-[13px] leading-relaxed text-gc-text-dim2">{stat.label}</div>
    </div>
  )
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>("0px 0px -15% 0px")
  const nodesRef = useCountUp(stats, inView)

  return (
    <section className="border-y border-white/[0.08]">
      <div
        ref={ref}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))]"
      >
        {stats.map((s) => (
          <StatCell
            key={s.key}
            stat={s}
            numberRef={(el) => {
              nodesRef.current[s.key] = el
            }}
          />
        ))}
      </div>
    </section>
  )
}
