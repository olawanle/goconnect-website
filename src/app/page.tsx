"use client";
import AnimatedHero from "./components/AnimatedHero";

export default function Home() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-green-950 to-green-700">
      <AnimatedHero />
    </section>
  );
}
