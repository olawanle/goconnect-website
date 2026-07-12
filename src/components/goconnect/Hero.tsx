import { useCallback, useEffect, useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { hero, VIDEO_URL } from "@/data/goconnect"

import { CircuitOverlay } from "./CircuitOverlay"
import { useInView } from "./hooks"
import { Navigation } from "./Navigation"

function BackgroundVideo({ active }: { active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const opacityRef = useRef(0)
  const fadeRafRef = useRef<number | null>(null)
  const monitorRafRef = useRef<number | null>(null)
  const restartTimerRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)

  const fadeTo = useCallback((target: number, duration = 500) => {
    if (fadeRafRef.current !== null) {
      cancelAnimationFrame(fadeRafRef.current)
    }

    const video = videoRef.current
    if (!video) return

    const startOpacity = opacityRef.current
    const startedAt = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const nextOpacity = startOpacity + (target - startOpacity) * progress
      opacityRef.current = nextOpacity
      video.style.opacity = String(nextOpacity)

      if (progress < 1) {
        fadeRafRef.current = requestAnimationFrame(step)
      } else {
        fadeRafRef.current = null
      }
    }

    fadeRafRef.current = requestAnimationFrame(step)
  }, [])

  const fadeIn = useCallback(() => {
    fadingOutRef.current = false
    fadeTo(1, 500)
  }, [fadeTo])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (!active) {
      video.pause()
      if (monitorRafRef.current !== null) {
        cancelAnimationFrame(monitorRafRef.current)
        monitorRafRef.current = null
      }
      return
    }

    const monitorPlayback = () => {
      if (
        Number.isFinite(video.duration) &&
        video.duration > 0 &&
        video.duration - video.currentTime <= 0.55 &&
        !fadingOutRef.current
      ) {
        fadingOutRef.current = true
        fadeTo(0, 500)
      }
      monitorRafRef.current = requestAnimationFrame(monitorPlayback)
    }

    const handleLoaded = () => {
      void video.play().catch(() => undefined)
      fadeIn()
    }

    const handleEnded = () => {
      if (fadeRafRef.current !== null) cancelAnimationFrame(fadeRafRef.current)
      opacityRef.current = 0
      video.style.opacity = "0"
      fadingOutRef.current = false

      restartTimerRef.current = window.setTimeout(() => {
        video.currentTime = 0
        void video.play().then(fadeIn).catch(() => undefined)
      }, 100)
    }

    video.addEventListener("loadeddata", handleLoaded)
    video.addEventListener("ended", handleEnded)
    monitorRafRef.current = requestAnimationFrame(monitorPlayback)

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void video.play().then(fadeIn).catch(() => undefined)
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoaded)
      video.removeEventListener("ended", handleEnded)
      if (fadeRafRef.current !== null) cancelAnimationFrame(fadeRafRef.current)
      if (monitorRafRef.current !== null) cancelAnimationFrame(monitorRafRef.current)
      if (restartTimerRef.current !== null) window.clearTimeout(restartTimerRef.current)
    }
  }, [active, fadeIn, fadeTo])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 size-full translate-y-[17%] object-cover"
      src={VIDEO_URL}
      muted
      autoPlay
      playsInline
      preload="auto"
      aria-hidden="true"
      style={{ opacity: 0 }}
    />
  )
}

export function Hero() {
  const { ref: heroRef, inView } = useInView<HTMLElement>("100px 0px")

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen min-h-[600px] flex-col overflow-hidden bg-gc-black"
    >
      <div className="absolute inset-0 z-0">
        <BackgroundVideo active={inView} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-emerald-950/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.65)_85%)]" />
        <div className="absolute inset-0 bg-gc-green/[0.03] mix-blend-overlay" />
      </div>

      <CircuitOverlay active={inView} />

      <Navigation />

      <div className="hero-overlay relative z-10 mx-auto flex flex-1 -translate-y-[6%] flex-col items-center justify-center px-6 pb-16 pt-8 text-center">
        <Badge className="hero-badge liquid-glass mb-6 rounded-full border-0 bg-transparent px-4 py-1.5 text-xs text-gc-green/90">
          <Sparkles data-icon="inline-start" />
          {hero.badge}
        </Badge>

        <h1 className="hero-headline mb-6 max-w-4xl">
          <span className="line1 block font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-gc-text">
            {hero.line1}
          </span>
          <span className="line2 block font-display text-[clamp(2.5rem,7vw,5.5rem)] italic leading-[1.05] tracking-tight text-gc-green">
            {hero.line2}
          </span>
        </h1>

        <p className="hero-sub mx-auto mb-10 max-w-xl text-base leading-relaxed text-gc-text-dim md:text-lg">
          {hero.sub}
        </p>

        <div className="hero-actions flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="btn-primary h-auto">
            <a href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight data-icon="inline-end" />
            </a>
          </Button>
          <Button asChild variant="outline" className="btn-glass h-auto">
            <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </Button>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gc-text-dimmer">
          {hero.scrollLabel}
        </span>
        <div className="scroll-line h-10 w-px bg-gc-green/30" />
      </div>
    </section>
  )
}
