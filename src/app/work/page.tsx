"use client"

import React from "react"
import Link from "next/link"
import Reveal from "@/app/components/Reveal"

const projects = [
    {
        title: "Venna Cricket Bot",
        desc: "AI Chatbot • Automation • Cricket API",
        url: "https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/31/13/20250831130657-EX4OUU3P.json&_gl=1*wjf7de*_gcl_au*Mzc4NDMxOTM1LjE3NzAwNDQ3MDMuNzM2Nzc1NTAxLjE3NzAwNDQ3ODkuMTc3MDA0NDgxNA..*_ga*OTE0MTgxMTMuMTc3MDA0NDcwNw..*_ga_HKHSWES9V9*czE3NzAwNDQ3MDckbzEkZzEkdDE3NzAwNDQ4NDMkajIkbDAkaDExOTcyMzI1MA.."
    },
    {
        title: "Real Estate Bot",
        desc: "Botpress • Automation • Real Estate",
        url: "https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/16/11/20250316110051-F43FAVZL.json"
    },
    {
        title: "Rocket League Bot",
        desc: "TypeScript • React • Automation",
        url: "https://rocket-league-bot.netlify.app"
    },
    {
        title: "Zoa Real Estate",
        desc: "Next.js • Investment Platform",
        url: "https://zaorealestatesfunding.com/"
    },
    {
        title: "SafeTech SIS & LMS",
        desc: "Python • Django • LMS System",
        url: "https://eitanchakov.com/en/accounts/login/"
    },
    {
        title: "Trustpilot Email Scraper",
        desc: "Python • Automation • Scraper",
        url: "https://trustpilotscraper-production.up.railway.app/"
    },
    // New Projects
    {
        title: "Axerium",
        desc: "Web App • Netlify",
        url: "https://axerium1.netlify.app/"
    },
    {
        title: "Benclone",
        desc: "Web App • Netlify",
        url: "https://benclone.netlify.app/"
    },
    {
        title: "Chronos Time",
        desc: "Finance • Fund",
        url: "https://www.chronostime.fund/"
    },
    {
        title: "Freedx",
        desc: "Exchange • Trading",
        url: "https://www.freedx.com"
    },
    {
        title: "EDX Markets",
        desc: "Crypto • Exchange",
        url: "https://edxmarkets.com/"
    },
    {
        title: "Bydfi",
        desc: "Crypto • Trading Platform",
        url: "https://www.bydfi.com"
    },
    {
        title: "Archax",
        desc: "Institutional • Exchange",
        url: "https://archax.com/"
    },
    {
        title: "Hashkey Group",
        desc: "Digital Asset • Finance",
        url: "https://group.hashkey.com/en/"
    },
    {
        title: "Aevo",
        desc: "Derivatives • Exchange",
        url: "https://aevo.com/"
    },
    {
        title: "Satori Finance",
        desc: "Finance • Derivatives",
        url: "https://satori.finance/"
    }
]

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="heading-xl mb-6">
                        All <span className="gradient-text">Works</span>
                    </h1>
                    <p className="subheading max-w-2xl mx-auto">
                        A comprehensive collection of our projects, automated solutions, and web applications.
                    </p>
                </div>

                <div className="flex flex-col gap-24 w-full">
                    {projects.map((project, i) => (
                        <Reveal key={i} width="100%" className="w-full">
                            <div className="group cursor-pointer w-full">
                                {/* Project Card */}
                                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 relative mb-6 liquid-glass">
                                    {/* Iframe for Live Preview */}
                                    <div className="absolute inset-0 bg-neutral-900 group-hover:scale-[1.02] transition-transform duration-700">
                                        <iframe
                                            src={project.url}
                                            title={`${project.title} Preview`}
                                            className="w-full h-full border-0 pointer-events-none"
                                            loading="lazy"
                                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                        />
                                    </div>

                                    {/* Overlay for interaction hindrance (optional, but good for scroll) */}
                                    <div className="absolute inset-0 bg-transparent" />

                                    {/* Top Right Badge */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="badge bg-black/80 backdrop-blur border border-white/10 text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                            Live Preview
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
                                    <h2 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        {project.title}
                                    </h2>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 px-6 py-3 rounded-full hover:bg-emerald-500 hover:text-black transition-all w-fit"
                                    >
                                        View Live <span className="text-lg">↗</span>
                                    </a>
                                </div>
                                <p className="text-gray-400 text-lg">{project.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <Link href="/" className="text-gray-400 hover:text-white border-b border-gray-700 hover:border-white pb-1 transition-all">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
