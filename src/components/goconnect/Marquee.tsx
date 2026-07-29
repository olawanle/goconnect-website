import { marquee } from "@/data/goconnect-v2"

const items = [...marquee, ...marquee]

export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-white/[0.07] py-[13px]"
    >
      <div className="gc-marquee-track">
        {items.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-gc-text-dimmer2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
