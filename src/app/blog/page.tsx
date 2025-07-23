"use client";

export default function BlogPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">Blog</h1>
      <div className="flex flex-col gap-8 mt-8">
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-green-900 text-left">
          <h2 className="text-2xl font-bold text-green-300 mb-2">How AI Chatbots Are Transforming Customer Service</h2>
          <div className="text-xs text-gray-400 mb-2">2024-06-01</div>
          <p className="text-gray-200 mb-4">Discover how next-gen AI chatbots are helping businesses automate support, boost satisfaction, and save costs.</p>
          <a href="/blog/ai-chatbots-customer-service" className="text-green-400 underline font-semibold">Read More</a>
        </div>
      </div>
    </section>
  );
} 