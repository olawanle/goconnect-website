"use client"

import React from "react"

interface ReloadableIframeProps {
  baseSrc: string
  title: string
  height?: number
  className?: string
  deferUntilClick?: boolean
}

export default function ReloadableIframe({ baseSrc, title, height = 480, className, deferUntilClick = false }: ReloadableIframeProps) {
  const [src, setSrc] = React.useState<string>("")
  const [mounted, setMounted] = React.useState<boolean>(!deferUntilClick)

  const buildSrc = React.useCallback(() => {
    const sep = baseSrc.includes("?") ? "&" : "?"
    return `${baseSrc}${sep}reload=${Date.now()}`
  }, [baseSrc])

  React.useEffect(() => {
    if (!mounted) return
    setSrc(buildSrc())
  }, [buildSrc, mounted])

  function handleReload() {
    setSrc(buildSrc())
  }

  if (!mounted) {
    return (
      <div className={className}>
        <button type="button" onClick={() => setMounted(true)} className="btn-secondary">Try embedded preview</button>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="rounded-lg overflow-hidden border border-gray-800 bg-black">
        <iframe
          src={src || baseSrc}
          title={title}
          width="100%"
          height={height}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="mt-3">
        <button type="button" onClick={handleReload} className="btn-secondary">Reload preview</button>
      </div>
    </div>
  )
}
