export const LOGO_PATH = "/goconnect-logo.jpg"

export const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Work", href: "#work" },
  { label: "Get Started", href: "#contact", cta: true },
] as const

export const mobileNavLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const

export const hero = {
  badge: "4-Person Specialist Agency",
  line1: "Your All-In-One",
  line2: "Tech & Growth Dept.",
  sub: "We turn complex ideas into automated, revenue-generating realities. Deep technical architecture meets aggressive marketing — delivered by specialists, not generalists.",
  primaryCta: { label: "Start A Project", href: "#contact" },
  secondaryCta: { label: "View Our Work →", href: "#work" },
  scrollLabel: "Scroll",
} as const

export const about = {
  label: "About GoConnect",
  title: "Not a typical agency.",
  accent: "A weapon.",
  body: "GoConnect is a specialized 4-person strike team combining deep technical architecture with aggressive marketing. No account managers, no middlemen — you get direct access to the specialist building your product.",
  stats: [
    { value: "4", label: "Specialists" },
    { value: "30+", label: "Projects Shipped" },
    { value: "100%", label: "Remote & Fast" },
    { value: "∞", label: "Ambition" },
  ],
  capabilities: [
    "Custom SaaS platforms built from zero to production-ready",
    "Complex trading bots & intelligent automation systems",
    "Large-scale web scraping & data pipeline architecture",
    "Full marketing funnels that actually convert & retain",
    "AI chatbots & Claude API integrations for any workflow",
    "Web & mobile apps deployed to production fast",
  ],
} as const

export const servicesSection = {
  label: "What We Do",
  title: "Four disciplines.",
  accent: "One team.",
} as const

export const services = [
  {
    number: "// 01",
    sub: "Web · Mobile · Bot",
    name: "Full-Stack Development",
    desc: "Custom SaaS platforms, web apps, mobile apps, and chatbot solutions. Two dedicated engineers who ship fast and ship right — from database to deployment.",
    tags: ["React", "Next.js", "Node.js", "Python", "Botpress"],
  },
  {
    number: "// 02",
    sub: "Scraping · Pipelines · Bots",
    name: "Data & Automation",
    desc: "Large-scale web scraping, trading bots, workflow automation, and data pipelines. We make your systems earn while you sleep — reliable, fast, and battle-tested.",
    tags: ["Selenium", "Playwright", "Trading Bots", "ETL"],
  },
  {
    number: "// 03",
    sub: "Funnels · Growth · Ads",
    name: "Digital Marketing",
    desc: "Aggressive growth marketing: funnel design, paid ads, SEO, and conversion optimization. The engine that sells your product — data-driven, results-obsessed.",
    tags: ["Meta Ads", "SEO", "Funnels", "Analytics"],
  },
  {
    number: "// 04",
    sub: "LLMs · Agents · Claude API",
    name: "AI Integration",
    desc: "Embed intelligence into your products. AI chatbots, autonomous agents, Claude API integrations, and custom AI workflows that actually solve real business problems.",
    tags: ["Claude API", "OpenAI", "LangChain", "RAG"],
  },
] as const

export const teamSection = {
  label: "The Roster",
  title: "Small team.",
  accent: "Massive output.",
  sub: "No account managers. No middlemen. You get direct access to the specialist who builds your thing.",
} as const

export const team = [
  {
    role: "Full-Stack Dev I",
    name: "Web · Mobile · Chatbot",
    bio: "Architects web and mobile applications from zero to production. Botpress chatbot specialist with a sharp eye for UX and scalable architecture.",
    skills: ["React", "Next.js", "React Native", "Botpress"],
  },
  {
    role: "Full-Stack Dev II",
    name: "SaaS · APIs · Systems",
    bio: "Builds scalable backend systems and SaaS platforms with deep API integration expertise. Makes complex systems feel simple and reliable.",
    skills: ["Python", "Django", "REST APIs", "PostgreSQL"],
  },
  {
    role: "Data Specialist",
    name: "Scraping · Bots · Pipelines",
    bio: "Makes machines work around the clock. From trading algorithms to mass data extraction — if it can be automated, it will be automated.",
    skills: ["Selenium", "Playwright", "Python", "ETL"],
  },
  {
    role: "Marketing Expert",
    name: "Funnels · Ads · Growth",
    bio: "Turns great products into revenue. Funnel strategy, paid media, and conversion obsession — the engine that sells everything else we build.",
    skills: ["Meta Ads", "SEO", "Funnels", "Analytics"],
  },
] as const

export type ProjectCategory =
  | "Chatbot"
  | "Web App"
  | "Platform"
  | "SaaS"
  | "Trading"
  | "Automation"
  | "Finance"

