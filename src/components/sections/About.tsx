"use client";

import { motion } from "framer-motion";
import { Download, MapPin, User, Code, Terminal } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        About{" "}
                        <span className="text-transparent bg-clip-text text-gradient-purple-cyan">
                            Me
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full glow-purple" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Bio text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-heading font-semibold text-gray-100 flex items-center gap-3">
                            <User className="text-purple-400" />
                            Who I Am
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I am a passionate <strong className="text-cyan-400 font-medium">Full Stack & AI Developer</strong> with a deep enthusiasm for building modern web applications and AI tools. My journey in tech is driven by a desire to craft beautiful, functional, and performant user experiences.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Currently pursuing my B.Tech in Computer Science and Engineering at <strong className="text-purple-400 font-medium">Vignan Lara Institute of Technology and Science</strong>, I constantly explore new technologies to build solutions that matter.
                        </p>

                        <div className="flex items-center gap-4 text-gray-300 pt-4">
                            <MapPin className="text-cyan-400 w-5 h-5" />
                            <span className="text-lg">Based in India</span>
                        </div>

                        <div className="pt-8">
                            <a
                                href="https://drive.google.com/file/d/1onnGhtZT-TCh1lgFzBN1sK__KoYuYwjo/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/50 hover:bg-purple-500/20 hover:scale-105 hover:glow-purple transition-all duration-300 font-medium tracking-wide"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Stats/Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:glow-cyan">
                                <Code className="text-cyan-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2 text-gray-200">
                                Web Development
                            </h4>
                            <p className="text-gray-500">
                                Crafting responsive and interactive interfaces with React and Next.js.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:glow-purple">
                                <Terminal className="text-purple-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2 text-gray-200">
                                AI Solutions
                            </h4>
                            <p className="text-gray-500">
                                Integrating intelligent tools and models using Python and open-source models.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group sm:col-span-2">
                            <h4 className="text-xl font-semibold mb-4 text-gray-200">
                                Education
                            </h4>
                            <div className="relative pl-6 border-l-2 border-blue-500/30">
                                <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1.5 glow-cyan" />
                                <h5 className="text-lg font-medium text-cyan-300">
                                    B.Tech CSE
                                </h5>
                                <p className="text-gray-400 mt-1">
                                    Vignan Lara Institute of Technology and Science
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
