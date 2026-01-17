import { Metadata } from 'next';
import Hero from "./components/Hero";
import PartnersSlider from "./components/PartnersSlider";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs"; // Features Section
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Stats from "./components/Stats"; // New Component
import FutureTrends from "./components/FutureTrends";
import IndustriesSection from "./components/IndustriesSection";

export const metadata: Metadata = {
  title: "GeneVeda Biosciences | Advancing Research & Global Careers",
  description: "GeneVeda Biosciences offers top-tier R&D services, Bioinformatics, NGS, Diagnostics, and expert Study Abroad Guidance for aspiring scientists.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white selection:bg-accent selection:text-black overflow-x-hidden">
      <Hero />
      <Stats />
      <PartnersSlider />
      <WhyChooseUs /> {/* Features/About */}
      <Services />
      <IndustriesSection />
      <Process />
      {/* <FutureTrends /> */}
      <FAQ />
      <CTA />
    </main>
  );
}
