"use client";

import { motion } from "framer-motion";
import { BrainCircuit, FileText, Share2, Zap, Clock, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        icon: <BrainCircuit className="w-10 h-10 text-violet-500" />,
        title: "AI-Powered Analysis",
        description: "Advanced algorithms extract key insights, sentiment, and topics from any audio source."
    },
    {
        icon: <FileText className="w-10 h-10 text-blue-500" />,
        title: "Smart Transcripts",
        description: "Get highly accurate transcripts with speaker detection and timestamps automatically."
    },
    {
        icon: <Share2 className="w-10 h-10 text-pink-500" />,
        title: "Easy Sharing",
        description: "Share summaries and mind maps with your team or audience in a single click."
    },
    {
        icon: <Zap className="w-10 h-10 text-yellow-500" />,
        title: "Lightning Fast",
        description: "Process hour-long podcasts in minutes. Save time and get straight to the value."
    },
    {
        icon: <Clock className="w-10 h-10 text-cyan-500" />,
        title: "Time-Stamped Notes",
        description: "Jump directly to the most important parts of the conversation with interactive timestamps."
    },
    {
        icon: <Lock className="w-10 h-10 text-green-500" />,
        title: "Secure & Private",
        description: "Your audio data is processed securely and never trained on without your permission."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Everything you need to turn long-form audio into actionable knowledge.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
                                <CardHeader>
                                    <div className="mb-4">{feature.icon}</div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
