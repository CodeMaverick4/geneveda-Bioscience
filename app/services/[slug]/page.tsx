import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedButton from "../../components/AnimatedButton";
import ScrollReveal from "../../components/ScrollReveal";
import {
    FlaskConical,
    Dna,
    Microscope,
    Activity,
    Zap,
    BookOpen,
    UserCheck,
    ArrowRight
} from "lucide-react";

// Data content for each service page
const servicesData: any = {
    "rd": {
        title: "R&D Services",
        subtitle: "Innovation Driven Research & Development",
        intro: "We provide end-to-end R&D support for biotechnology startups, academic labs, and industrial partners. From experimental design to protocol optimization and data validation, we ensure scientific rigor.",
        features: [
            "Experimental Design & Optimization",
            "Custom Assay Development",
            "Protocol Validation",
            "Scientific Consultation"
        ],
        icon: FlaskConical
    },
    "bioinformatics": {
        title: "Bioinformatics Analysis",
        subtitle: "Turning Data into Discoveries",
        intro: "Our expert bioinformaticians analyze complex biological data to provide actionable insights. We specialize in genomics, transcriptomics, proteomics, and structural biology.",
        features: [
            "Genomic Data Analysis",
            "Transcriptomics & Proteomics",
            "Molecular Docking & Dynamics",
            "Custom Pipeline Development"
        ],
        icon: BookOpen
    },
    "ngs": {
        title: "Next Generation Sequencing",
        subtitle: "High-Throughput Genomic Insights",
        intro: "Unlock the power of the genome with our comprehensive NGS services. We offer Whole Genome Sequencing (WGS), RNA-Seq, ChIP-Seq, and metagenomics analysis.",
        features: [
            "Whole Genome Sequencing",
            "RNA Sequencing (RNA-Seq)",
            "Metagenomics Analysis",
            "Variant Calling & Annotation"
        ],
        icon: Dna
    },
    "diagnostics": {
        title: "Diagnostics Development",
        subtitle: "Precision Diagnostics for Better Health",
        intro: "We assist in the development and validation of molecular diagnostic assays. our focus is on creating rapid, accurate, and cost-effective diagnostic solutions.",
        features: [
            "Molecular Assay Design",
            "Biomarker Discovery",
            "Kit Validation Services",
            "Sensitivity & Specificity Testing"
        ],
        icon: Activity
    },
    "aptamers": {
        title: "Aptamer Research",
        subtitle: "Synthetic Antibodies for the Future",
        intro: "We specialize in the selection and characterization of aptamers for therapeutic and diagnostic applications using SELEX technology.",
        features: [
            "Custom Aptamer Selection (SELEX)",
            "Aptamer Characterization",
            "Binding Affinity Studies",
            "Therapeutic Application Research"
        ],
        icon: Microscope
    },
    "amr": {
        title: "Antimicrobial Resistance (AMR)",
        subtitle: "Combating Drug Resistance",
        intro: "Our research focuses on understanding mechanisms of antimicrobial resistance and developing novel strategies to combat drug-resistant pathogens.",
        features: [
            "Resistance Gene Profiling",
            "Mechanism of Action Studies",
            "Novel Antimicrobial Screening",
            "Surveillance Studies"
        ],
        icon: Zap
    },
    "study-abroad": {
        title: "Study Abroad Guidance",
        subtitle: "Your Gateway to Global Opportunities",
        intro: "We mentor students and professionals to secure admissions and research positions in top global universities. Expert guidance for Biotechnology and Life Sciences careers.",
        features: [
            "Profile Evaluation & Counseling",
            "University & Lab Selection",
            "SOP & LOR Assistance",
            "Scholarship Guidance"
        ],
        icon: UserCheck
    }
};

export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const data = servicesData[params.slug];

    if (!data) {
        return notFound();
    }

    const Icon = data.icon;

    return (
        <main className="bg-white text-black min-h-screen pt-20">

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <div className="w-16 h-16 bg-[#ffeb0f] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                            <Icon className="w-8 h-8 text-[#7c1d85]" />
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-[#7c1d85] mb-6 leading-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl text-[#7c1d85] font-medium mb-4">
                            {data.subtitle}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
                            {data.intro}
                        </p>
                        <AnimatedButton href="/contact">
                            Start a Project
                        </AnimatedButton>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="relative h-[400px] w-full rounded-[3rem] bg-white border border-gray-200 shadow-xl overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#7c1d85]/5" />
                        <Icon className="w-32 h-32 text-[#7c1d85]/20" />
                    </ScrollReveal>
                </div>
            </section>

            {/* Features / Details */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <ScrollReveal width="100%" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Offerings</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.features.map((feature: string, index: number) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-[#ffeb0f] transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#fdfcec] flex items-center justify-center group-hover:bg-[#ffeb0f] transition-colors">
                                        <ArrowRight className="w-5 h-5 text-[#7c1d85]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{feature}</h3>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 bg-[#7c1d85] text-white my-12 mx-6 rounded-[3rem] text-center relative overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Advance Your Research?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Connect with our experts today to discuss your specific requirements and how we can support your goals.
                    </p>
                    <AnimatedButton href="/contact" variant="outline" className="!bg-white !text-[#7c1d85] !border-white hover:!bg-[#ffeb0f] hover:!text-[#7c1d85] hover:!border-[#ffeb0f]">
                        Book a Free Consultation
                    </AnimatedButton>
                </div>

                {/* Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffeb0f] opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffeb0f] opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </section>

        </main>
    );
}
