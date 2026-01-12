import Link from "next/link";
import ParticleRing from "./components/ParticleRing";
import IndustriesSection from "./components/IndustriesSection";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

          {/* Left Content */}
          <div className="flex flex-col justify-center items-start space-y-8">

            {/* Play Video Trigger */}
            <button className="flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-black transition-colors group">
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 group-hover:border-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Play video
            </button>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              Develop programs <br /> in blood research
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              The UNC Blood Research Center (BRC) was established to promote interdisciplinary research in non-malignant blood disorders across UNC. It will seek to advance the work in the following specific areas.
            </p>

            {/* CTA & Sign Up */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button className="px-8 py-3 rounded-full bg-[#FF7F7F] text-white font-semibold text-sm tracking-wide shadow-lg hover:bg-[#ff6b6b] transition-colors w-full sm:w-auto">
                GET STARTED
              </button>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Or Sign Up with</span>
                <div className="flex gap-2">
                  {/* Facebook Icon */}
                  <Link href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#FF7F7F] hover:text-[#FF7F7F] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </Link>
                  {/* Google Icon */}
                  <Link href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#FF7F7F] hover:text-[#FF7F7F] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.053-1.147 8.213-3.04 2.16-1.92 2.853-4.907 2.853-7.227 0-.587-.053-1.28-.16-1.813h-10.907z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden lg:block w-full h-full relative">
            <ParticleRing />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <IndustriesSection />
    </div>
  );
}
