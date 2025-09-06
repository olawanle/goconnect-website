import Image from 'next/image'
import Link from 'next/link'
import Reveal from './components/Reveal'

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative overflow-hidden section section-colorful bg-grid">
        <div className="relative section-container flex flex-col items-center text-center gap-6">
          <span className="blob w-64 h-64 left-4 top-8 bg-emerald-500/25" aria-hidden="true" />
          <span className="blob w-72 h-72 right-6 top-20 bg-sky-500/20" style={{ animationDelay: '1.2s' }} aria-hidden="true" />
          <span className="blob w-52 h-52 left-1/2 -bottom-6 bg-pink-500/20" style={{ animationDelay: '2.1s' }} aria-hidden="true" />

          <Reveal>
            <Image src="/logo.png" alt="GoConnect Logo" width={84} height={84} className="opacity-95 icon-float" priority />
          </Reveal>
          <Reveal className="animate-fade-in">
            <h1 className="heading-xl gradient-text-neo">
              Web Developer + AI Automation
            </h1>
          </Reveal>
          <Reveal className="max-w-2xl">
            <p className="text-gray-200">
              I design and ship production‑ready websites, dashboards, and AI assistants. Clean code, high performance, and measurable business results.
            </p>
          </Reveal>
          <Reveal>
            <div className="inline-flex flex-col sm:flex-row gap-3 bg-black/40 backdrop-blur-md p-2 rounded-xl ring-1 ring-white/10 shadow-2xl">
              <Link href="#work"><button className="btn-primary btn-shimmer">See Work</button></Link>
              <Link href="/contact"><button className="btn-secondary border-pulse">Hire Me</button></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech marquee */}
      <section className="section">
        <div className="section-container">
          <div className="marquee">
            <div className="marquee-track">
              {['Next.js','React','Node.js','Tailwind','Botpress','OpenAI','Vercel','EmailJS'].concat(['Next.js','React','Node.js','Tailwind','Botpress','OpenAI','Vercel','EmailJS']).map((t, i) => (
                <span key={i} className="badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="section section-colorful">
        <div className="section-container">
          <div className="text-center mb-8">
            <Reveal>
              <h2 className="heading-xl gradient-text-neo">What I Build</h2>
            </Reveal>
            <Reveal className="max-w-3xl mx-auto">
              <p className="subheading">Production‑grade AI chatbots and modern web apps that look great and perform even better.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal>
              <div className="card tilt">
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl spin-slow">🤖</span><h3 className="text-xl font-bold">AI Chatbots & Automation</h3></div>
                <p className="text-gray-300 mb-4">Lead qualification, support, and automation using Botpress, OpenAI, and RAG pipelines.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200 text-sm">
                  <li className="flex items-center gap-2"><span className="text-green-400">•</span> Lead capture & CRM</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">•</span> Web & WhatsApp</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">•</span> Knowledge base / RAG</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">•</span> Analytics & testing</li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="card tilt">
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl icon-float">💻</span><h3 className="text-xl font-bold">Web Development</h3></div>
                <p className="text-gray-300 mb-4">High‑performance websites and dashboards built with Next.js and modern tooling.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200 text-sm">
                  <li className="flex items-center gap-2"><span className="text-green-400">•</span> Landing pages & SaaS</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">•</span> API design & integrations</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">•</span> Accessibility & SEO</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">•</span> CI/CD & analytics</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Web Development Expertise */}
      <section className="section section-gradient">
        <div className="section-container">
          <h2 className="heading-xl text-center mb-8">Web Development Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Frontend UI', desc: 'Next.js, React, Tailwind UI systems and design tokens.' },
              { title: 'Backend APIs', desc: 'REST/edge APIs, Next Routes, authentication, Prisma.' },
              { title: 'Integrations', desc: 'Stripe, EmailJS, Notion, Airtable, webhooks & automations.' },
              { title: 'Performance', desc: 'Core Web Vitals, caching, images, bundle control.' },
              { title: 'SEO & Content', desc: 'Metadata, OG, sitemaps, structured data, CMS.' },
              { title: 'DevOps', desc: 'Vercel, environments, CI/CD, observability.' }
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="section">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="heading-xl">Why Work With Me?</h2>
            <p className="subheading max-w-3xl mx-auto">Practical engineering, attention to detail, and a partner who owns outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '⚡', title: 'Fast Delivery', description: 'Tight feedback loops and iterative releases.' },
              { icon: '🔒', title: 'Solid Quality', description: 'Type‑safe code, accessibility, best practices.' },
              { icon: '📈', title: 'Scalable', description: 'Architected for growth from day one.' },
              { icon: '🎯', title: 'Results‑Focused', description: 'Design decisions driven by clear KPIs.' }
            ].map((feature, index) => (
              <div key={index} className="card">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="section section-gradient">
        <div className="section-container">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="heading-xl">Selected Work</h2>
              <p className="subheading">Recent projects in AI and web development</p>
            </div>
            <Link href="/contact" className="hidden sm:inline-block"><span className="btn-secondary">Start a project</span></Link>
          </div>

          {/* Venna Cricket Bot live preview card */}
          <div className="card mb-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Venna Cricket Bot</h3>
              <span className="badge">Live Preview</span>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-800 bg-black">
              <iframe
                src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/31/13/20250831130657-EX4OUU3P.json"
                title="Venna Cricket Bot preview"
                width="100%"
                height="480"
                loading="lazy"
                referrerPolicy="no-referrer"
                allow="clipboard-read; clipboard-write; microphone; camera"
              />
            </div>
            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="badge">Botpress</span>
            </div>
            {/* Language breakdown */}
            <div className="mt-3 space-y-2">
              <div className="text-xs">
                <div className="flex justify-between mb-1"><span className="text-gray-300">Botpress</span><span className="text-gray-400">100%</span></div>
                <div className="w-full h-2 rounded bg-[#101615] border border-gray-800 overflow-hidden">
                  <div className="h-full" style={{ width: '100%', backgroundColor: '#22c55e' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Real Estate Bot live preview card */}
          <div className="card mb-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Real Estate Bot</h3>
              <span className="badge">Live Preview</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">An AI chatbot that automates the flow of work for real estate agents.</p>
            <div className="rounded-lg overflow-hidden border border-gray-800 bg-black">
              <iframe
                src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/16/11/20250316110051-F43FAVZL.json"
                title="Real Estate Bot preview"
                width="100%"
                height="480"
                loading="lazy"
                referrerPolicy="no-referrer"
                allow="clipboard-read; clipboard-write; microphone; camera"
              />
            </div>
            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="badge">Botpress</span>
            </div>
            {/* Language breakdown */}
            <div className="mt-3 space-y-2">
              <div className="text-xs">
                <div className="flex justify-between mb-1"><span className="text-gray-300">Botpress</span><span className="text-gray-400">100%</span></div>
                <div className="w-full h-2 rounded bg-[#101615] border border-gray-800 overflow-hidden">
                  <div className="h-full" style={{ width: '100%', backgroundColor: '#22c55e' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Rocket League Bot site */}
          <div className="card mb-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold">Rocket League Bot</h3>
              <span className="badge">Live Preview</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">A website that automates the sale of bots for the game Rocket League.</p>
            <div className="rounded-lg overflow-hidden border border-gray-800 bg-black">
              <iframe
                src="https://rocket-league-bot.netlify.app"
                title="Rocket League Bot site preview"
                width="100%"
                height="480"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Language breakdown */}
            <div className="mt-3 space-y-2">
              {[
                { name: 'TypeScript', pct: 96.1, color: '#3178c6' },
                { name: 'JavaScript', pct: 2.9, color: '#eab308' },
                { name: 'HTML', pct: 1.0, color: '#f97316' },
              ].map((lang, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between mb-1"><span className="text-gray-300">{lang.name}</span><span className="text-gray-400">{lang.pct}%</span></div>
                  <div className="w-full h-2 rounded bg-[#101615] border border-gray-800 overflow-hidden">
                    <div className="h-full" style={{ width: `${lang.pct}%`, backgroundColor: lang.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <a href="https://rocket-league-bot.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block">View Live</a>
            </div>
          </div>

          {/* Zoa Real Estate project preview card */}
          <div className="card mb-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold">Zoa Real Estate</h3>
              <span className="badge">Live Preview</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">A website for a real estate agent where users can invest in properties.</p>
            <div className="rounded-lg overflow-hidden border border-gray-800 bg-black">
              <iframe
                src="https://zaorealestatesfunding.com/login"
                title="Zoa Real Estate preview"
                width="100%"
                height="480"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Screenshot under the iframe (same size) */}
            <div className="relative w-full mt-3" style={{ height: 480 }}>
              <Image
                src="/Screenshot 2025-09-04 at 1.50.30 PM.png"
                alt="Zoa Real Estate screenshot"
                fill
                className="object-cover rounded-lg border border-gray-800"
                sizes="100vw"
              />
            </div>
            {/* Language breakdown */}
            <div className="mt-3 space-y-2">
              {[
                { name: 'TypeScript', pct: 96.1, color: '#3178c6' },
                { name: 'JavaScript', pct: 2.9, color: '#eab308' },
                { name: 'HTML', pct: 1.0, color: '#f97316' },
              ].map((lang, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between mb-1"><span className="text-gray-300">{lang.name}</span><span className="text-gray-400">{lang.pct}%</span></div>
                  <div className="w-full h-2 rounded bg-[#101615] border border-gray-800 overflow-hidden">
                    <div className="h-full" style={{ width: `${lang.pct}%`, backgroundColor: lang.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <a href="https://zaorealestatesfunding.com/login" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block">View Live</a>
            </div>
          </div>

          {/* SafeTech project preview card */}
          <div className="card mb-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold">SafeTech SIS & LMS — MASTER SPEC</h3>
              <span className="badge">External Preview</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">Application for an adult learning center focused on construction safety training.</p>
            {/* Screens + View Live */}
            <div className="mt-2 flex flex-col gap-4">
              <div className="relative w-full" style={{ height: 480 }}>
                <Image src="/safetech-1.jpg" alt="SafeTech dashboard (light mode)" fill className="object-cover rounded-lg border border-gray-800" sizes="100vw" />
              </div>
              <div className="relative w-full" style={{ height: 480 }}>
                <Image src="/safetech-2.jpg" alt="SafeTech dashboard (dark mode)" fill className="object-cover rounded-lg border border-gray-800" sizes="100vw" />
              </div>
              <div>
                <a href="https://eitanchakov.com/en/accounts/login/" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block">View Live</a>
              </div>
            </div>
            {/* Language breakdown */}
            <div className="mt-4 space-y-2">
              {[
                { name: 'Python', pct: 57.5, color: '#22c55e' },
                { name: 'HTML', pct: 32.6, color: '#f97316' },
                { name: 'CSS', pct: 5.5, color: '#0ea5e9' },
                { name: 'JavaScript', pct: 2.4, color: '#eab308' },
                { name: 'Shell', pct: 1.1, color: '#a3a3a3' },
                { name: 'SCSS', pct: 0.8, color: '#ec4899' },
                { name: 'Other', pct: 0.1, color: '#64748b' },
              ].map((lang, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between mb-1"><span className="text-gray-300">{lang.name}</span><span className="text-gray-400">{lang.pct}%</span></div>
                  <div className="w-full h-2 rounded bg-[#101615] border border-gray-800 overflow-hidden">
                    <div className="h-full" style={{ width: `${lang.pct}%`, backgroundColor: lang.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trustpilot Email Scraper */}
          <div className="card mb-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold">Trustpilot Email Scraper</h3>
              <span className="badge">Live Preview</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">Automates finding company emails from Trustpilot based on search tags.</p>
            <div className="relative w-full" style={{ height: 480 }}>
              <Image
                src="/Screenshot 2025-09-04 at 2.06.04 PM.png"
                alt="Trustpilot Email Scraper screenshot"
                fill
                className="object-cover rounded-lg border border-gray-800"
                sizes="100vw"
              />
            </div>
            {/* Tech badges with simple logos */}
            <div className="mt-3 flex gap-2 flex-wrap items-center">
              <span className="badge inline-flex items-center gap-1"><span role="img" aria-label="python">🐍</span> Python</span>
              <span className="badge inline-flex items-center gap-1"><span className="text-orange-400">&lt;/&gt;</span> HTML</span>
            </div>
            {/* Language breakdown */}
            <div className="mt-3 space-y-2">
              {[
                { name: 'HTML', pct: 50.5, color: '#f97316' },
                { name: 'Python', pct: 48.8, color: '#22c55e' },
                { name: 'Other', pct: 0.7, color: '#64748b' },
              ].map((lang, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between mb-1"><span className="text-gray-300">{lang.name}</span><span className="text-gray-400">{lang.pct}%</span></div>
                  <div className="w-full h-2 rounded bg-[#101615] border border-gray-800 overflow-hidden">
                    <div className="h-full" style={{ width: `${lang.pct}%`, backgroundColor: lang.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <a href="https://trustpilotscraper-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block">View Live</a>
            </div>
          </div>

          
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="section-container">
          <h2 className="heading-xl text-center mb-8">How I Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Discover', desc: 'Goals, users, scope, KPIs.' },
              { step: '02', title: 'Design', desc: 'Wireframes to polished UI.' },
              { step: '03', title: 'Build', desc: 'Clean code, tests, CI/CD.' },
              { step: '04', title: 'Launch & Iterate', desc: 'Measure and optimize.' }
            ].map((s, i) => (
              <div key={i} className="card text-gray-200">
                <div className="text-green-400 font-bold">{s.step}</div>
                <h3 className="text-lg font-semibold mt-1 mb-1">{s.title}</h3>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-colorful">
        <div className="section-container text-center">
          <Reveal>
            <h2 className="heading-xl mb-4 gradient-text-neo">Let’s build something great.</h2>
          </Reveal>
          <Reveal className="max-w-2xl mx-auto">
            <p className="subheading">Need a production‑ready website or an AI assistant? I can help you ship fast without cutting corners.</p>
          </Reveal>
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact"><button className="btn-primary btn-shimmer">Hire Me</button></Link>
              <Link href="#work"><button className="btn-secondary border-pulse">View Projects</button></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}