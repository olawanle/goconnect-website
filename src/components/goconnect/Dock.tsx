import { WHATSAPP_BASE_LINK } from "@/data/goconnect-v2"
import { cn } from "@/lib/utils"

import { useMediaQuery } from "./hooks"

export function Dock() {
  const narrow = useMediaQuery("(max-width: 860px)")

  return (
    <div
      className={cn(
        "z-[80]",
        narrow
          ? "fixed inset-x-0 bottom-0 flex gap-2 border-t border-white/[0.09] bg-gc-black/[0.94] px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl"
          : "fixed bottom-6 right-6 flex items-center gap-2.5",
      )}
    >
      <a
        href={WHATSAPP_BASE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message GoConnect on WhatsApp"
        className={cn(
          "gc-btn-primary min-h-[50px] px-5 py-3.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.09em]",
          narrow ? "flex-[2_1_0]" : "shadow-[0_10px_40px_-8px_rgba(0,0,0,0.9)]",
        )}
      >
        <span className="size-[7px] animate-gc-pulse rounded-full bg-gc-ink" />
        Message us
      </a>
      {narrow && (
        <a
          href="#build"
          className="gc-btn-outline min-h-[50px] flex-1 bg-white/[0.03] px-3 py-3.5 font-mono text-[11.5px] font-normal uppercase tracking-[0.09em]"
        >
          Scope
        </a>
      )}
    </div>
  )
}
