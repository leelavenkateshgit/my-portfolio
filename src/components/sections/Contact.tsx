"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        Get In <span className="text-transparent bg-clip-text text-gradient-cyan-blue">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full glow-cyan" />
                </motion.div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-bold font-heading text-gray-100 mb-6">
                            Let&apos;s talk about your next project.
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-10">
                            I&apos;m currently open to new opportunities and collaborations.
                            Whether you have a question, a project idea, or just want to say hi,
                            I&apos;ll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <ContactInfoItem
                                icon={<Mail className="text-cyan-400 w-6 h-6" />}
                                title="Email"
                                value="akurathileelavenkatesh@gmail.com"
                                link="mailto:akurathileelavenkatesh@gmail.com"
                            />
                            <ContactInfoItem
                                icon={<Phone className="text-purple-400 w-6 h-6" />}
                                title="Phone"
                                value="+91 9059682664"
                                link="tel:+919059682664"
                            />
                            <ContactInfoItem
                                icon={<MapPin className="text-blue-400 w-6 h-6" />}
                                title="Location"
                                value="India"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl border border-white/10 relative">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-gray-100"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-gray-100"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-gray-100 resize-none"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitted}
                                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : submitted ? (
                                        "Message Sent!"
                                    ) : (
                                        <>
                                            Send Message <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-green-500/50"
                                >
                                    <div className="text-center p-6 text-green-400">
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-green">
                                            <Send className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                                        <p className="text-sm text-green-200">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                    </div>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ContactInfoItem({ icon, title, value, link }: { icon: React.ReactNode; title: string; value: string; link?: string }) {
    const content = (
        <div className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300">
            <div className="p-3 bg-black rounded-full border border-white/10 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
                <p className="text-gray-200 font-semibold group-hover:text-white transition-colors">{value}</p>
            </div>
        </div>
    );

    return link ? (
        <a href={link} className="block w-full">
            {content}
        </a>
    ) : (
        <div className="w-full">
            {content}
        </div>
    );
}