export const projectFilters = [
  { value: "all", label: "All" },
  { value: "Chatbot", label: "Chatbot" },
  { value: "Web App", label: "Web App" },
  { value: "Platform", label: "Platform" },
  { value: "SaaS", label: "SaaS" },
  { value: "Trading", label: "Trading" },
  { value: "Automation", label: "Automation" },
  { value: "Finance", label: "Finance" },
] as const

export const workSection = {
  label: "Selected Work",
  title: "What we've",
  accent: "shipped.",
} as const

export const projects: Array<{
  title: string
  desc: string
  tag: ProjectCategory
  url: string
}> = [
  {
    title: "Venna Cricket Bot",
    desc: "AI Chatbot · Automation · Cricket API",
    tag: "Chatbot",
    url: "https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/31/13/20250831130657-EX4OUU3P.json",
  },
  {
    title: "Real Estate Bot",
    desc: "Botpress · Automation · Real Estate",
    tag: "Chatbot",
    url: "https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/16/11/20250316110051-F43FAVZL.json",
  },
  {
    title: "Rocket League Bot",
    desc: "TypeScript · React · Automation",
    tag: "Web App",
    url: "https://rocket-league-bot.netlify.app",
  },
  {
    title: "Zoa Real Estate",
    desc: "Next.js · Investment Platform",
    tag: "Platform",
    url: "https://zaorealestatesfunding.com/",
  },
  {
    title: "SafeTech SIS & LMS",
    desc: "Python · Django · LMS System",
    tag: "SaaS",
    url: "https://eitanchakov.com/en/accounts/login/",
  },
  {
    title: "Trustpilot Scraper",
    desc: "Python · Automation · Scraper",
    tag: "Automation",
    url: "https://trustpilotscraper-production.up.railway.app/",
  },
  {
    title: "Axerium",
    desc: "Web App · Netlify",
    tag: "Web App",
    url: "https://axerium1.netlify.app/",
  },
  {
    title: "Benclone",
    desc: "Web App · Netlify",
    tag: "Web App",
    url: "https://benclone.netlify.app/",
  },
  {
    title: "Chronos Time",
    desc: "Finance · Fund",
    tag: "Finance",
    url: "https://www.chronostime.fund/",
  },
  {
    title: "Freedx",
    desc: "Exchange · Trading",
    tag: "Trading",
    url: "https://www.freedx.com",
  },
  {
    title: "EDX Markets",
    desc: "Crypto · Exchange",
    tag: "Trading",
    url: "https://edxmarkets.com/",
  },
  {
    title: "Bydfi",
    desc: "Crypto · Trading Platform",
    tag: "Trading",
    url: "https://www.bydfi.com",
  },
  {
    title: "Archax",
    desc: "Institutional · Exchange",
    tag: "Finance",
    url: "https://archax.com/",
  },
  {
    title: "Hashkey Group",
    desc: "Digital Asset · Finance",
    tag: "Finance",
    url: "https://group.hashkey.com/en/",
  },
  {
    title: "Aevo",
    desc: "Derivatives · Exchange",
    tag: "Trading",
    url: "https://aevo.com/",
  },
  {
    title: "Satori Finance",
    desc: "Finance · Derivatives",
    tag: "Finance",
    url: "https://satori.finance/",
  },
]

export const contact = {
  label: "Let's Build",
  title: "Ready to launch",
  accent: "something great?",
  sub: "Message us today. We respond within 24 hours and move fast. Whether it's a quick chatbot or a full SaaS — we're ready.",
  links: [
    {
      label: "WhatsApp",
      value: "+1 (365) 276-0910",
      href: "https://wa.me/13652760910",
    },
    {
      label: "Telegram",
      value: "@goconnectdev",
      href: "https://t.me/goconnectdev",
    },
    {
      label: "X / Twitter",
      value: "@goconnect234",
      href: "https://x.com/goconnect234",
    },
    {
      label: "LinkedIn",
      value: "Adegboyega Akorede",
      href: "https://www.linkedin.com/in/adegboyega-akorede-276314383",
    },
    {
      label: "Email",
      value: "info@goconnect.space",
      href: "mailto:info@goconnect.space",
    },
  ],
} as const

export const footer = {
  copyright: "© 2026 GOCONNECT AGENCY · BUILT TO CONVERT",
  links: [
    { label: "Work", href: "#work" },
    { label: "Telegram", href: "https://t.me/goconnectdev" },
    { label: "Twitter", href: "https://x.com/goconnect234" },
  ],
} as const

export const loader = {
  text: "INITIALIZING GOCONNECT_",
} as const
