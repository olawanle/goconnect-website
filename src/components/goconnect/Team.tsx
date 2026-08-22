import { Database, Megaphone, Radar, Smartphone } from "lucide-react"

import { team, teamSection, type TeamIcon } from "@/data/goconnect-v2"
import { cn, mergeRefs } from "@/lib/utils"

import { useCardSpotlight, useReveal } from "./hooks"

const ICONS: Record<TeamIcon, typeof Smartphone> = {
  web: Smartphone,
  systems: Database,
  data: Radar,
  growth: Megaphone,
}

function TeamCell({ member, delay }: { member: (typeof team)[number]; delay: number }) {
  const { ref: revealRef, visible } = useReveal<HTMLDivElement>()
  const spotRef = useCardSpotlight<HTMLDivElement>()
  const Icon = ICONS[member.icon]

  return (
    <div
      ref={mergeRefs(revealRef, spotRef)}
      className={cn(
        "gc-spot-card reveal flex flex-col gap-2.5 bg-gc-dark p-[22px] transition-colors hover:bg-gc-dark2",
        visible && "visible",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex size-[26px] items-center justify-center rounded-sm border border-white/[0.14] text-gc-text-dim">
          <Icon className="size-[13px]" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-gc-text-dimmer">
          {member.role}
        </span>
      </div>
      <h3 className="font-display text-lg font-medium leading-tight tracking-[-0.02em] text-gc-text-bright">
        {member.name}
      </h3>
      <p className="text-[13.5px] leading-relaxed text-gc-text-dim2">{member.bio}</p>
      <div className="mt-0.5 flex flex-wrap gap-1.5">
        {member.skills.map((s) => (
          <span key={s} className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-gc-text-faint">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Team() {
  const { ref: headerRef, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="team" className="relative mx-auto max-w-[1240px] px-4 pb-[clamp(56px,9vw,96px)] sm:px-7">
      <div className="flex flex-wrap items-start gap-8 lg:gap-16">
        <div ref={headerRef} className={cn("relative min-w-0 flex-1 basis-[360px]", "reveal", visible && "visible")}>
          <span aria-hidden="true" className="gc-ghost-num">05</span>
          <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gc-text-dimmer">
            {teamSection.label}
          </div>
          <h2 className="mb-5 font-display text-[clamp(1.85rem,5.2vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-gc-text-bright">
            {teamSection.title}
          </h2>
          <p className="mb-4 text-pretty text-[15.5px] leading-[1.7] text-gc-text-dim">{teamSection.body1}</p>
          <p className="text-pretty text-[15.5px] leading-[1.7] text-gc-text-dim">{teamSection.body2}</p>
        </div>
        <div className="grid min-w-0 flex-1 basis-[420px] grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-px overflow-hidden rounded border border-white/[0.08] bg-white/[0.08]">
          {team.map((m, i) => (
            <TeamCell key={m.seat} member={m} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
