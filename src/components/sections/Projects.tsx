"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Learning Management System",
        description: "Built a responsive web application using HTML, CSS, JavaScript, React.js, and Node.js. Developed REST APIs to manage user data and implemented basic authentication for secure access. Designed clean and intuitive interfaces to improve navigation and usability.",
        image: "/project1.jpg",
        tags: ["React.js", "Node.js", "JavaScript", "HTML/CSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Weather Application",
        description: "Developed a dynamic weather application using JavaScript with REST API integration. Implemented city-based search functionality to fetch and display real-time temperature.",
        image: "/project2.jpg",
        tags: ["JavaScript", "REST API", "HTML", "CSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Tic Tac Toe Game",
        description: "Developed an interactive web-based game using HTML, CSS, and JavaScript. Implemented complete game logic, including win detection, draw conditions, and turn management.",
        image: "/project3.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        Featured <span className="text-transparent bg-clip-text text-gradient-purple-cyan">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full glow-purple" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-white/5 flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
                                {/* Mock image container since we don't have actual images */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                <MonitorPlay className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold font-heading mb-3 text-gray-100 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-cyan-200 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors font-medium text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors font-medium text-sm"
                                    >
                                        <Github className="w-4 h-4" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://github.com/leelavenkateshgit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/10 hover:border-purple-500/50 hover:bg-white/5 hover:glow-purple transition-all duration-300 font-semibold text-gray-300 hover:text-white"
                    >
                        <Github className="w-5 h-5" />
                        View More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
