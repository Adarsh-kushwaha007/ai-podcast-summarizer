"use client";

import { motion } from "framer-motion";
import { Mic, Globe, Users, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] opacity-50"></div>

            <div className="container px-4 mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Reinventing how we consume audio</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We are on a mission to unlock the knowledge hidden in billions of hours of spoken content.
                        PodSumm.ai makes audio accessible, searchable, and actionable for everyone.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {[
                        { icon: <Mic className="w-8 h-8 text-violet-500" />, title: "Voice First", desc: "We believe voice is the future of communication." },
                        { icon: <Globe className="w-8 h-8 text-blue-500" />, title: "Universal Access", desc: "Knowledge should be accessible to everyone, everywhere." },
                        { icon: <Users className="w-8 h-8 text-pink-500" />, title: "Community Driven", desc: "Built with and for the creators and listeners." },
                        { icon: <Heart className="w-8 h-8 text-red-500" />, title: "Ethical AI", desc: "We are committed to responsible and transparent AI development." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-secondary/20 p-8 rounded-2xl border border-border/50 hover:bg-secondary/40 transition-colors"
                        >
                            <div className="mb-4 bg-background p-3 w-fit rounded-xl border border-border">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                It started with a simple frustration: there are too many amazing podcasts and not enough time to listen to them all. We found ourselves constantly taking notes, rewinding, and wishing there was a better way to capture the "gold nuggets" of wisdom.
                            </p>
                            <p>
                                In 2024, with the explosion of Generative AI, we realized we could finally solve this problem. We built PodSumm.ai not just to summarize, but to understand. To connect dots between conversations and create a second brain for your audio consumption.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-gradient-to-tr from-violet-600/20 to-blue-600/20 border border-white/10"
                    >
                        {/* Placeholder for an image */}
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            Team / Office Image Placeholder
                        </div>
                    </motion.div>
                </div>

                {/* Team Section (Simplified) */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-48 h-48 rounded-full bg-secondary mb-6 mx-auto overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-200 to-blue-200 dark:from-violet-900 dark:to-blue-900"></div>
                                </div>
                                <h3 className="text-xl font-semibold">Team Member {i}</h3>
                                <p className="text-primary font-medium">Co-Founder, Role</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
