import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LOGO_PATH, mobileNavLinks, navLinks } from "@/data/goconnect"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="relative z-20 px-6 py-6">
      <nav
        id="navbar"
        className={cn(
          "liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-shadow duration-300 md:px-6",
          scrolled && "shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_24px_var(--gc-green-glow)]",
        )}
        aria-label="Main navigation"
      >
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <img
            src={LOGO_PATH}
            alt="GoConnect"
            className="size-8 rounded-full object-contain"
            width={32}
            height={32}
          />
          <span className="font-display text-lg font-normal tracking-tight text-gc-text">
            GoConnect
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            "cta" in link && link.cta ? (
              <Button
                key={link.href}
                asChild
                className="rounded-full bg-gc-green px-5 text-sm font-medium text-gc-black hover:bg-gc-green/90"
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ) : (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ),
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gc-text hover:bg-gc-green/10 hover:text-gc-green md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="liquid-glass flex flex-col border-0 bg-black/80 text-gc-text"
          >
            <SheetHeader>
              <SheetTitle className="font-display text-left text-2xl text-gc-text">
                GoConnect
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navigate to a section of the site
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-8 flex flex-1 flex-col justify-center gap-6" aria-label="Mobile navigation">
              {mobileNavLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-3xl text-gc-text-dim transition-colors hover:text-gc-green"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
