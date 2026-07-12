import { About } from "./About"
import { Contact } from "./Contact"
import { Footer } from "./Footer"
import { GlobalEffects } from "./GlobalEffects"
import { Hero } from "./Hero"
import { Loader } from "./Loader"
import { Marquee } from "./Marquee"
import { Services } from "./Services"
import { Team } from "./Team"
import { Work } from "./Work"

export function GoConnectSite() {
  return (
    <>
      <GlobalEffects />
      <Loader />
      <main className="relative min-h-screen bg-gc-black text-gc-text">
        <Hero />
        <div className="section-backdrop">
          <Marquee />
          <About />
          <Marquee />
          <Services />
          <Team />
          <Marquee />
          <Work />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
