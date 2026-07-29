import { process, processSection } from "@/data/goconnect-v2"

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1240px] px-4 pb-[clamp(56px,9vw,96px)] sm:px-7">
      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gc-text-dimmer">
        {processSection.label}
      </div>
      <h2 className="mb-8 font-display text-[clamp(1.85rem,5.2vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-gc-text-bright">
        {processSection.title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-px overflow-hidden rounded border border-white/[0.08] bg-white/[0.08]">
        {process.map((p) => (
          <div
            key={p.step}
            className="flex min-h-[200px] flex-col gap-3 bg-gc-dark px-[clamp(18px,3vw,24px)] py-[26px] transition-colors hover:bg-gc-dark2"
          >
            <div className="flex items-center gap-[9px] font-mono text-[11px] tracking-[0.14em] text-gc-green">
              <span className="size-1.5 bg-gc-green" />
              {p.step}
            </div>
            <h3 className="font-display text-xl font-medium leading-tight tracking-[-0.02em] text-gc-text-bright">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-gc-text-dim2">{p.body}</p>
            <div className="mt-auto font-mono text-[10px] uppercase tracking-[0.16em] text-gc-text-faint">
              {p.when}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
