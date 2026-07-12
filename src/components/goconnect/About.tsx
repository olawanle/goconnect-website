import {
  Activity,
  Bot,
  Database,
  LineChart,
  MessageSquare,
  Smartphone,
  Zap,
} from "lucide-react"

import { about } from "@/data/goconnect"

import { useScrollReveal } from "./hooks"

const capabilityIcons = [Zap, Bot, Database, LineChart, MessageSquare, Smartphone]

export function About() {
  const copyRef = useScrollReveal<HTMLDivElement>()
  const featuresRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="perf-section relative py-24">
      <div className="section-inner relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={copyRef} className="about-copy reveal">
            <div className="section-label">{about.label}</div>
            <h2 className="section-title mb-5">
              {about.title}
              <br />
              <span className="accent">{about.accent}</span>
            </h2>
            <p className="mb-8 max-w-xl leading-relaxed text-gc-text-dim">
              {about.body}
            </p>
            <div className="about-stats grid grid-cols-2 gap-4 sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="stat-card liquid-glass text-center sm:text-left">
                  <div className="stat-number font-display text-4xl text-gc-green">
                    {stat.value}
                  </div>
                  <div className="stat-label mt-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-gc-text-dimmer">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={featuresRef} className="about-features reveal reveal-delay-2 flex flex-col gap-3">
            {about.capabilities.map((text, index) => {
              const Icon = capabilityIcons[index] ?? Activity
              return (
                <div
                  key={text}
                  className="feature-item liquid-glass flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-gc-green/5"
                >
                  <div className="feature-icon flex size-9 shrink-0 items-center justify-center rounded-full bg-gc-green/10 text-gc-green">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <div className="feature-text text-sm leading-relaxed text-gc-text-dim">{text}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
