const faqs = [
  {
    q: "What is GoConnect?",
    a: "GoConnect is an AI automation platform that helps businesses deploy chatbots, automate workflows, and scale customer engagement."
  },
  {
    q: "Can I integrate GoConnect with my website?",
    a: "Yes! All plans include website integration for seamless chatbot and automation deployment."
  },
  {
    q: "Do I own my data and bots?",
    a: "Absolutely. You own all code and data, and self-hosting is available."
  }
];

export default function FAQPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">Frequently Asked Questions</h1>
      <div className="mt-8 text-left space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-gray-900 rounded-xl p-6 shadow border border-green-900">
            <h2 className="text-lg font-bold text-green-300 mb-2">{faq.q}</h2>
            <p className="text-gray-200">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 