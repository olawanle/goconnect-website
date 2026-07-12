import { services } from "@/data/goconnect"

const marqueeTags = [...new Set(services.flatMap((s) => s.tags))]

export function Marquee() {
  const items = [...marqueeTags, ...marqueeTags]

  return (
    <div className="relative z-10 overflow-hidden border-y border-gc-green/5 py-4" aria-hidden="true">
      <div className="marquee-track">
        {items.map((tag, i) => (
          <span key={`${tag}-${i}`} className="marquee-pill liquid-glass">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
