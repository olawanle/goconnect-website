import { useMemo, useState } from "react"

import { filterDefs, projects, workSection } from "@/data/goconnect-v2"
import { cn } from "@/lib/utils"

export function Work() {
  const [filter, setFilter] = useState<(typeof filterDefs)[number]>("all")

  const visible = useMemo(
    () =>
      (filter === "all" ? projects : projects.filter((p) => p.tag === filter)).map((p, i) => ({
        ...p,
        index: String(i + 1).padStart(2, "0"),
        initial: p.title[0],
      })),
    [filter],
  )

  return (
    <section id="work" className="perf-section mx-auto max-w-[1240px] px-4 pb-[clamp(56px,9vw,96px)] sm:px-7">
      <div className="mb-[22px] flex flex-wrap items-end justify-between gap-x-10 gap-y-[18px]">
        <div className="min-w-0 flex-1 basis-[380px]">
          <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gc-text-dimmer">
            {workSection.label}
          </div>
          <h2 className="font-display text-[clamp(1.85rem,5.2vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-gc-text-bright">
            {workSection.title}
          </h2>
        </div>
      </div>

      <div className="mb-[18px] flex flex-wrap gap-[7px]">
        {filterDefs.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "min-h-[38px] rounded-sm border px-[13px] py-[9px] font-mono text-[10px] uppercase tracking-[0.1em] transition-all",
              filter === f
                ? "border-gc-green/50 bg-gc-green/10 text-gc-green"
                : "border-white/[0.12] bg-transparent text-gc-text-dim2 hover:border-white/25",
            )}
          >
            {f === "all" ? "All 16" : f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,230px),1fr))] gap-3">
        {visible.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded border border-white/[0.08] bg-gc-dark p-4 transition-all hover:-translate-y-[3px] hover:border-gc-green/40 hover:bg-gc-dark2"
          >
            <div className="flex items-start justify-between gap-2.5">
              <span className="flex size-[38px] items-center justify-center rounded-[3px] border border-white/[0.09] bg-gc-dark3 font-display text-[15px] font-semibold text-gc-text-dimmer2">
                {p.initial}
              </span>
              <span className="font-mono text-[10px] text-gc-text-faintest">{p.index}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-display text-[16.5px] font-medium tracking-[-0.02em] text-gc-text-bright">
                {p.title}
              </span>
              <span className="font-mono text-[10.5px] leading-relaxed text-[#7a7f82]">{p.desc}</span>
            </div>
            <div className="mt-auto flex items-center justify-between pt-1">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-gc-green">{p.tag}</span>
              <span className="text-sm text-gc-text-dimmer2">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
