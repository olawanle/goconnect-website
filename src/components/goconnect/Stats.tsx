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
      className="gc-spot-card bg-gc-dark px-[clamp(18px,3vw,24px)] py-[22px] transition-colors hover:bg-gc-dark2"
    >
      <div
        ref={numberRef}
        className="font-display text-[clamp(34px,6vw,44px)] font-semibold leading-none tracking-[-0.03em] text-gc-text-bright"
      >
        {(stat.prefix ?? "") + "0" + stat.suffix}
      </div>
      <div className="mt-2.5 text-[13px] leading-relaxed text-gc-text-dim2">{stat.label}</div>
    </div>
  )
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>("0px 0px -15% 0px")
  const nodesRef = useCountUp(stats, inView)

  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-10 sm:px-7 sm:pb-[76px]">
      <div
        ref={ref}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,215px),1fr))] gap-px overflow-hidden rounded border border-white/[0.08] bg-white/[0.08]"
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
