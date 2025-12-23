"use client";

import Link from "next/link";
import { Mic, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/10 border-t border-border mt-auto">
            <div className="container px-4 mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-violet-600 to-blue-600">
                                <Mic className="text-white w-4 h-4" />
                            </div>
                            <span className="text-lg font-bold">PodSumm.ai</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-4">
                            Transforming how you consume podcasts with AI-powered summaries and insights.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#how-it-works" className="hover:text-primary transition-colors">How it works</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                            {/* <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li> */}
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} PodSumm.ai. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
