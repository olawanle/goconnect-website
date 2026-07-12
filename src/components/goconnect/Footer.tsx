import { Send, Twitter } from "lucide-react"

import { LOGO_PATH, footer } from "@/data/goconnect"

const socialIcons: Record<string, typeof Send | typeof Twitter> = {
  Telegram: Send,
  Twitter: Twitter,
}

export function Footer() {
  return (
    <footer className="relative z-10 py-12">
      <div className="footer-inner mx-auto flex max-w-6xl flex-col items-center gap-8 px-6">
        <a href="#hero" className="footer-logo flex items-center gap-3 no-underline">
          <img
            src={LOGO_PATH}
            alt="GoConnect"
            className="size-8 rounded-full object-contain"
            width={32}
            height={32}
          />
          <span className="footer-logo-text font-display text-lg text-gc-text">
            GoConnect
          </span>
        </a>

        <div className="flex justify-center gap-4">
          {footer.links.map((link) => {
            const external = link.href.startsWith("http")
            const Icon = socialIcons[link.label]
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="liquid-glass flex size-11 items-center justify-center rounded-full text-gc-text-dim transition-all hover:bg-gc-green/5 hover:text-gc-green"
              >
                {Icon ? (
                  <Icon className="size-4" aria-hidden="true" />
                ) : (
                  <span className="font-mono text-[0.6rem] uppercase tracking-wider">
                    {link.label}
                  </span>
                )}
              </a>
            )
          })}
        </div>

        <div className="footer-copy text-center font-mono text-[0.65rem] uppercase tracking-[0.12em] text-gc-text-dimmer">
          {footer.copyright}
        </div>
      </div>
    </footer>
  )
}
