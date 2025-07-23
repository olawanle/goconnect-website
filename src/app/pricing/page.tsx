"use client";
import { useState } from "react";
import Script from 'next/script';

const plans = [
  {
    name: "Starter",
    price: "$499 one-time",
    ideal: "Solopreneurs & Startups",
    features: [
      "1 Custom Chatbot (Botpress/Telegram)",
      "Website Integration",
      "Basic Automation Setup",
      "30 min Strategy Session",
      "Basic AI Persona & Flow Design",
      "Email Support (48h)"
    ],
    buy: () => "starter" as const
  },
  {
    name: "Growth",
    price: "$1,499",
    ideal: "Growing Brands",
    features: [
      "Up to 3 Custom Chatbots",
      "Website Integration",
      "Advanced Automation + CRM",
      "Lead Capture & CRM Integration",
      "1 hr/month Strategy Session",
      "Basic NLP/AI Training",
      "2 Languages",
      "Backend/Database",
      "Pro AI Persona & Flow Design",
      "Standard Analytics Dashboard",
      "Priority Support (24h)"
    ],
    popular: true,
    buy: () => "growth" as const
  },
  {
    name: "Enterprise",
    price: "$4,999",
    ideal: "Agencies & Corporations",
    features: [
      "Unlimited Custom Chatbots",
      "Website Integration",
      "Full Workflow Suite",
      "Lead Capture & CRM Integration",
      "Weekly Strategy Consults",
      "Custom AI Prompts",
      "Unlimited Languages",
      "Scalable Backend/Database",
      "Tailored AI Persona & Shadow Copywriting™",
      "Custom KPI Analytics Dashboard",
      "Dedicated Manager (Slack/Telegram)"
    ],
    buy: () => "enterprise" as const
  }
];

const planWidget = {
  starter: "https://nowpayments.io/embeds/payment-widget?iid=6247819398",
  growth: "https://nowpayments.io/embeds/payment-widget?iid=6246398216",
  enterprise: "https://nowpayments.io/embeds/payment-widget?iid=5098906610"
};

export default function PricingPage() {
  const [modal, setModal] = useState(null as null | "starter" | "growth" | "enterprise");
  return (
    <section className="max-w-6xl mx-auto p-4 md:p-8 mt-8">
      <h1 className="text-4xl font-bold text-green-400 mb-6 text-center">💸 GoConnect Pricing & Plans</h1>
      <p className="text-center text-gray-300 mb-10">Built for businesses ready to scale with AI automation.</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`flex-1 bg-black/90 border-2 rounded-3xl shadow-xl flex flex-col items-center px-6 py-8 mb-4 md:mb-0 ${plan.popular ? "border-green-400 scale-105 z-10" : "border-green-900"}`}
          >
            {plan.popular && (
              <div className="mb-3 px-4 py-1 bg-green-400 text-black font-bold rounded-full text-xs uppercase tracking-wider shadow">Most Popular</div>
            )}
            <h2 className="text-2xl font-bold text-green-300 mb-2">{plan.name}</h2>
            <div className="text-3xl font-extrabold text-green-400 mb-2">{plan.price}</div>
            <div className="text-sm text-gray-400 mb-4">{plan.ideal}</div>
            <ul className="text-left text-gray-200 mb-6 space-y-2">
              {plan.features.map(f => <li key={f} className="flex items-center gap-2"><span className="text-green-400">•</span> {f}</li>)}
            </ul>
            <button
              className="bg-green-400 text-black font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-300 transition text-base mt-auto"
              onClick={() => setModal(plan.buy())}
            >
              Buy {plan.name}
            </button>
          </div>
        ))}
      </div>
      {/* Add-ons */}
      <div className="mt-14">
        <h3 className="text-2xl font-bold text-green-300 mb-2">💥 Add-Ons (A La Carte)</h3>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>🔌 WhatsApp/Instagram Bot Integration – <span className="text-green-400">$750</span></li>
          <li>🧠 Custom AI Prompt Pack – <span className="text-green-400">$299</span></li>
          <li>📊 Real-Time Dashboard (Airtable/API) – <span className="text-green-400">$499</span></li>
          <li>🌐 Multi-Site Deployment – <span className="text-green-400">$999</span></li>
          <li>🎨 Branding & UI/UX Redesign – <span className="text-green-400">From $1,200</span></li>
        </ul>
        <div className="text-xs text-gray-400 mt-2">
          <p>All bots are custom-built with secure APIs (no no-code junk)</p>
          <p>Hosting can be included or deployed to your Vercel/Cloudflare/Render account</p>
          <p>You own all code & data (self-hosted option available)</p>
        </div>
      </div>
      {/* Ultra Suite */}
      <div className="mt-10 bg-green-900/20 border border-green-700 rounded-xl p-6 text-green-200">
        <h3 className="text-xl font-bold mb-2">🎯 Want It Fully Done-For-You?</h3>
        <p className="mb-2">Ask about our <span className="font-bold text-green-400">$10K Ultra Suite</span>, which includes:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Brand AI strategy</li>
          <li>5 bots across all major platforms</li>
          <li>Complete automation system</li>
          <li>Copywriting, design, and analytics</li>
          <li>1-month live optimization support</li>
        </ul>
      </div>
      {/* Payment Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 max-w-full w-[420px] relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-green-400 text-2xl font-bold"
              onClick={() => setModal(null)}
              aria-label="Close payment modal"
            >
              &times;
            </button>
            <iframe src={planWidget[modal]} width="410" height="696" frameBorder="0" scrolling="no" style={{overflowY: 'hidden', borderRadius: '1rem'}} title={`Buy ${modal.charAt(0).toUpperCase() + modal.slice(1)} Plan Payment Widget`}></iframe>
          </div>
        </div>
      )}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>
    </section>
  );
} 