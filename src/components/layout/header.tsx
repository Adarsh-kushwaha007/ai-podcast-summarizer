"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Mic, Github } from "lucide-react";
import { AuthModal } from "@/components/auth/auth-modal";

export function Header() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [authTab, setAuthTab] = useState<"signin" | "signup">("signin");

    const openAuth = (tab: "signin" | "signup") => {
        setAuthTab(tab);
        setIsAuthOpen(true);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                        <Mic className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400">
                        PodSumm.ai
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link
                            href="/#features"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector("#features");
                                if (element) {
                                    const y = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for header
                                    const start = window.scrollY;
                                    const distance = y - start;
                                    const duration = 1500; // ms
                                    let startTimestamp: number | null = null;

                                    const step = (timestamp: number) => {
                                        if (!startTimestamp) startTimestamp = timestamp;
                                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                                        // Ease-in-out function
                                        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

                                        window.scrollTo(0, start + distance * ease);
                                        if (progress < 1) {
                                            window.requestAnimationFrame(step);
                                        }
                                    };
                                    window.requestAnimationFrame(step);
                                } else {
                                    window.location.href = "/#features";
                                }
                            }}
                            className="hover:text-primary transition-colors scroll-smooth"
                        >
                            Features
                        </Link>
                        <Link
                            href="/#how-it-works"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector("#how-it-works");
                                if (element) {
                                    const y = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for header
                                    const start = window.scrollY;
                                    const distance = y - start;
                                    const duration = 1500; // ms
                                    let startTimestamp: number | null = null;

                                    const step = (timestamp: number) => {
                                        if (!startTimestamp) startTimestamp = timestamp;
                                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                                        // Ease-in-out function
                                        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

                                        window.scrollTo(0, start + distance * ease);
                                        if (progress < 1) {
                                            window.requestAnimationFrame(step);
                                        }
                                    };
                                    window.requestAnimationFrame(step);
                                } else {
                                    window.location.href = "/#how-it-works";
                                }
                            }}
                            className="hover:text-primary transition-colors scroll-smooth"
                        >
                            How it works
                        </Link>
                        <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                        {/* <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                        <Link href="/admin" className="hover:text-primary transition-colors">Admin</Link> */}
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2">
                            <Button variant="ghost" size="sm" onClick={() => openAuth("signin")}>Sign In</Button>
                            <Button size="sm" onClick={() => openAuth("signup")}>Sign Up</Button>
                        </div>
                        <div className="flex items-center gap-2 pl-2 border-l border-border/40">
                            <Link href="https://github.com" target="_blank">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Github className="w-4 h-4" />
                                </Button>
                            </Link>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>

            <AuthModal
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
                defaultTab={authTab}
                // Force re-render when defaultTab changes to update the internal state
                key={authTab + isAuthOpen}
            />
        </header>
    );
}
