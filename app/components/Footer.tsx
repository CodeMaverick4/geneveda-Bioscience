import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div>
                        <Link href="/" className="text-3xl font-bold tracking-tight mb-6 block text-[#ffeb0f]">
                            GeneVeda
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed font-medium">
                            Empowering bioscience research and careers through innovation, expertise, and global opportunities.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={Linkedin} />
                            <SocialLink href="#" icon={Twitter} />
                            <SocialLink href="#" icon={Facebook} />
                            <SocialLink href="#" icon={Instagram} />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#ffeb0f]">Services</h4>
                        <ul className="space-y-4 text-gray-300 font-medium">
                            <li><Link href="#" className="hover:text-[#ffeb0f] transition-colors">R&D Services</Link></li>
                            <li><Link href="#" className="hover:text-[#ffeb0f] transition-colors">Bioinformatics</Link></li>
                            <li><Link href="#" className="hover:text-[#ffeb0f] transition-colors">NGS Analysis</Link></li>
                            <li><Link href="#" className="hover:text-[#ffeb0f] transition-colors">Diagnostics</Link></li>
                            <li><Link href="#" className="hover:text-[#ffeb0f] transition-colors">Study Abroad</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#ffeb0f]">Company</h4>
                        <ul className="space-y-4 text-gray-300 font-medium">
                            <li><Link href="/about" className="hover:text-[#ffeb0f] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[#ffeb0f] transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-[#ffeb0f] transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-[#ffeb0f] transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-[#ffeb0f] transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#ffeb0f]">Contact Us</h4>
                        <ul className="space-y-4 text-gray-300 font-medium">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#ffeb0f] mt-1 shrink-0" />
                                <span>123 Innovation Drive, Biotech Park, City, Country</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#ffeb0f] shrink-0" />
                                <span>contact@geneveda.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#ffeb0f] shrink-0" />
                                <span>+1 (123) 456-7890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm font-semibold">
                    <p>
                        © {new Date().getFullYear()} All rights reserved - GeneVeda Bio Sciences | Developed by{" "}
                        <a
                            href="https://www.bharatai.store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-[#ffeb0f] transition-colors"
                        >
                            Bharat AI Software
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
    return (
        <Link
            href={href}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ffeb0f] hover:text-black text-white transition-all"
        >
            <Icon className="w-5 h-5" />
        </Link>
    );
}
