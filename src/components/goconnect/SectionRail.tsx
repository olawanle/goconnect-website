import { cn } from "@/lib/utils"

import { useActiveSection } from "./hooks"

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "build", label: "Scope" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "team", label: "Team" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const

export function SectionRail() {
  const active = useActiveSection(SECTIONS.map((s) => s.id))

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 xl:flex"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-3"
          >
            <span
              className={cn(
                "h-px shrink-0 bg-gc-green transition-all duration-300",
                isActive ? "w-7 opacity-100" : "w-3 bg-white/25 group-hover:w-5 group-hover:bg-white/50",
              )}
            />
            <span
              className={cn(
                "font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-200",
                isActive ? "text-gc-green" : "text-transparent group-hover:text-gc-text-dimmer",
              )}
            >
              {s.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
