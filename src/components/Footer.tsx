"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 bg-black pt-16 pb-8 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-cyan-500/10 blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {/* Logo / Brand */}
                    <div className="text-center md:text-left">
                        <span className="font-heading font-black text-2xl tracking-widest text-transparent bg-clip-text text-gradient-cyan-blue">
                            L.A
                        </span>
                        <p className="text-gray-500 mt-2 text-sm max-w-xs">
                            Building modern web apps and AI tools with a passion for futuristic design.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <SocialLink href="https://github.com/leelavenkateshgit" icon={<Github />} hoverColor="hover:text-cyan-400 hover:glow-cyan" />
                        <SocialLink href="https://www.linkedin.com/in/leela-venkatesh-1a2b3c" icon={<Linkedin />} hoverColor="hover:text-blue-400 hover:glow-cyan" />
                        <SocialLink href="mailto:akurathileelavenkatesh@gmail.com" icon={<Mail />} hoverColor="hover:text-purple-400 hover:glow-purple" />
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 text-center md:flex md:justify-between md:items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {currentYear} Leelavenkatesh Akurathi. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-sm">
                        Designed & Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, hoverColor }: { href: string; icon: React.ReactNode; hoverColor: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-transparent ${hoverColor}`}
        >
            {icon}
        </a>
    );
}
