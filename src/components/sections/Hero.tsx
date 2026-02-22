"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-cyan-400 font-mono tracking-widest mb-4 uppercase text-sm md:text-base">
                            Welcome to my universe
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 tracking-tight">
                            Hi, I&apos;m{" "}
                            <span className="text-gradient-cyan-blue block mt-2 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                                Leelavenkatesh
                            </span>
                        </h1>

                        <div className="h-20 mb-8 sm:h-auto">
                            <span className="text-xl md:text-3xl font-light text-gray-300">
                                A passionate {" "}
                                <TypeAnimation
                                    sequence={[
                                        "Full Stack Developer",
                                        2000,
                                        "AI Developer",
                                        2000,
                                        "Tech Enthusiast",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className="font-bold text-transparent bg-clip-text text-gradient-purple-cyan drop-shadow-[0_0_10px_rgba(176,38,255,0.6)]"
                                    repeat={Infinity}
                                />
                            </span>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Building modern web apps and AI tools. Dedicated to creating seamless, interactive, and futuristic digital experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
                        >
                            <Link
                                href="#projects"
                                className="px-8 py-4 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 hover:scale-105 hover:glow-cyan transition-all duration-300 font-semibold tracking-wide w-full sm:w-auto text-center flex items-center justify-center gap-2"
                            >
                                View Projects
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:scale-105 hover:border-white/30 transition-all duration-300 font-semibold tracking-wide w-full sm:w-auto text-center"
                            >
                                Contact Me
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex items-center justify-center gap-6"
                        >
                            <SocialLink href="https://github.com/leelavenkateshgit" icon={<Github />} hoverColor="hover:text-cyan-400 hover:glow-cyan" />
                            <SocialLink href="https://www.linkedin.com/in/leela-venkatesh-1a2b3c" icon={<Linkedin />} hoverColor="hover:text-blue-400 hover:glow-cyan" />
                            <SocialLink href="mailto:akurathileelavenkatesh@gmail.com" icon={<Mail />} hoverColor="hover:text-purple-400 hover:glow-purple" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <Link href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <ChevronDown className="w-8 h-8" />
                </Link>
            </motion.div>
        </section>
    );
}

function SocialLink({ href, icon, hoverColor }: { href: string; icon: React.ReactNode; hoverColor: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:scale-110 hover:border-transparent ${hoverColor}`}
        >
            {icon}
        </a>
    );
}
