import type { Metadata } from "next";
import { Orbitron, Rajdhani, Space_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GeneVeda Biosciences",
  description: "Advancing Bioscience Research, Innovation & Global Careers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${orbitron.variable} ${rajdhani.variable} ${spaceMono.variable} ${ibmPlexSans.variable} font-sans antialiased bg-dark text-white selection:bg-accent selection:text-black overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
