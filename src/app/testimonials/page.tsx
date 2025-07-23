const testimonials = [
  {
    name: "Jane Doe, CEO of Acme Corp",
    text: "GoConnect's AI automation has revolutionized our customer support. Our response time is faster and our customers are happier than ever!"
  },
  {
    name: "John Smith, Founder of StartupX",
    text: "The chatbot solution from GoConnect saved us countless hours and helped us scale our business without hiring more staff."
  }
];

export default function TestimonialsPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">Testimonials</h1>
      <div className="flex flex-col gap-8 mt-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-900 rounded-xl p-6 shadow-lg border border-green-900 text-left">
            <p className="text-lg text-gray-200 mb-4">“{t.text}”</p>
            <div className="text-green-300 font-semibold">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 