"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Content Creator",
        content: "Serenote has completely changed my workflow. I can research podcast topics in minutes instead of hours.",
        rating: 5,
    },
    {
        name: "Mark Johnson",
        role: "Software Engineer",
        content: "The technical summaries are surprisingly accurate. It picks up on nuances that other tools miss.",
        rating: 5,
    },
    {
        name: "Emily Davis",
        role: "Student",
        content: "Perfect for reviewing lectures and educational podcasts. The mind maps are a lifesaver for exams.",
        rating: 4,
    },
    {
        name: "David Kim",
        role: "Product Manager",
        content: "I digest industry news 10x faster now. The key insights feature gets straight to the point.",
        rating: 5,
    },
    {
        name: "Jessica Wilson",
        role: "Journalist",
        content: "An essential tool for my research. It helps me find quotes and key data points instantly.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-secondary/5 overflow-hidden">
            <div className="container px-4 mx-auto mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Loved by <span className="text-primary">Listeners</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground text-lg max-w-2xl mx-auto"
                >
                    See what our community has to say about their experience with Serenote.ai.
                </motion.p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex gap-6 animate-wave-drift w-max hover:[animation-play-state:paused]">
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="w-[350px] p-6 rounded-2xl bg-card border border-border shadow-sm flex-shrink-0"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-muted"
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
