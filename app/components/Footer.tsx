import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-black text-sm text-gray-500">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center">
                {/* Social Icons - Left Side */}
                <div className="flex gap-4 mb-8 md:mb-0">
                    {/* Facebook */}
                    <Link
                        href="#"
                        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#fffff0] text-[#1a1a1a] transition-all duration-300 hover:scale-125 hover:bg-[#1a1a1a] hover:text-white hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2)]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </Link>

                    {/* Instagram */}
                    <Link
                        href="#"
                        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#fffff0] text-[#1a1a1a] transition-all duration-300 hover:scale-125 hover:bg-[#1a1a1a] hover:text-white hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2)]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </Link>

                    {/* LinkedIn */}
                    <Link
                        href="#"
                        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#fffff0] text-[#1a1a1a] transition-all duration-300 hover:scale-125 hover:bg-[#1a1a1a] hover:text-white hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2)]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.48-5.47 5.48 0v8.306h5v-10.502c0-8.133-9.189-7.925-10.512-3.871v-1.627z" />
                        </svg>
                    </Link>

                    {/* X (Twitter) */}
                    <Link
                        href="#"
                        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#fffff0] text-[#1a1a1a] transition-all duration-300 hover:scale-125 hover:bg-[#1a1a1a] hover:text-white hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2)]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                </div>

                {/* Links & Copyright - Right Side */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                    <div className="text-gray-400">&copy; {new Date().getFullYear()} GeneVeda Biosciences</div>
                </div>
            </div>
        </footer>
    );
}
