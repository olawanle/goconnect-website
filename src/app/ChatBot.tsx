"use client";
import { useState } from "react";
import Link from "next/link";

const responses: Record<string, JSX.Element> = {
  "contact": <span>Our <Link href="/contact" className="text-green-400 underline">Contact page</Link> is here!</span>,
  "services": <span>See our <Link href="/services" className="text-green-400 underline">Services</Link> here.</span>,
  "about": <span>Learn more <Link href="/about" className="text-green-400 underline">About us</Link>.</span>,
  "how": <span>See <Link href="/how-it-works" className="text-green-400 underline">How it works</Link>.</span>,
  "home": <span>Go to the <Link href="/" className="text-green-400 underline">Home page</Link>.</span>,
  "default": <span>I can help you find pages! Try: contact, services, about, how it works, home.</span>
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<JSX.Element[]>([<span key="init">Hi! How can I help you navigate GoConnect?</span>]);

  const handleSend = () => {
    if (!input.trim()) return;
    const lower = input.toLowerCase();
    let response = responses.default;
    if (lower.includes("contact")) response = responses.contact;
    else if (lower.includes("service")) response = responses.services;
    else if (lower.includes("about")) response = responses.about;
    else if (lower.includes("how")) response = responses.how;
    else if (lower.includes("home")) response = responses.home;
    setMessages(msgs => [...msgs, <span key={msgs.length}><b>You:</b> {input}</span>, <span key={msgs.length+1}>{response}</span>]);
    setInput("");
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-400 text-black shadow-lg hover:bg-green-300 transition"
        aria-label="Open navigation assistant bot"
        onClick={() => setOpen(o => !o)}
      >
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] bg-black bg-opacity-95 border border-green-400 rounded-xl shadow-2xl z-50 flex flex-col">
          <div className="p-4 border-b border-green-400 flex items-center justify-between">
            <span className="font-bold text-green-400">GoConnect Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close bot" className="text-gray-400 hover:text-green-400">✕</button>
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto max-h-60 text-sm">
            {messages.map((msg, i) => <div key={i}>{msg}</div>)}
          </div>
          <div className="p-2 border-t border-green-400 flex gap-2">
            <input
              className="flex-1 rounded-lg px-3 py-2 bg-gray-900 text-white border border-green-400 focus:outline-none"
              placeholder="Ask me about the site..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              aria-label="Ask the bot"
            />
            <button
              onClick={handleSend}
              className="bg-green-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-green-300 transition"
              aria-label="Send message"
            >Send</button>
          </div>
        </div>
      )}
    </>
  );
} 