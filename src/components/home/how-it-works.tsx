"use client";

import { motion } from "framer-motion";
import { UploadCloud, Sparkles, FileBarChart } from "lucide-react";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Get your summary in three simple steps. No complex setup required.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[20%] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

                    {[
                        {
                            icon: <UploadCloud className="w-8 h-8 text-primary" />,
                            title: "1. Upload Audio",
                            description: "Upload your MP3, WAV file or simply paste a link to your podcast episode."
                        },
                        {
                            icon: <Sparkles className="w-8 h-8 text-primary" />,
                            title: "2. AI Processing",
                            description: "Our advanced AI listens, transcribes, and identifies key topics and speakers."
                        },
                        {
                            icon: <FileBarChart className="w-8 h-8 text-primary" />,
                            title: "3. Get Insights",
                            description: "Receive a comprehensive summary, mind map, and key takeaways instantly."
                        }
                    ].map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center relative"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center mb-6 z-10 relative group">
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
