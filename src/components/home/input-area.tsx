"use client";

import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Upload, FileAudio, Youtube, Podcast } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InputAreaProps {
    onProcess: (url: string) => void;
    isProcessing: boolean;
}

export const InputArea = forwardRef<HTMLInputElement, InputAreaProps>(({ onProcess, isProcessing }, ref) => {
    const [url, setUrl] = useState("");
    const [isDragOver, setIsDragOver] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (url.trim()) {
            onProcess(url);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {!isProcessing ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-6"
                    >
                        {/* Main Input Card */}
                        <div className="p-1 rounded-2xl bg-gradient-to-r from-violet-600/20 to-blue-600/20 backdrop-blur-xl border border-white/10 shadow-2xl">
                            <div
                                className={cn(
                                    "relative group rounded-xl bg-background/80 transition-all duration-300",
                                    isDragOver ? "bg-primary/5 ring-2 ring-primary" : "hover:bg-background/90"
                                )}
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    setIsDragOver(true);
                                }}
                                onDragLeave={() => setIsDragOver(false)}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    setIsDragOver(false);
                                    // Handle file drop (mock for now)
                                    alert("File upload coming soon!");
                                }}
                            >
                                <form onSubmit={handleSubmit} className="p-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3 text-muted-foreground mb-2">
                                            <Youtube className="w-5 h-5" />
                                            <Podcast className="w-5 h-5" />
                                            <span className="text-sm font-medium">Paste YouTube or Podcast Link</span>
                                        </div>

                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                                <input
                                                    ref={ref}
                                                    type="text"
                                                    placeholder="https://..."
                                                    value={url}
                                                    onChange={(e) => setUrl(e.target.value)}
                                                    className="w-full h-12 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50"
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                disabled={!url}
                                                className={cn(
                                                    "transition-all duration-300",
                                                    url ? "opacity-100" : "opacity-80"
                                                )}
                                                variant="premium"
                                            >
                                                Summarize
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Drop Overlay */}
                                    {isDragOver && (
                                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/90 rounded-xl backdrop-blur-sm">
                                            <div className="flex flex-col items-center gap-2 text-primary animate-bounce">
                                                <Upload className="w-10 h-10" />
                                                <span className="font-bold text-lg">Drop audio file here</span>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Quick Actions / Supported Platforms */}
                        <div className="flex justify-center gap-6 text-muted-foreground/60">
                            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold">
                                <Youtube className="w-4 h-4" /> YouTube
                            </div>
                            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold">
                                <Podcast className="w-4 h-4" /> Spotify
                            </div>
                            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold">
                                <FileAudio className="w-4 h-4" /> MP3 / WAV
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col items-center justify-center py-10"
                    >
                        {/* Loading Animation logic will go here */}
                        <div className="relative w-24 h-24 mb-6">
                            <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin"></div>
                            <div className="absolute inset-3 border-t-4 border-violet-400 rounded-full animate-spin flex items-center justify-center"></div>
                            <Podcast className="absolute inset-0 m-auto w-8 h-8 text-foreground animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600 animate-pulse">
                            Analyzing Audio...
                        </h3>
                        <p className="text-muted-foreground mt-2">Extracting key insights and speakers</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});
InputArea.displayName = "InputArea";
