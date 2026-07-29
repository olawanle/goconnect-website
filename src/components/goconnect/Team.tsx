import { team, teamSection } from "@/data/goconnect-v2"

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-[1240px] px-4 pb-[clamp(56px,9vw,96px)] sm:px-7">
      <div className="flex flex-wrap items-start gap-8 lg:gap-16">
        <div className="min-w-0 flex-1 basis-[360px]">
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
          {team.map((m) => (
            <div key={m.seat} className="flex flex-col gap-2.5 bg-gc-dark p-[22px] transition-colors hover:bg-gc-dark2">
              <div className="flex items-center gap-2.5">
                <span className="flex size-[26px] items-center justify-center rounded-sm border border-white/[0.14] font-mono text-[10px] text-gc-text-dim">
                  {m.seat}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-gc-text-dimmer">
                  {m.role}
                </span>
              </div>
              <h3 className="font-display text-lg font-medium leading-tight tracking-[-0.02em] text-gc-text-bright">
                {m.name}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-gc-text-dim2">{m.bio}</p>
              <div className="mt-0.5 flex flex-wrap gap-1.5">
                {m.skills.map((s) => (
                  <span key={s} className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-gc-text-faint">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
