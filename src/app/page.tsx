"use client";

import Image from 'next/image'
import Link from 'next/link'
import Reveal from './components/Reveal'
import CosmicBackground from './components/CosmicBackground'
import SplashScreen from './components/SplashScreen'
// import ThreeScene from './components/ThreeScene'
import ServiceIcon3D from './components/ServiceIcon3D'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen text-white bg-black selection:bg-green-500/30">
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero */}
          <section className="relative overflow-hidden section min-h-[90vh] flex items-center justify-center">
            <CosmicBackground />
            {/* <ThreeScene /> - Removed for performance on mobile */}

            {/* Overlay gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none z-0" />

            <div className="relative section-container flex flex-col items-center text-center gap-8 z-10 w-full">
              <Reveal>
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                  <Image src="/logo.png" alt="GoConnect Logo" width={100} height={100} className="relative opacity-95 icon-float" priority />
                </div>
              </Reveal>
              <Reveal className="animate-fade-in">
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-green-400 mb-4 backdrop-blur-md">
                  Web Developer + AI Automation
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-sm">
                  Future-Proof Your <br />
                  <span className="gradient-text-neo">Digital Presence</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  I build high-performance websites and intelligent AI automation systems that replace busywork with growth.
                </p>
              </Reveal>

              <Reveal className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-fade-in-delay">
                <Link href="/services" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 btn-shimmer">
                  <span className="relative z-10">Explore Services</span>
                </Link>
                <Link href="#work" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                  View Work
                </Link>
              </Reveal>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30"
              animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
            </motion.div>
          </section>

          {/* About / Value Prop */}
          <section className="section bg-black relative">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="section-container">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <Reveal>
                  <h2 className="heading-xl mb-6">
                    Bridging the gap between <span className="text-white">Design</span> and <span className="text-emerald-400">Intelligence</span>.
                  </h2>
                  <div className="space-y-6 text-gray-400 text-lg">
                    <p>
                      In today&apos;s fast-paced digital landscape, having a pretty website isn&apos;t enough. You need a system that works as hard as you do.
                    </p>
                    <p>
                      I combine aesthetic excellence with cutting-edge AI automation to create digital experiences that not only look expensive but drive real revenue.
                    </p>
                    <ul className="space-y-3 mt-4">
                      {[
                        "Custom AI Chatbots & Agents",
                        "High-Performance Next.js Applications",
                        "Automated Lead Generation Workflows",
                        "Seamless API Integrations"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal className="relative">
                  <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group tilt liquid-glass">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
                    {/* Placeholder for a cool abstract tech image or profile code snippet */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="w-full h-full border border-dashed border-white/10 rounded-xl flex items-center justify-center text-white/20 font-mono text-sm relative overflow-hidden bg-black/50">
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(68,255,147,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[background-position_0s_ease_infinite] bg-[position:0_0,0_0] hover:bg-[position:100%_100%,0_0] transition-all duration-[2000ms]" />
                        System.Ready()
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Services Teaser */}
          <section id="services" className="section section-colorful relative overflow-hidden">
            <div className="section-container relative z-10">
              <Reveal className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="heading-xl mb-4">Services</h2>
                <p className="subheading text-lg">
                  Tailored solutions to elevate your business operations and online presence.
                </p>
              </Reveal>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "AI Automation",
                    desc: "Custom chatbots and workflow automation that save hours of manual work.",
                    type: "ai",
                    color: "from-amber-400/20 to-orange-500/20"
                  },
                  {
                    title: "Web Development",
                    desc: "Blazing fast, SEO-optimized websites built with Next.js and React.",
                    type: "web",
                    color: "from-blue-400/20 to-cyan-500/20"
                  },
                  {
                    title: "Consulting",
                    desc: "Strategic guidance on implementing AI to valid business problems.",
                    type: "consulting",
                    color: "from-purple-400/20 to-pink-500/20"
                  }
                ].map((service, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className={`card h-full flex flex-col hover:bg-white/[0.03] bg-gradient-to-b ${service.color} border-white/5 relative group`}>
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-start">
                        <ServiceIcon3D type={service.type as "ai" | "web" | "consulting"} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                        {service.desc}
                      </p>
                      <Link href="/services" className="text-sm font-semibold text-emerald-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more <span className="text-lg">→</span>
                      </Link>
                    </div>
                  </Reveal>
                ))
                }
              </div>
            </div>
          </section>

          {/* Work Grid */}
          <section id="work" className="section bg-black">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <Reveal className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="heading-xl mb-2">Selected Work</h2>
                  <p className="subheading">Recent projects in AI and web development</p>
                </div>
                <Link href="/work" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20">
                  View all projects <span className="text-xl">→</span>
                </Link>
              </Reveal>

              <div className="grid !grid-cols-1 md:grid-cols-1 gap-16 md:gap-24 w-full">
                {/* Project 1 */}
                <Reveal width="100%" className="w-full">
                  <div className="group cursor-pointer w-full">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative mb-4 liquid-glass">
                      <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        <span className="text-neutral-700 font-mono text-xl">Project Preview</span>
                      </div>

                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">Venna Cricket Bot</h3>
                      <a href="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/31/13/20250831130657-EX4OUU3P.json&_gl=1*wjf7de*_gcl_au*Mzc4NDMxOTM1LjE3NzAwNDQ3MDMuNzM2Nzc1NTAxLjE3NzAwNDQ3ODkuMTc3MDA0NDgxNA..*_ga*OTE0MTgxMTMuMTc3MDA0NDcwNw..*_ga_HKHSWES9V9*czE3NzAwNDQ3MDckbzEkZzEkdDE3NzAwNDQ4NDMkajIkbDAkaDExOTcyMzI1MA.." target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
                        View Live ↗
                      </a>
                    </div>
                    <p className="text-gray-400">AI Chatbot • Automation • Cricket API</p>
                  </div>
                </Reveal>

                {/* Real Estate Bot */}
                <Reveal delay={0.1} width="100%" className="w-full">
                  <div className="group cursor-pointer w-full">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative mb-4 liquid-glass">
                      <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        <iframe
                          src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/16/11/20250316110051-F43FAVZL.json"
                          title="Real Estate Bot preview"
                          className="w-full h-full pointer-events-none"
                          loading="lazy"
                        />
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="badge bg-black/80 backdrop-blur border border-white/10 text-xs px-2 py-1 rounded">Live Preview</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">Real Estate Bot</h3>
                      <a href="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/16/11/20250316110051-F43FAVZL.json" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
                        View Live ↗
                      </a>
                    </div>
                    <p className="text-gray-400">Botpress • Automation • Real Estate</p>
                  </div>
                </Reveal>

                {/* Rocket League Bot */}
                <Reveal delay={0.2} width="100%" className="w-full">
                  <div className="group cursor-pointer w-full">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative mb-4 liquid-glass">
                      <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        <iframe
                          src="https://rocket-league-bot.netlify.app"
                          title="Rocket League Bot site preview"
                          className="w-full h-full pointer-events-none"
                          loading="lazy"
                        />
                      </div>

                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">Rocket League Bot</h3>
                      <a href="https://rocket-league-bot.netlify.app" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
                        View Live ↗
                      </a>
                    </div>
                    <p className="text-gray-400">TypeScript • React • Automation</p>
                  </div>
                </Reveal>

                {/* Zoa Real Estate */}
                <Reveal delay={0.3} width="100%" className="w-full">
                  <div className="group cursor-pointer w-full">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative mb-4 liquid-glass">
                      <div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-700">
                        <Image
                          src="/Screenshot 2025-09-04 at 1.50.30 PM.png"
                          alt="Zoa Real Estate"
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>

                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">Zoa Real Estate</h3>
                      <a href="https://zaorealestatesfunding.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
                        View Live ↗
                      </a>
                    </div>
                    <p className="text-gray-400">Next.js • Investment Platform</p>
                  </div>
                </Reveal>

                {/* SafeTech SIS */}
                <Reveal delay={0.4} width="100%" className="w-full">
                  <div className="group cursor-pointer w-full">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative mb-4 liquid-glass">
                      <div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-700">
                        <Image
                          src="/safetech-1.jpg"
                          alt="SafeTech SIS"
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>

                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">SafeTech SIS & LMS</h3>
                      <a href="https://eitanchakov.com/en/accounts/login/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
                        View Live ↗
                      </a>
                    </div>
                    <p className="text-gray-400">Python • Django • LMS System</p>
                  </div>
                </Reveal>

                {/* Trustpilot Scraper */}
                <Reveal delay={0.5} width="100%" className="w-full">
                  <div className="group cursor-pointer w-full">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative mb-4 liquid-glass">
                      <div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-700">
                        <Image
                          src="/Screenshot 2025-09-04 at 2.06.04 PM.png"
                          alt="Trustpilot Scraper"
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>

                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">Trustpilot Email Scraper</h3>
                      <a href="https://trustpilotscraper-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
                        View Live ↗
                      </a>
                    </div>
                    <p className="text-gray-400">Python • Automation • Scraper</p>
                  </div>
                </Reveal>

                {/* Portfolio v1 */}

              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section bg-gradient-to-t from-emerald-950/20 to-black relative border-t border-white/5">
            <div className="section-container text-center relative z-10">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to upgrade?</h2>
                <p className="text-xl text-gray-400 max-w-xl mx-auto mb-10">
                  Let&apos;s build something that positions you as a leader in your industry.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)]">
                  Start a project
                </Link>
              </Reveal>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
}