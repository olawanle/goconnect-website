import { KeyRound, ListChecks, MessageCircle, Rocket } from "lucide-react"

import { process, processSection } from "@/data/goconnect-v2"
import { cn, mergeRefs } from "@/lib/utils"

import { useCardSpotlight, useReveal } from "./hooks"

const ICONS = [MessageCircle, ListChecks, Rocket, KeyRound]

function ProcessCell({
  step,
  icon: Icon,
  delay,
}: {
  step: (typeof process)[number]
  icon: (typeof ICONS)[number]
  delay: number
}) {
  const { ref: revealRef, visible } = useReveal<HTMLDivElement>()
  const spotRef = useCardSpotlight<HTMLDivElement>()

  return (
    <div
      ref={mergeRefs(revealRef, spotRef)}
      className={cn(
        "gc-spot-card reveal flex min-h-[200px] flex-col gap-3 bg-gc-dark px-[clamp(18px,3vw,24px)] py-[26px] transition-colors hover:bg-gc-dark2",
        visible && "visible",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-[9px] font-mono text-[11px] tracking-[0.14em] text-gc-green">
          <span className="size-1.5 bg-gc-green" />
          {step.step}
        </div>
        <Icon className="size-4 text-gc-text-dimmer" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-medium leading-tight tracking-[-0.02em] text-gc-text-bright">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-gc-text-dim2">{step.body}</p>
      <div className="mt-auto font-mono text-[10px] uppercase tracking-[0.16em] text-gc-text-faint">
        {step.when}
      </div>
    </div>
  )
}

export function Process() {
  const { ref: headerRef, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="process" className="relative mx-auto max-w-[1240px] px-4 pb-[clamp(56px,9vw,96px)] sm:px-7">
      <div ref={headerRef} className={cn("relative mb-8", "reveal", visible && "visible")}>
        <span aria-hidden="true" className="gc-ghost-num">04</span>
        <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gc-text-dimmer">
          {processSection.label}
        </div>
        <h2 className="font-display text-[clamp(1.85rem,5.2vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-gc-text-bright">
          {processSection.title}
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-px overflow-hidden rounded border border-white/[0.08] bg-white/[0.08]">
        {process.map((p, i) => (
          <ProcessCell key={p.step} step={p} icon={ICONS[i]} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
