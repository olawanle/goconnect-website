import { hero, terminalLines } from "@/data/goconnect-v2"
import { cn } from "@/lib/utils"

import { useTypedReveal } from "./hooks"

const toneClass: Record<(typeof terminalLines)[number]["tone"], string> = {
  cmd: "font-bold text-gc-text-bright",
  ok: "text-gc-text-dim",
  warn: "text-gc-green",
}

export function Hero() {
  const typed = useTypedReveal(terminalLines.length, true)

  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1240px] px-4 pb-10 pt-12 sm:px-7 sm:pb-16 sm:pt-16 lg:pb-[76px] lg:pt-24"
    >
      <div className="flex flex-wrap items-center gap-8 lg:gap-16">
        <div className="min-w-0 flex-1 basis-[540px] animate-gc-rise">
          <div className="mb-[22px] flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-gc-text-dim2">
            <span className="h-px w-8 shrink-0 bg-gc-green" />
            {hero.eyebrow}
          </div>
          <h1 className="mb-6 text-balance font-display text-[clamp(2.35rem,7vw,5.1rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-gc-text-bright">
            {hero.title}
          </h1>
          <p className="mb-8 max-w-[580px] text-pretty text-[clamp(16px,2.2vw,18px)] leading-relaxed text-gc-text-dim">
            {hero.sub}
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={hero.primaryCta.href}
              className="gc-btn-primary max-w-[280px] flex-1 px-[26px] py-[17px] font-mono text-xs font-bold uppercase tracking-[0.1em]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="gc-btn-outline max-w-[280px] flex-1 px-[26px] py-[17px] font-mono text-xs uppercase tracking-[0.1em]"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div
          className="animate-gc-rise gc-panel min-w-0 flex-1 basis-[380px] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] [animation-delay:0.12s]"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.07] px-3.5 py-[11px]">
            <span className="size-[9px] rounded-full bg-white/[0.14]" />
            <span className="size-[9px] rounded-full bg-white/[0.14]" />
            <span className="size-[9px] rounded-full bg-gc-green" />
            <span className="ml-2 font-mono text-[9.5px] uppercase tracking-[0.14em] text-gc-text-dimmer">
              goconnect — delivery log
            </span>
          </div>
          <div className="min-h-[236px] overflow-x-auto px-4 py-[18px] font-mono text-[clamp(11px,2.6vw,12.5px)] leading-[1.95] text-gc-text-dim">
            {terminalLines.slice(0, typed).map((l) => (
              <div key={l.text} className="flex gap-2.5 whitespace-pre">
                <span className="text-gc-text-faint">{l.gutter}</span>
                <span className={cn(toneClass[l.tone])}>{l.text}</span>
              </div>
            ))}
            <div className="flex gap-2.5">
              <span className="text-gc-text-faint">›</span>
              <span className="inline-block h-[15px] w-2 animate-gc-caret bg-gc-green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
