import { useEffect, useState } from "react"

import { LOGO_PATH, loader } from "@/data/goconnect"
import { cn } from "@/lib/utils"

export function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 2000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      id="loader"
      className={cn(
        "fixed inset-0 z-[100000] flex flex-col items-center justify-center gap-8 bg-gc-black transition-[opacity,visibility] duration-500",
        hidden && "pointer-events-none invisible opacity-0",
      )}
      aria-hidden={hidden}
    >
      <div className="loader-logo">
        <img
          src={LOGO_PATH}
          alt="GoConnect"
          className="size-20 rounded-2xl object-contain"
          width={80}
          height={80}
        />
      </div>
      <div className="loader-bar" />
      <div className="loader-text">{loader.text}</div>
    </div>
  )
}
