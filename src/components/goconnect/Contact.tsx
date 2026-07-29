import { contactLinks, contactSection, TELEGRAM_LINK, WHATSAPP_BASE_LINK, WHATSAPP_DISPLAY } from "@/data/goconnect-v2"

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/[0.08]">
      <div className="mx-auto max-w-[1240px] px-4 py-[clamp(56px,8vw,88px)] sm:px-7">
        <div className="flex flex-wrap items-end gap-8 lg:gap-16">
          <div className="min-w-0 flex-1 basis-[460px]">
            <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gc-text-dimmer">
              {contactSection.label}
            </div>
            <h2 className="mb-5 font-display text-[clamp(2.1rem,6vw,4.2rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-gc-text-bright">
              {contactSection.title}
            </h2>
            <p className="mb-7 max-w-[540px] text-[clamp(15.5px,2.4vw,17px)] leading-relaxed text-gc-text-dim">
              {contactSection.sub}
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={WHATSAPP_BASE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gc-btn-primary max-w-[340px] flex-1 px-7 py-[18px] font-mono text-xs font-bold uppercase tracking-[0.09em]"
              >
                WhatsApp {WHATSAPP_DISPLAY} →
              </a>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gc-btn-outline max-w-[340px] flex-1 px-7 py-[18px] font-mono text-xs uppercase tracking-[0.09em]"
              >
                Telegram @goconnectdev
              </a>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-px overflow-hidden rounded border border-white/[0.08] bg-white/[0.08]">
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex min-h-6 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 bg-gc-dark px-5 py-[17px] transition-colors hover:bg-gc-dark2"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gc-text-dimmer">
                  {l.label}
                </span>
                <span className="text-[14.5px] text-gc-text">{l.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
