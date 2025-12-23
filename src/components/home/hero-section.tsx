"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputArea } from "@/components/home/input-area";

interface HeroSectionProps {
    onProcess: (url: string) => void;
    isProcessing: boolean;
}

export function HeroSection({ onProcess, isProcessing }: HeroSectionProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleStartSummarizing = () => {
        inputRef.current?.focus();
        inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const handleLiveDemo = () => {
        onProcess("https://www.youtube.com/watch?v=example-demo");
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200/20 via-background to-background dark:from-violet-900/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="container px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 backdrop-blur-sm border border-border mb-6"
                >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium">Powered by Gemini 2.0</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground drop-shadow-sm"
                >
                    Turn{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 font-black">
                        Audio
                    </span>{" "}
                    into{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 font-black">
                        Insight
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium"
                >
                    Upload your podcast or paste a link. Get summaries, mind maps, and key
                    insights in seconds with our advanced AI engine.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <Button
                        size="lg"
                        variant="premium"
                        className="h-12 px-8 text-lg rounded-full"
                        onClick={handleStartSummarizing}
                    >
                        Start Summarizing <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        size="lg"
                        variant="premium"
                        className="h-12 px-8 text-lg rounded-full"
                        onClick={handleLiveDemo}
                    >
                        <CloudUpload className="mr-2 w-5 h-5" /> Live Demo
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="relative z-20 mb-20"
                >
                    <InputArea
                        ref={inputRef}
                        onProcess={onProcess}
                        isProcessing={isProcessing}
                    />
                </motion.div>

                {/* Abstract animated visualization */}
                <div className="mt-20 relative w-full max-w-4xl mx-auto h-64 bg-card/50 rounded-t-3xl border-x border-t border-border/60 backdrop-blur-xl overflow-hidden flex items-end justify-center gap-2 px-10 pb-10 shadow-2xl shadow-violet-500/10">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-full bg-gradient-to-t from-primary to-violet-500 rounded-t-sm"
                            initial={{ height: "10%" }}
                            animate={{ height: ["20%", "60%", "30%", "80%", "20%"] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "mirror",
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                            style={{
                                height: `${Math.random() * 100}%`,
                                opacity: 0.8
                            }}
                        />
                    ))}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}
