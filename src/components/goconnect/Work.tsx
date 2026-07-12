import { useMemo, useState } from "react"
import { ArrowUpRight, Loader2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projectFilters, projects, workSection } from "@/data/goconnect"
import { cn } from "@/lib/utils"

import { useInView, useScrollReveal } from "./hooks"

function ProjectPreview({ title, url }: { title: string; url: string }) {
  const { ref, inView } = useInView<HTMLDivElement>("300px 0px")
  const [loaded, setLoaded] = useState(false)
  const [blocked, setBlocked] = useState(false)

  return (
    <div
      ref={ref}
      className="work-preview relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-gc-dark3"
    >
      {!inView && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gc-dark3">
          <span className="font-mono text-[0.6rem] uppercase tracking-wider text-gc-text-dimmer">
            Scroll to preview
          </span>
        </div>
      )}
      {inView && !loaded && !blocked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gc-dark3">
          <Loader2 className="size-5 animate-spin text-gc-green/60" aria-hidden="true" />
          <span className="sr-only">Loading preview for {title}</span>
        </div>
      )}
      {blocked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gc-dark3 px-4 text-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-wider text-gc-text-dimmer">
            Preview blocked — use View Live
          </span>
        </div>
      )}
      {inView && (
        <iframe
          src={url}
          title={`${title} preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          tabIndex={-1}
          className={cn(
            "pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0",
            (blocked || !loaded) && "opacity-0",
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setBlocked(true)}
        />
      )}
      <div className="work-preview-overlay pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  return (
    <Card
      className="work-card glass-card group overflow-hidden border-0 bg-transparent"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        aria-label={`View ${project.title} live`}
      >
        <div className="relative">
          <ProjectPreview title={project.title} url={project.url} />
          <Badge className="work-tag-badge liquid-glass absolute right-3 top-3 rounded-full border-0 bg-transparent px-3 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-gc-green">
            {project.tag}
          </Badge>
        </div>
        <CardContent className="work-info space-y-2 p-5">
          <div className="work-title font-display text-xl text-gc-text transition-colors group-hover:text-gc-green">
            {project.title}
          </div>
          <div className="work-desc font-mono text-[0.72rem] text-gc-text-dim">{project.desc}</div>
          <div className="work-link flex items-center gap-1 font-mono text-[0.65rem] uppercase tracking-wider text-gc-green">
            View Live
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </div>
        </CardContent>
      </a>
    </Card>
  )
}

export function Work() {
  const [filter, setFilter] = useState("all")
  const headerRef = useScrollReveal<HTMLDivElement>()
  const filtersRef = useScrollReveal<HTMLDivElement>()

  const filteredProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.tag === filter)),
    [filter],
  )

  return (
    <section id="work" className="perf-section py-24">
      <div className="section-inner mx-auto max-w-6xl px-6">
        <div ref={headerRef} className="reveal mb-8 text-center md:text-left">
          <div className="section-label">{workSection.label}</div>
          <h2 className="section-title">
            {workSection.title}{" "}
            <span className="accent">{workSection.accent}</span>
          </h2>
        </div>

        <div ref={filtersRef} className="reveal reveal-delay-1 mb-10 flex justify-center md:justify-start">
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="liquid-glass h-auto max-w-full flex-wrap justify-start gap-1 rounded-full bg-transparent p-1.5">
              {projectFilters.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="rounded-full px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wider text-gc-text-dim data-[state=active]:bg-gc-green data-[state=active]:text-gc-black"
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="work-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
