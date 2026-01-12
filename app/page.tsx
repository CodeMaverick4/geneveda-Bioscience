import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <header>
        <div className="logo">GENEVEDA</div>
        <nav>
          <ul>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Platform</Link></li>
            <li><Link href="#">Pipeline</Link></li>
            <li><Link href="#">Media</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Advancing Bioscience Research, Innovation & Global Careers
          </h1>
          <span className="tagline">GeneVeda Biosciences: Integrating Science, Technology & Education</span>

          <div className="glass-card" style={{ marginTop: '2rem' }}>
            <h3>We ask our cohorts:</h3>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem' }}>
              WHO LIVES LONG? <br /> WHO LIVES WELL? WHY?
            </p>
            <div className="bar-chart">
              {/* Simulating the bar chart in the screenshot */}
              <div className="bar" style={{ height: '40%' }}></div>
              <div className="bar" style={{ height: '70%' }}></div>
              <div className="bar" style={{ height: '50%' }}></div>
              <div className="bar" style={{ height: '80%' }}></div>
              <div className="bar" style={{ height: '30%' }}></div>
              <div className="bar" style={{ height: '90%' }}></div>
              <div className="bar" style={{ height: '60%' }}></div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.7rem', marginTop: '5px', opacity: 0.5 }}>
              100
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* The glowing head is defined in CSS via .glowing-head class background */}
          <div className="glowing-head"></div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <h2>Our Expertise</h2>
          <p>
            We adhere to a multidisciplinary approach, specializing in R&D, bioinformatics, NGS, diagnostics, and education to empower the life sciences community.
          </p>
        </div>

        <div className="services-grid">
          {/* R&D Services */}
          <div className="service-card">
            <div className="service-icon">🔬</div>
            <h3>R&D Services</h3>
            <p>
              Supporting innovation across molecular biology, biotechnology, aptamers, AMR, and microbiology. We assist research labs, startups, and industries in designing experiments, optimizing protocols, and generating high-quality scientific data.
            </p>
          </div>

          {/* Bioinformatics */}
          <div className="service-card">
            <div className="service-icon">🧬</div>
            <h3>Bioinformatics & Data Analysis</h3>
            <p>
              Transforming complex datasets into meaningful insights. Our expertise spans genomics, transcriptomics, proteomics, metagenomics, and molecular docking, utilizing robust pipelines to deliver publication-ready reports.
            </p>
          </div>

          {/* NGS Services */}
          <div className="service-card">
            <div className="service-icon">🧪</div>
            <h3>NGS Services</h3>
            <p>
              End-to-end sequencing support using advanced platforms. Offering whole genome/exome sequencing, RNA-Seq, amplicon sequencing (16S/18S/ITS), and variant analysis with fast turnaround and precise interpretation.
            </p>
          </div>

          {/* Training & Education */}
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>Training & Study Abroad</h3>
            <p>
              Industry-focused training in molecular biology, coding for bio, and NGS analysis. We also provide comprehensive study abroad guidance for students pursuing international education in life sciences.
            </p>
          </div>
        </div>
      </section>

      <section className="thematic">
        <h2>BioAge thematic areas of focus</h2>
        <div className="circles-container">
          <div className="circle-item">
            <div className="circle-icon">⚙️</div>
            <div className="circle-label">Immune aging</div>
          </div>
          <div className="circle-item">
            <div className="circle-icon">💪</div>
            <div className="circle-label">Muscle aging</div>
          </div>
          <div className="circle-item">
            <div className="circle-icon">🧠</div>
            <div className="circle-label">Brain aging</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="social-dock">
          {/* X (Twitter) */}
          <Link href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </Link>
          {/* Behance */}
          <Link href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c0 3.197-2.909 5-6.19 5-3.35 0-5.83-2.196-5.83-5.295 0-3.238 2.651-5.632 6.008-5.632 2.768 0 5.253 1.837 5.253 4.708 0 .476-.039.816-.089 1.157h-8.08c.224 1.838 1.637 2.706 3.18 2.706 1.488 0 2.457-.68 2.825-1.768h2.923zm-6.047-4.148h5.029c-.069-1.446-1.042-2.313-2.381-2.313-1.539.001-2.43 1.002-2.648 2.313zm-6.112-6.505C11.567 4.123 11 1 8.08 1h-6v16h6.8c2.614 0 4.29-1.551 4.29-4.223 0-2.316-1.543-3.076-2.583-3.523C12.185 8.705 13 7.643 13 6.347h-.001zm-3.692 1.904h-3.3V3.697h3.385c1.472 0 2.102.771 2.102 1.859 0 1.259-.933 2.695-2.187 2.695zm.372 6.315H5.975V10.27h3.633c1.69 0 2.508 1 2.508 2.186 0 1.292-.934 2.11-2.229 2.11z" /></svg>
          </Link>
          {/* GitHub */}
          <Link href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          </Link>
          {/* LinkedIn */}
          <Link href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </Link>
          {/* Dribbble */}
          <Link href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.837 10.603c-.265-1.229-.757-2.368-1.424-3.372-1.996 2.357-4.856 4.073-8.079 4.673.208.681.385 1.383.522 2.102 3.662-.486 7.152-1.859 8.981-3.403zm-7.669-8.498c-.287.979-.652 1.944-1.082 2.883-2.678-1.554-5.918-2.298-9.157-2.072 1.637-1.841 4.026-3.044 6.702-2.916 1.35.064 2.622.502 3.537 2.105zm-11.79 5.094c2.915-.224 5.922.373 8.355 1.674-.131.693-.298 1.378-.497 2.053-4.088 1.4-8.799 1.55-12.224.636.565-1.78 1.687-3.313 3.167-4.363zm-.685 8.799c2.479.529 5.8 0 8.879-1.077-.384 1.777-1.026 3.425-1.868 4.88-2.998-.679-5.496-2.226-7.011-3.803zm10.74 3.79c.797-1.405 1.405-2.981 1.772-4.686 2.924 1.996 4.665 4.966 4.868 5.485-1.921 1.678-4.39 2.529-6.64 2.201v-3z" /></svg>
          </Link>
          {/* Discord */}
          <Link href="#" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.42-2.157 2.42z" /></svg>
          </Link>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 GeneVeda Biosciences. All rights reserved.</div>
          <div className="footer-links-row">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
