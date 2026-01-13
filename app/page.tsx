import { Metadata } from 'next';
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "GeneVeda Biosciences | Advancing Research & Global Careers",
  description: "GeneVeda Biosciences offers top-tier R&D services, Bioinformatics, NGS, Diagnostics, and expert Study Abroad Guidance for aspiring scientists.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-[#ffeb0f] selection:text-black overflow-x-hidden">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}
