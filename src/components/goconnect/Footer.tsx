import { footerCopyright, footerLinks } from "@/data/goconnect-v2"

import { useMediaQuery } from "./hooks"
import { Logo } from "./Logo"

export function Footer() {
  const narrow = useMediaQuery("(max-width: 860px)")

  return (
    <footer className="border-t border-white/[0.08]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-[30px] gap-y-[18px] px-4 py-[26px] pb-[calc(26px+env(safe-area-inset-bottom))] sm:px-7">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo variant="footer" />
          <span className="font-display text-base font-semibold tracking-[-0.02em] text-gc-text">GoConnect</span>
        </a>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-[22px] gap-y-3.5">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-gc-text-dimmer transition-colors hover:text-gc-text"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-gc-text-faintest">
          {footerCopyright}
        </div>
      </div>
      {narrow && <div aria-hidden="true" className="h-[74px]" />}
    </footer>
  )
}
