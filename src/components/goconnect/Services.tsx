import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { services, servicesSection } from "@/data/goconnect"

import { useScrollReveal } from "./hooks"

export function Services() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const gridRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="services" className="perf-section py-24">
      <div className="section-inner mx-auto max-w-6xl px-6">
        <div ref={headerRef} className="reveal mb-12 text-center md:text-left">
          <div className="section-label">{servicesSection.label}</div>
          <h2 className="section-title">
            {servicesSection.title}{" "}
            <span className="accent">{servicesSection.accent}</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="services-grid reveal reveal-delay-1 grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <Card key={service.name} className="glass-card border-0 bg-transparent">
              <CardHeader className="space-y-3 p-6 pb-0">
                <div className="service-card-number font-mono text-[0.65rem] text-gc-text-dimmer">
                  {service.number}
                </div>
                <div className="service-sub font-mono text-[0.7rem] uppercase tracking-[0.12em] text-gc-green/80">
                  {service.sub}
                </div>
                <h3 className="service-name font-display text-2xl text-gc-text">
                  {service.name}
                </h3>
              </CardHeader>
              <CardContent className="space-y-5 p-6 pt-4">
                <p className="service-desc text-sm leading-relaxed text-gc-text-dim">
                  {service.desc}
                </p>
                <div className="service-tags flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="liquid-glass rounded-full border-0 bg-transparent px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-gc-text-dim"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
