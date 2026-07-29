import { useState } from "react"

import { faqs, faqSection } from "@/data/goconnect-v2"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-[1240px] px-4 pb-[clamp(56px,9vw,96px)] sm:px-7">
      <div className="flex flex-wrap items-start gap-8 lg:gap-16">
        <div className="min-w-0 flex-1 basis-[320px]">
          <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gc-text-dimmer">
            {faqSection.label}
          </div>
          <h2 className="font-display text-[clamp(1.85rem,5.2vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-gc-text-bright">
            {faqSection.title}
          </h2>
        </div>
        <div className="min-w-0 flex-1 basis-[460px] border-t border-white/[0.08]">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-white/[0.08]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-1 py-[18px] text-left font-display text-[clamp(16.5px,3vw,19px)] font-medium leading-[1.3] tracking-[-0.02em] text-gc-text-bright"
                >
                  {f.q}
                  <span
                    className={cn(
                      "shrink-0 font-mono text-lg text-gc-green transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "overflow-hidden text-[15px] leading-[1.7] text-gc-text-dim2 transition-[max-height] duration-300",
                    isOpen ? "max-h-[620px] px-2 pb-5" : "max-h-0 px-2",
                  )}
                >
                  {f.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
