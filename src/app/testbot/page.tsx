"use client";
import { useEffect } from "react";

export default function TestBotPage() {
  useEffect(() => {
    // Inject Botpress chat bubble scripts for Real Estate Bot
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/03/16/11/20250316110051-R1VU8FTI.js";
    script2.async = true;
    document.body.appendChild(script2);
    // Center the chat bubble
    const style = document.createElement("style");
    style.innerHTML = `
      .bp-widget-button {
        left: 50% !important;
        right: auto !important;
        top: 50% !important;
        bottom: auto !important;
        transform: translate(-50%, -50%) !important;
        z-index: 9999 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.head.removeChild(style);
      document.querySelectorAll('.bp-widget-button').forEach(el => el.remove());
    };
  }, []);

  return (
    <section className="max-w-2xl mx-auto p-8 flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-3xl font-bold text-green-400 mb-6 text-center">🏠 Real Estate Bot Chat Bubble Demo</h1>
    </section>
  );
} 