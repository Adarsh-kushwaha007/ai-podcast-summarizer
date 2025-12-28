"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Github, Twitter, Linkedin, Mail, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubscribe } from "@/hooks/use-subscribe";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Footer() {
    const { email, setEmail, handleSubscribe, isLoading } = useSubscribe();
    const pathname = usePathname();
    const isSidebarPage = pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com", label: "Github" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    ];

    const footerLinks = {
        product: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "/pricing" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Testimonials", href: "#testimonials" },
        ],
        resources: [
            { label: "Blog", href: "/blog" },
            { label: "Community", href: "/community" },
            { label: "Help Center", href: "/help" },
            // { label: "API Docs", href: "/docs" },
        ],
        company: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
        ],
    };

    return (
        <footer className={cn("bg-background border-t border-border relative overflow-hidden", isSidebarPage && "ml-64")}>
            <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 pointer-events-none" />

            <div className="container px-4 mx-auto pt-20 pb-12 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
                >
                    {/* Brand Column */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 to-blue-600 group-hover:scale-105 transition-transform duration-300">
                                <Mic className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                                Serenote.ai
                            </span>
                        </Link>
                        <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
                            Transforming how you consume podcasts with AI-powered summaries.
                            Get key insights in minutes, not hours.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    className="p-2 rounded-full bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                                >
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="sr-only">{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-semibold text-foreground mb-6">Product</h4>
                        <ul className="space-y-4">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h4 className="font-semibold text-foreground mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter Column */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <h4 className="font-semibold text-foreground mb-6">Stay Updated</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to our newsletter for the latest AI updates and feature releases.
                        </p>
                        <form className="space-y-2" onSubmit={handleSubscribe}>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="pl-10 bg-background/50 border-secondary focus:border-primary/50 transition-colors"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <Button disabled={isLoading} className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:opacity-90 transition-opacity">
                                {isLoading ? "Subscribing..." : <>Subscribe <ArrowRight className="w-4 h-4 ml-2" /></>}
                            </Button>
                        </form>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
                >
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                        <p>© {new Date().getFullYear()} Serenote.ai. All rights reserved.</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        <span>by Serenote Team</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
