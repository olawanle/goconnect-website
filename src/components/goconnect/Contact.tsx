import { ArrowRight, Linkedin, Mail, MessageCircle, Send, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { contact } from "@/data/goconnect"

import { useScrollReveal } from "./hooks"

const contactIcons: Record<string, typeof Mail> = {
  WhatsApp: MessageCircle,
  Telegram: Send,
  "X / Twitter": Twitter,
  LinkedIn: Linkedin,
  Email: Mail,
}

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contact" className="perf-section relative py-24">
      <div className="section-inner relative z-10 mx-auto max-w-2xl px-6 text-center">
        <div ref={ref} className="contact-grid reveal">
          <div className="section-label">{contact.label}</div>
          <h2 className="contact-info-title section-title mb-4">
            {contact.title}{" "}
            <span className="accent">{contact.accent}</span>
          </h2>
          <p className="contact-info-sub mx-auto mb-10 max-w-lg text-sm leading-relaxed text-gc-text-dim">
            {contact.sub}
          </p>

          <div className="contact-links mb-8 flex flex-wrap justify-center gap-3">
            {contact.links.map((link) => {
              const Icon = contactIcons[link.label] ?? Mail
              const external = link.href.startsWith("http")
              return (
                <Button
                  key={link.label}
                  asChild
                  variant="outline"
                  className="liquid-glass h-auto rounded-full border-0 bg-transparent px-5 py-2.5 text-gc-text-dim hover:bg-gc-green/5 hover:text-gc-green"
                >
                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <Icon data-icon="inline-start" />
                    <span className="flex flex-col items-start gap-0.5">
                      <span className="font-mono text-[0.55rem] uppercase tracking-[0.15em] text-gc-text-dimmer">
                        {link.label}
                      </span>
                      <span className="text-sm">{link.value}</span>
                    </span>
                  </a>
                </Button>
              )
            })}
          </div>

          <a
            href="mailto:info@goconnect.space"
            className="liquid-glass mx-auto flex max-w-md items-center gap-3 rounded-full py-2.5 pl-6 pr-2 no-underline transition-all hover:bg-gc-green/5"
          >
            <Mail className="size-4 shrink-0 text-gc-green/60" aria-hidden="true" />
            <span className="min-w-0 flex-1 text-left text-sm text-gc-text-dim">
              info@goconnect.space
            </span>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gc-green text-gc-black">
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
