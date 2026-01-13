import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Info */}
                    <div>
                        <Link href="/" className="text-3xl font-bold tracking-tight mb-6 block text-white">
                            genaveda
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering bioscience research and careers through innovation, expertise, and global opportunities.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={Linkedin} />
                            <SocialLink href="#" icon={Twitter} />
                            <SocialLink href="#" icon={Facebook} />
                            <SocialLink href="#" icon={Instagram} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-[#ffeb0f]">Services</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">R&D Services</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Bioinformatics</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">NGS Analysis</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Diagnostics</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Study Abroad</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-[#ffeb0f]">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-[#ffeb0f]">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#7c1d85] mt-1 shrink-0" />
                                <span>123 Innovation Drive, Biotech Park, City, Country</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#7c1d85] shrink-0" />
                                <span>contact@geneveda.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#7c1d85] shrink-0" />
                                <span>+1 (123) 456-7890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} GeneVeda Biosciences. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
    return (
        <Link
            href={href}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#7c1d85] hover:text-white transition-all"
        >
            <Icon className="w-5 h-5" />
        </Link>
    );
}
