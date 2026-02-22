"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        Education & <span className="text-transparent bg-clip-text text-gradient-cyan-blue">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full glow-cyan" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-cyan-500/20 ml-4 md:ml-0">
                        {/* Timeline Item 1: Education */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 relative pl-8 md:pl-10"
                        >
                            {/* Timeline dot */}
                            <div className="absolute w-12 h-12 bg-black rounded-full border-2 border-cyan-500/50 -left-[25px] flex items-center justify-center glow-cyan z-10 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                                <GraduationCap className="text-cyan-400 w-5 h-5" />
                            </div>

                            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold font-heading text-gray-100 group-hover:text-cyan-400 transition-colors">
                                        B.Tech Computer Science and Engineering
                                    </h3>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm font-medium whitespace-nowrap hidden sm:flex">
                                        <Calendar className="w-4 h-4" />
                                        Present
                                    </div>
                                </div>

                                <h4 className="text-lg text-purple-400 font-medium mb-4">
                                    Vignan Lara Institute of Technology and Science
                                </h4>

                                <p className="text-gray-400 leading-relaxed">
                                    Focusing on core computer science subjects including algorithms, data structures, full-stack web development, and artificial intelligence. Actively participating in technical projects and hackathons.
                                </p>
                            </div>
                        </motion.div>

                        {/* Timeline Item 2: Experience (Placeholder for self-employed/freelance) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative pl-8 md:pl-10"
                        >
                            {/* Timeline dot */}
                            <div className="absolute w-12 h-12 bg-black rounded-full border-2 border-purple-500/50 -left-[25px] flex items-center justify-center glow-purple z-10 shadow-[0_0_15px_rgba(176,38,255,0.3)]">
                                <Briefcase className="text-purple-400 w-5 h-5" />
                            </div>

                            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold font-heading text-gray-100 group-hover:text-purple-400 transition-colors">
                                        Applied AI (AICTE) – Virtual Intern
                                    </h3>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm font-medium whitespace-nowrap hidden sm:flex">
                                        <Calendar className="w-4 h-4" />
                                        Dec 2025 – Jan 2026
                                    </div>
                                </div>

                                <h4 className="text-lg text-cyan-400 font-medium mb-4">
                                    IBM SkillsBuild
                                </h4>

                                <ul className="text-gray-400 leading-relaxed list-disc list-inside space-y-2">
                                    <li>Built project-based workflows with Python and Google Colab for data analysis and AI.</li>
                                    <li>Worked on small AI-related exercises involving data handling and analysis.</li>
                                    <li>Documented project outcomes, approaches, and key learnings for evaluation and review.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
