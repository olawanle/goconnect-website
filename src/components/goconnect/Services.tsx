import { useState } from "react"

import { services, servicesSection } from "@/data/goconnect-v2"
import { cn } from "@/lib/utils"

export function Services() {
  const [active, setActive] = useState(0)
  const activeService = services[active]

  return (
    <section id="services" className="perf-section mx-auto max-w-[1240px] px-4 pb-[clamp(56px,9vw,96px)] sm:px-7">
      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gc-text-dimmer">
        {servicesSection.label}
      </div>
      <h2 className="mb-3 font-display text-[clamp(1.85rem,5.2vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-gc-text-bright">
        {servicesSection.title}
      </h2>
      <p className="mb-8 max-w-[600px] text-base leading-relaxed text-gc-text-dim2">{servicesSection.sub}</p>

      <div className="flex flex-wrap items-stretch gap-5">
        <div className="flex min-w-0 flex-1 basis-[330px] flex-col gap-px overflow-hidden rounded border border-white/[0.08] bg-white/[0.08]">
          {services.map((s, i) => (
            <button
              key={s.number}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "grid grid-cols-[26px_minmax(0,1fr)_4px] items-center gap-[13px] px-5 py-[18px] text-left transition-colors",
                active === i ? "bg-gc-dark2 text-gc-text-bright" : "bg-gc-dark text-gc-text-dim",
              )}
            >
              <span className="font-mono text-[11px] tracking-[0.12em] text-gc-text-dimmer2">{s.number}</span>
              <span className="flex min-w-0 flex-col gap-[5px]">
                <span className="font-display text-[clamp(17px,3.4vw,19px)] font-medium tracking-[-0.02em]">
                  {s.name}
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-gc-text-dimmer">
                  {s.sub}
                </span>
              </span>
              <span
                className={cn(
                  "block w-1 justify-self-end bg-gc-green transition-[height] duration-200",
                  active === i ? "h-8" : "h-0",
                )}
              />
            </button>
          ))}
        </div>

        <div className="gc-panel flex min-w-0 flex-1 basis-[400px] flex-col gap-5 p-[clamp(22px,3.6vw,32px)]">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-gc-green">
            {activeService.sub}
          </div>
          <p className="text-pretty text-[clamp(15.5px,2.4vw,17px)] leading-relaxed text-gc-text">
            {activeService.desc}
          </p>
          <div className="flex flex-col gap-2.5">
            {activeService.points.map((p) => (
              <div key={p} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-gc-text-dim">
                <span className="pt-[3px] font-mono text-[11px] text-gc-green">—</span>
                {p}
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-[7px]">
            {activeService.tags.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-white/[0.13] px-2.5 py-[5px] font-mono text-[10px] uppercase tracking-[0.1em] text-gc-text-dim2"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
