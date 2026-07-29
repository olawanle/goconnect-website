export const LOGO_PATH = "/logo.png"

export const WHATSAPP_NUMBER = "13652760910"
export const WHATSAPP_DISPLAY = "+1 365 276 0910"
export const WHATSAPP_BASE_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
export const TELEGRAM_LINK = "https://t.me/goconnectdev"

export const availabilityText = "Taking 2 new builds this quarter"

export const navLinks = [
  { label: "Scope", href: "#build" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const

export const hero = {
  eyebrow: "Four specialists · No middlemen",
  title: "We build the thing you were told would take a year.",
  sub: "Custom SaaS platforms, trading bots, AI chatbots and scraping pipelines — engineered by the four people who actually write the code. Thirty-plus builds shipped to production, most of them inside a quarter.",
  primaryCta: { label: "Scope your build →", href: "#build" },
  secondaryCta: { label: "See 16 shipped projects", href: "#work" },
} as const

export const terminalLines = [
  { gutter: "$", text: "goconnect scope --client you", tone: "cmd" },
  { gutter: "✓", text: "first reply ...... under 24h", tone: "ok" },
  { gutter: "✓", text: "scope call ....... 1 session", tone: "ok" },
  { gutter: "✓", text: "staging url ...... day 5", tone: "ok" },
  { gutter: "✓", text: "weekly build ..... every friday", tone: "ok" },
  { gutter: "→", text: "handover ......... repo is yours", tone: "warn" },
] as const

export const stats: Array<{ key: string; to: number; prefix?: string; suffix: string; label: string }> = [
  { key: "projects", to: 30, suffix: "+", label: "Projects shipped to production, from chatbots to exchange platforms" },
  { key: "people", to: 4, suffix: "", label: "Specialists — the entire company, and the entire delivery team" },
  { key: "reply", to: 24, prefix: "<", suffix: "h", label: "Typical first reply, direct from an engineer" },
  { key: "pm", to: 0, suffix: "", label: "Account managers between you and the build" },
]

export const marquee = [
  "React", "Next.js", "Node.js", "Python", "Django", "Botpress", "Claude API", "OpenAI",
  "LangChain", "RAG", "Selenium", "Playwright", "Trading bots", "ETL", "PostgreSQL",
  "Meta Ads", "Technical SEO", "React Native",
] as const

export type BuildKind = "saas" | "bot" | "ai" | "data" | "growth"

export const KINDS: Record<BuildKind, { label: string; title: string; stack?: string; lines: string[] }> = {
  saas: {
    label: "Custom SaaS / web app",
    title: "Custom SaaS platform",
    stack: "React or Next.js front end, Python or Node API, Postgres, deployed on your cloud",
    lines: [
      "Architecture + data model agreed in week one",
      "Auth, billing and admin scaffolded, not bolted on later",
      "Staging URL from day five — you watch it get built",
    ],
  },
  bot: {
    label: "Trading bot / automation",
    title: "Trading + automation system",
    stack: "Python, exchange APIs, backtesting harness, monitored 24/7",
    lines: [
      "Strategy encoded and backtested before a cent is live",
      "Risk limits, kill switch and alerting built in",
      "Paper-trading window before capital goes near it",
    ],
  },
  ai: {
    label: "AI chatbot / Claude integration",
    title: "AI chatbot + Claude integration",
    lines: [
      "Retrieval over your real content, not a generic prompt",
      "Guardrails and fallback to a human path",
      "Evaluation set so quality is measured, not vibed",
    ],
  },
  data: {
    label: "Scraping / data pipeline",
    title: "Scraping + data pipeline",
    lines: [
      "Resilient collectors with rotation and retry logic",
      "Clean, deduplicated output into your warehouse",
      "Scheduled runs with failure alerting",
    ],
  },
  growth: {
    label: "Growth / funnel + SEO",
    title: "Growth funnel + SEO engine",
    lines: [
      "Technical SEO, schema and page-speed pass",
      "Funnel rebuilt around one measurable action",
      "Paid media tested small before it scales",
    ],
  },
}

export type BuildScope = "mvp" | "full" | "ongoing"

export const SCOPES: Record<BuildScope, { label: string; weeks: [number, number] | null; line: string }> = {
  mvp: { label: "MVP — prove it works", weeks: [3, 5], line: "Scoped to the smallest thing that can earn or prove value" },
  full: { label: "Full product build", weeks: [8, 14], line: "Full build: production hardening, docs and handover included" },
  ongoing: { label: "Ongoing build + maintain", weeks: null, line: "Retained team, weekly shipping cadence, monthly rolling" },
}

export type BuildUrgency = "asap" | "quarter" | "planning"

export const URGENCY: Record<BuildUrgency, { label: string; note: string }> = {
  asap: { label: "Yesterday", note: "priority slot — we shuffle for this" },
  quarter: { label: "This quarter", note: "standard slot" },
  planning: { label: "Still planning", note: "we'll pressure-test the spec with you first" },
}

export const servicesSection = {
  label: "02 / Services",
  title: "Four disciplines. One team.",
  sub: "Tap a discipline — everything below is delivered by a named specialist inside GoConnect, not subcontracted, not templated.",
} as const

export const services = [
  {
    number: "01",
    name: "SaaS & full-stack",
    sub: "Web · Mobile · API · Deployment",
    desc: "Custom SaaS platforms, web apps, mobile apps and chatbot front ends — architected, built and deployed by two dedicated engineers.",
    points: [
      "Database to production with no handoff gaps",
      "Auth, billing and admin scaffolded from the start",
      "Architecture that survives its second year",
    ],
    tags: ["React", "Next.js", "Node.js", "Python", "Django", "PostgreSQL"],
  },
  {
    number: "02",
    name: "Trading bots & automation",
    sub: "Scraping · Pipelines · Execution",
    desc: "Large-scale web scraping, algorithmic trading bots, workflow automation and ETL pipelines — systems that earn while you sleep.",
    points: [
      "Battle-tested collectors with rotation and retry",
      "Risk limits, kill switches and alerting built in",
      "Backtest and paper-trade before capital moves",
    ],
    tags: ["Selenium", "Playwright", "Trading bots", "ETL", "Railway"],
  },
  {
    number: "03",
    name: "AI chatbots & Claude API",
    sub: "LLMs · Agents · Retrieval",
    desc: "Intelligence embedded into products people already use: Botpress chatbots, autonomous agents, Claude and OpenAI integrations.",
    points: [
      "Retrieval over your own content, not a generic prompt",
      "Guardrails and a clean fallback to a human",
      "Evaluation sets so quality is measured, not vibed",
    ],
    tags: ["Claude API", "OpenAI", "LangChain", "RAG", "Botpress"],
  },
  {
    number: "04",
    name: "Growth, funnels & SEO",
    sub: "Funnels · Ads · Technical SEO",
    desc: "The engine that sells everything above — technical SEO, funnel design and paid media that compounds instead of leaking.",
    points: [
      "Technical SEO, schema and page-speed pass",
      "Funnel rebuilt around one measurable action",
      "Paid media tested small before it scales",
    ],
    tags: ["Meta Ads", "Technical SEO", "Funnels", "Analytics"],
  },
] as const

export type ProjectCategory = "Chatbot" | "Web App" | "Platform" | "SaaS" | "Trading" | "Automation" | "Finance"

export const workSection = {
  label: "03 / Selected work",
  title: "Sixteen things that are live.",
} as const

export const filterDefs: Array<"all" | ProjectCategory> = [
  "all", "Chatbot", "Web App", "Platform", "SaaS", "Trading", "Automation", "Finance",
]

export const projects: Array<{ title: string; desc: string; tag: ProjectCategory; url: string }> = [
  { title: "Venna Cricket Bot", desc: "AI chatbot · Cricket API · Botpress", tag: "Chatbot", url: "https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/31/13/20250831130657-EX4OUU3P.json" },
  { title: "Real Estate Bot", desc: "Botpress · Automation · Real estate", tag: "Chatbot", url: "https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/16/11/20250316110051-F43FAVZL.json" },
  { title: "Rocket League Bot", desc: "TypeScript · React · Automation", tag: "Web App", url: "https://rocket-league-bot.netlify.app" },
  { title: "Zoa Real Estate", desc: "Next.js · Investment platform", tag: "Platform", url: "https://zaorealestatesfunding.com/" },
  { title: "SafeTech SIS & LMS", desc: "Python · Django · LMS", tag: "SaaS", url: "https://eitanchakov.com/en/accounts/login/" },
  { title: "Trustpilot Scraper", desc: "Python · Scraping · Pipeline", tag: "Automation", url: "https://trustpilotscraper-production.up.railway.app/" },
  { title: "Axerium", desc: "Web app · Netlify", tag: "Web App", url: "https://axerium1.netlify.app/" },
  { title: "Benclone", desc: "Web app · Netlify", tag: "Web App", url: "https://benclone.netlify.app/" },
  { title: "Chronos Time", desc: "Finance · Fund", tag: "Finance", url: "https://www.chronostime.fund/" },
  { title: "Freedx", desc: "Exchange · Trading", tag: "Trading", url: "https://www.freedx.com" },
  { title: "EDX Markets", desc: "Crypto · Exchange", tag: "Trading", url: "https://edxmarkets.com/" },
  { title: "Bydfi", desc: "Crypto · Trading platform", tag: "Trading", url: "https://www.bydfi.com" },
  { title: "Archax", desc: "Institutional · Exchange", tag: "Finance", url: "https://archax.com/" },
  { title: "Hashkey Group", desc: "Digital asset · Finance", tag: "Finance", url: "https://group.hashkey.com/en/" },
  { title: "Aevo", desc: "Derivatives · Exchange", tag: "Trading", url: "https://aevo.com/" },
  { title: "Satori Finance", desc: "Finance · Derivatives", tag: "Finance", url: "https://satori.finance/" },
]

export const processSection = {
  label: "04 / How it runs",
  title: "You message a person. Then it gets built.",
} as const

export const process = [
  { step: "STEP 01", title: "You message", body: "WhatsApp or Telegram, with the build sheet above or just a paragraph. An engineer replies — usually the same day.", when: "Day zero" },
  { step: "STEP 02", title: "We scope it hard", body: "One call to pressure-test the idea, cut what does not earn, and agree the smallest version worth shipping.", when: "Days 1–3" },
  { step: "STEP 03", title: "It gets built in the open", body: "A staging URL in week one and a new build every week. You watch it happen instead of waiting for a reveal.", when: "Weeks 1–n" },
  { step: "STEP 04", title: "You own it", body: "Production deploy, repository in your organisation, access handed over. Retain us after, or don't.", when: "Handover" },
] as const

export const teamSection = {
  label: "05 / The roster",
  title: "Four seats. No bench.",
  body1: "We list the seat, not the headshot — on purpose. Agencies sell you a senior in the pitch and staff a junior on the work. Here there is nobody else to staff: the four people below are the four people who build.",
  body2: "Names, CVs and GitHub histories go on the table the moment we're talking about your project. Ask.",
} as const

export const team = [
  { seat: "01", role: "Full-stack · seat one", name: "Web, mobile & chatbot", bio: "Takes web and mobile applications from zero to production. Botpress specialist with a sharp eye for UX and architecture that survives its second year.", skills: ["React", "Next.js", "React Native", "Botpress"] },
  { seat: "02", role: "Full-stack · seat two", name: "SaaS, APIs & systems", bio: "Builds the backends other people are scared of: scalable SaaS platforms, deep API integration, complex systems made to feel simple.", skills: ["Python", "Django", "REST APIs", "PostgreSQL"] },
  { seat: "03", role: "Data · seat three", name: "Scraping, bots & pipelines", bio: "Makes machines work around the clock. Trading algorithms, mass data extraction, monitored pipelines — if it can be automated, it will be.", skills: ["Selenium", "Playwright", "Python", "ETL"] },
  { seat: "04", role: "Growth · seat four", name: "Funnels, ads & SEO", bio: "Turns finished products into revenue. Funnel strategy, paid media and conversion obsession — the reason the engineering gets seen.", skills: ["Meta Ads", "SEO", "Funnels", "Analytics"] },
] as const

export const faqSection = {
  label: "06 / Questions",
  title: "The things people ask before they message.",
} as const

export const faqs = [
  { q: "How much does a trading bot cost to build?", a: "It depends on venue count, strategy complexity and how much risk tooling you need. A single-exchange bot with a backtesting harness is typically a three-to-five week build; multi-venue systems with live risk management run longer. Send us the strategy and you get a real number, not a bracket." },
  { q: "How fast can you ship an MVP?", a: "Three to four weeks to a production-deployed MVP. You get a staging URL inside the first week and a new build every week after that, so you are never waiting on a reveal." },
  { q: "Do I talk to the developer or an account manager?", a: "The developer. There are four of us and no sales layer — the person answering your WhatsApp is the person writing the code." },
  { q: "Can you integrate Claude or OpenAI into an existing product?", a: "Yes. We add retrieval pipelines, agents and chatbot layers on top of codebases we did not write, including Claude API and OpenAI, with evaluation sets and guardrails so quality is measured rather than assumed." },
  { q: "Do you work with crypto exchanges and trading firms?", a: "A large share of our shipped work is exchange, derivatives and digital-asset platforms — Freedx, Aevo, Archax, EDX Markets, Bydfi, HashKey and Satori among them." },
  { q: "Who owns the code?", a: "You do, from the first commit. Repositories live in your organisation and deployment access is handed over at the end of every engagement." },
] as const

export const contactSection = {
  label: "07 / Start",
  title: "Send one message. Get a real answer today.",
  sub: "No forms, no discovery-call funnel. Tell us what you're building and you'll hear back from the engineer who'd build it — usually within a few hours.",
} as const

export const contactLinks = [
  { label: "WhatsApp", value: WHATSAPP_DISPLAY, href: WHATSAPP_BASE_LINK },
  { label: "Telegram", value: "@goconnectdev", href: TELEGRAM_LINK },
  { label: "X / Twitter", value: "@goconnect234", href: "https://x.com/goconnect234" },
  { label: "LinkedIn", value: "Adegboyega Akorede", href: "https://www.linkedin.com/in/adegboyega-akorede-276314383" },
  { label: "Email", value: "info@goconnect.space", href: "mailto:info@goconnect.space" },
] as const

export const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "info@goconnect.space", href: "mailto:info@goconnect.space" },
] as const

export const footerCopyright = "© 2026 GoConnect Agency"
