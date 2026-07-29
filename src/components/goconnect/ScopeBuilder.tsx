import { useMemo, useState } from "react"

import {
  type BuildKind,
  type BuildScope,
  type BuildUrgency,
  KINDS,
  SCOPES,
  URGENCY,
  WHATSAPP_BASE_LINK,
} from "@/data/goconnect-v2"
import { cn } from "@/lib/utils"

const kindEntries = (Object.keys(KINDS) as BuildKind[]).map((k) => ({ value: k, label: KINDS[k].label }))
const scopeEntries = (Object.keys(SCOPES) as BuildScope[]).map((k) => ({ value: k, label: SCOPES[k].label }))
const urgencyEntries = (Object.keys(URGENCY) as BuildUrgency[]).map((k) => ({ value: k, label: URGENCY[k].label }))

function chipClass(active: boolean) {
  return cn(
    "min-h-11 rounded-sm border px-[15px] py-[11px] font-mono text-[11px] uppercase tracking-[0.06em] transition-all",
    active
      ? "border-gc-green bg-gc-green text-gc-ink"
      : "border-white/[0.14] bg-transparent text-gc-text-dim hover:border-white/30",
  )
}

function ChipGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: ReadonlyArray<{ value: T; label: string }>
  value: T
  onChange: (v: T) => void
}) {
  return (
    <div>
      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-gc-text-dimmer">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={chipClass(value === o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export function ScopeBuilder() {
  const [kind, setKind] = useState<BuildKind>("saas")
  const [scope, setScope] = useState<BuildScope>("mvp")
  const [urgency, setUrgency] = useState<BuildUrgency>("quarter")
  const [copied, setCopied] = useState(false)

  const selectKind = (k: BuildKind) => {
    setKind(k)
    setCopied(false)
  }
  const selectScope = (s: BuildScope) => {
    setScope(s)
    setCopied(false)
  }
  const selectUrgency = (u: BuildUrgency) => {
    setUrgency(u)
    setCopied(false)
  }

  const kindData = KINDS[kind]
  const scopeData = SCOPES[scope]
  const urgencyData = URGENCY[urgency]

  const timeline = scopeData.weeks
    ? `${scopeData.weeks[0]}–${scopeData.weeks[1]} weeks to live · ${urgencyData.note}`
    : `Rolling monthly · ${urgencyData.note}`

  const sheetLines = useMemo(
    () => [scopeData.line, ...kindData.lines, ...(kindData.stack ? [kindData.stack] : [])],
    [scopeData, kindData],
  )

  const message = useMemo(
    () =>
      `Hi GoConnect — build sheet from your site.\n\n` +
      `Project: ${kindData.title}\n` +
      `Scope: ${scopeData.label}\n` +
      `Timing: ${urgencyData.label}\n` +
      `Target: ${timeline}\n\nHere's what I'm working with: `,
    [kindData, scopeData, urgencyData, timeline],
  )

  const waLink = `${WHATSAPP_BASE_LINK}?text=${encodeURIComponent(message)}`
  const sheetRefLabel = `GC-${kind.toUpperCase().slice(0, 3)}-${scope.toUpperCase().slice(0, 3)}`

  const copySheet = async () => {
    try {
      await navigator.clipboard.writeText(`${message}\n${sheetLines.map((l) => `• ${l}`).join("\n")}`)
    } catch {
      // clipboard unavailable — the WhatsApp link still works
    }
    setCopied(true)
  }

  return (
    <section id="build" className="mx-auto max-w-[1240px] px-4 py-[clamp(56px,9vw,96px)] sm:px-7">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
        <div className="min-w-0 flex-1 basis-[420px]">
          <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gc-text-dimmer">
            01 / Scope it now
          </div>
          <h2 className="font-display text-[clamp(1.85rem,5.2vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-gc-text-bright">
            Build your spec in twenty seconds.
          </h2>
        </div>
        <p className="max-w-[330px] flex-none text-sm leading-relaxed text-gc-text-dim2">
          Three clicks writes a real scope sheet — then sends it to us on WhatsApp, already filled in. No form, no
          discovery call to book.
        </p>
      </div>

      <div className="flex flex-wrap items-stretch gap-5">
        <div className="gc-panel flex min-w-0 flex-1 basis-[460px] flex-col gap-[26px] p-[clamp(20px,3.4vw,30px)]">
          <ChipGroup label="01 — What are you building?" options={kindEntries} value={kind} onChange={selectKind} />
          <ChipGroup
            label="02 — How far do you want to go?"
            options={scopeEntries}
            value={scope}
            onChange={selectScope}
          />
          <ChipGroup
            label="03 — When do you need it live?"
            options={urgencyEntries}
            value={urgency}
            onChange={selectUrgency}
          />
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-gc-text-dimmer2">
            <span className="h-px flex-1 bg-white/[0.08]" />
            Sheet updates live
          </div>
        </div>

        <div className="flex min-w-0 flex-1 basis-[340px] flex-col rounded border border-gc-green/[0.22] bg-[#0e1110] p-[clamp(20px,3.4vw,26px)]">
          <div className="mb-4 flex items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-gc-green">
            <span>Your build sheet</span>
            <span className="text-gc-text-dimmer2">{sheetRefLabel}</span>
          </div>
          <div className="mb-2 font-display text-[clamp(22px,4vw,26px)] font-semibold leading-[1.15] tracking-[-0.025em] text-gc-text-bright">
            {kindData.title}
          </div>
          <div className="mb-[18px] font-mono text-[11px] leading-relaxed tracking-wide text-gc-green">
            {timeline}
          </div>
          <div className="flex flex-1 flex-col gap-[11px]">
            {sheetLines.map((l) => (
              <div key={l} className="flex items-start gap-[11px] text-[13.5px] leading-relaxed text-gc-text-dim">
                <span className="pt-0.5 font-mono text-[11px] text-gc-green">▸</span>
                {l}
              </div>
            ))}
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="gc-btn-primary mt-[22px] justify-between px-[18px] py-4 font-mono text-[11.5px] font-bold uppercase tracking-[0.1em]"
          >
            Send this on WhatsApp<span>→</span>
          </a>
          <button
            type="button"
            onClick={copySheet}
            className="mt-2 bg-transparent px-1.5 py-3 text-center font-mono text-[10.5px] uppercase tracking-[0.14em] text-gc-text-dimmer transition-colors hover:text-gc-text"
          >
            {copied ? "Copied to clipboard ✓" : "or copy the sheet"}
          </button>
        </div>
      </div>
    </section>
  )
}
