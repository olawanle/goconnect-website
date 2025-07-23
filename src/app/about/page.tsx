import AnimatedHeading from "../components/AnimatedHeading";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center">
      <AnimatedHeading className="text-4xl font-bold mb-4 text-green-400">
        About GoConnect
      </AnimatedHeading>
      <p className="text-lg mb-6 text-gray-200">
        GoConnect is dedicated to revolutionizing business automation with cutting-edge AI and chatbot solutions. Our mission is to empower companies to connect, automate, and grow with intelligent technology.
      </p>
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-green-300 mb-2">Our Team</h2>
        <p className="text-gray-300">A passionate group of AI engineers, designers, and innovators committed to delivering seamless automation experiences.</p>
      </div>
    </section>
  );
} 