import { useMemo, useState } from "react"

import { filterDefs, projects, workSection } from "@/data/goconnect-v2"
import { cn, mergeRefs } from "@/lib/utils"

import { useCardSpotlight, useReveal } from "./hooks"

type VisibleProject = (typeof projects)[number] & { index: string; initial: string }

function WorkCard({ project, delay }: { project: VisibleProject; delay: number }) {
  const { ref: revealRef, visible } = useReveal<HTMLAnchorElement>()
  const spotRef = useCardSpotlight<HTMLAnchorElement>()

  return (
    <a
      ref={mergeRefs(revealRef, spotRef)}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "gc-spot-card reveal flex flex-col gap-3 rounded border border-white/[0.08] bg-gc-dark p-4 transition-all hover:-translate-y-[3px] hover:border-gc-green/40 hover:bg-gc-dark2",
        visible && "visible",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-2.5">
        <span className="flex size-[38px] items-center justify-center rounded-[3px] border border-white/[0.09] bg-gc-dark3 font-display text-[15px] font-semibold text-gc-text-dimmer2">
          {project.initial}
        </span>
        <span className="font-mono text-[10px] text-gc-text-faintest">{project.index}</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="font-display text-[16.5px] font-medium tracking-[-0.02em] text-gc-text-bright">
          {project.title}
        </span>
        <span className="font-mono text-[10.5px] leading-relaxed text-[#7a7f82]">{project.desc}</span>
      </div>
      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-gc-green">{project.tag}</span>
        <span className="text-sm text-gc-text-dimmer2">↗</span>
      </div>
    </a>
  )
}

export function Work() {
  const [filter, setFilter] = useState<(typeof filterDefs)[number]>("all")
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>()

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
    <section id="work" className="perf-section relative mx-auto max-w-[1240px] px-4 pb-[clamp(56px,9vw,96px)] sm:px-7">
      <div
        ref={headerRef}
        className={cn(
          "relative mb-[22px] flex flex-wrap items-end justify-between gap-x-10 gap-y-[18px] reveal",
          headerVisible && "visible",
        )}
      >
        <span aria-hidden="true" className="gc-ghost-num">03</span>
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
              "min-h-10 rounded-sm border px-[14px] py-[9px] font-mono text-[10px] uppercase tracking-[0.1em] transition-all",
              filter === f
                ? "border-gc-green/50 bg-gc-green/10 text-gc-green"
                : "border-white/[0.12] bg-transparent text-gc-text-dim2 hover:border-white/25",
            )}
          >
            {f === "all" ? `All ${projects.length}` : f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,230px),1fr))] gap-3">
        {visible.map((p, i) => (
          <WorkCard key={p.title} project={p} delay={(i % 6) * 60} />
        ))}
      </div>
    </section>
  )
}
