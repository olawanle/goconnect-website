import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { team, teamSection } from "@/data/goconnect"

import { useScrollReveal } from "./hooks"

export function Team() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="team" className="perf-section relative py-24">
      <div className="section-inner relative z-10 mx-auto max-w-6xl px-6">
        <div ref={headerRef} className="reveal mb-12 text-center md:text-left">
          <div className="section-label">{teamSection.label}</div>
          <h2 className="section-title">
            {teamSection.title}{" "}
            <span className="accent">{teamSection.accent}</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-gc-text-dim">
            {teamSection.sub}
          </p>
        </div>

        <div className="team-grid grid gap-6 sm:grid-cols-2">
          {team.map((member, index) => (
            <TeamCard key={member.role} member={member} delay={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({
  member,
  delay,
}: {
  member: (typeof team)[number]
  delay: number
}) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`reveal reveal-delay-${delay}`}>
      <Card className="glass-card border-0 bg-transparent">
        <CardHeader className="space-y-3 p-6 pb-0">
          <div className="team-avatar liquid-glass flex size-12 items-center justify-center rounded-full">
            <span className="font-display text-sm text-gc-green">GC</span>
          </div>
          <div className="team-role font-mono text-[0.65rem] uppercase tracking-[0.15em] text-gc-green/80">
            {member.role}
          </div>
          <h3 className="team-name font-display text-xl text-gc-text">{member.name}</h3>
        </CardHeader>
        <CardContent className="space-y-4 p-6 pt-3">
          <p className="team-bio text-sm leading-relaxed text-gc-text-dim">{member.bio}</p>
          <div className="team-skills flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <Badge
                key={skill}
                className="liquid-glass rounded-full border-0 bg-transparent px-3 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-gc-text-dim"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
