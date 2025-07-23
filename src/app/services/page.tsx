"use client";

const services = [
  {
    title: "AI Automation",
    description: "Streamline your business processes with intelligent automation tailored to your needs.",
  },
  {
    title: "Chatbot Solutions",
    description: "Engage customers 24/7 with advanced, conversational AI chatbots for every platform.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-green-400 text-center">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-gray-900 rounded-xl p-6 shadow-lg border border-green-900"
            >
              <h2 className="text-2xl font-semibold text-green-300 mb-2">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
} 