import { Contact } from "./Contact"
import { Dock } from "./Dock"
import { FAQ } from "./FAQ"
import { Footer } from "./Footer"
import { GlobalEffects } from "./GlobalEffects"
import { Hero } from "./Hero"
import { Marquee } from "./Marquee"
import { Navigation } from "./Navigation"
import { Process } from "./Process"
import { ScopeBuilder } from "./ScopeBuilder"
import { Services } from "./Services"
import { Stats } from "./Stats"
import { Team } from "./Team"
import { Work } from "./Work"

export function GoConnectSite() {
  return (
    <>
      <GlobalEffects />
      <div className="relative z-[5] min-h-screen bg-gc-black text-gc-text">
        <Navigation />
        <main>
          <Hero />
          <Stats />
          <Marquee />
          <ScopeBuilder />
          <Services />
          <Work />
          <Process />
          <Team />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
      <Dock />
    </>
  )
}
