import { useState } from "react"

import { availabilityText, navLinks, WHATSAPP_BASE_LINK } from "@/data/goconnect-v2"
import { cn } from "@/lib/utils"

import { useScrollProgressBar } from "./hooks"
import { Logo } from "./Logo"

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const progressRef = useScrollProgressBar<HTMLDivElement>()

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1.5 border-b border-white/[0.07] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-gc-text-dimmer sm:px-7">
        <span className="flex items-center gap-2.5 text-gc-text-dim">
          <span className="size-1.5 shrink-0 animate-gc-pulse rounded-full bg-gc-green shadow-[0_0_10px_rgba(82,255,38,0.8)]" />
          {availabilityText}
        </span>
        <span className="hidden sm:inline">Replies in under 24h · Worldwide · Since 2023</span>
      </div>

      <header className="sticky top-0 z-[60] border-b border-white/[0.07] bg-gc-black/[0.82] backdrop-blur-2xl">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3 sm:px-7"
        >
          <a href="#top" className="flex items-center gap-2.5">
            <Logo variant="nav" />
            <span className="font-display text-lg font-semibold tracking-tight text-gc-text-bright">
              GoConnect
            </span>
          </a>

          <div className="hidden items-center gap-[26px] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-gc-text-dim2 transition-colors hover:text-gc-text-bright"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_BASE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="gc-btn-primary px-[17px] py-[11px] font-mono text-[11px] font-bold uppercase tracking-[0.1em]"
            >
              Message us →
            </a>
          </div>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-11 flex-col items-end justify-center gap-[5px] md:hidden"
          >
            <span className="block h-[1.5px] w-5 bg-gc-text" />
            <span className="block h-[1.5px] w-5 bg-gc-text" />
            <span className="block h-[1.5px] w-[13px] bg-gc-green" />
          </button>
        </nav>

        <div
          className={cn(
            "flex-col border-t border-white/[0.07] bg-gc-black/[0.96] px-4 pb-4 pt-1 sm:px-7 md:hidden",
            menuOpen ? "flex" : "hidden",
          )}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "px-1 py-3.5 font-mono text-[13px] uppercase tracking-[0.14em] text-gc-text",
                i < navLinks.length - 1 && "border-b border-white/[0.07]",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div aria-hidden="true" className="h-0.5 bg-white/5">
          <div ref={progressRef} className="h-0.5 w-0 bg-gc-green" />
        </div>
      </header>
    </>
  )
}
