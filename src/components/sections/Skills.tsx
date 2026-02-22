"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Terminal,
    BrainCircuit,
    Layout,
    Server,
} from "lucide-react";

const skillsData = [
    { name: "HTML & CSS", level: 95, icon: Layout, color: "bg-orange-500" },
    { name: "JavaScript", level: 90, icon: Code2, color: "bg-yellow-400" },
    { name: "React & Next.js", level: 85, icon: Layout, color: "bg-cyan-400" },
    { name: "Node.js", level: 80, icon: Server, color: "bg-green-500" },
    { name: "Python", level: 85, icon: Terminal, color: "bg-blue-500" },
    { name: "AI Tools", level: 75, icon: BrainCircuit, color: "bg-purple-500" },
    { name: "Git & GitHub", level: 90, icon: Database, color: "bg-red-500" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        My <span className="text-transparent bg-clip-text text-gradient-cyan-blue">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full glow-cyan" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillsData.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 rounded-2xl group hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                            <skill.icon className={`w-6 h-6 ${skill.color.replace('bg-', 'text-')}`} />
                                        </div>
                                        <span className="font-semibold text-lg text-gray-200">{skill.name}</span>
                                    </div>
                                    <span className="text-cyan-400 font-mono font-bold group-hover:glow-cyan">
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Progress Bar Background */}
                                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                    {/* Animated Progress Fill */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                                        className={`h-full ${skill.color} rounded-full relative`}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
