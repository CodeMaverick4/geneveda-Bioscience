import { Metadata } from 'next';
import Hero from "./components/Hero";
import PartnersSlider from "./components/PartnersSlider";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "GeneVeda Biosciences | Advancing Research & Global Careers",
  description: "GeneVeda Biosciences offers top-tier R&D services, Bioinformatics, NGS, Diagnostics, and expert Study Abroad Guidance for aspiring scientists.",
};

import FutureTrends from "./components/FutureTrends";
import IndustriesSection from "./components/IndustriesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden">
      <Hero />
      <PartnersSlider />
      <IndustriesSection />
      <Services />
      <WhyChooseUs />
      <Process />
      <FutureTrends />
      <FAQ />
      <CTA />
    </main>
  );
}
