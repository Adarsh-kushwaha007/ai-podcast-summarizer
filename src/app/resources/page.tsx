"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, Users, HelpCircle, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const resources = [
    {
        icon: BookOpen,
        title: "Blog",
        description: "Deep dives into AI technology, podcasting tips, and product updates.",
        href: "/blog",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        icon: Users,
        title: "Community",
        description: "Join our discord server to connect with other creators and listeners.",
        href: "/community",
        color: "text-violet-500",
        bg: "bg-violet-500/10",
    },
    {
        icon: HelpCircle,
        title: "Help Center",
        description: "Guides, FAQs, and troubleshooting for using PodSumm.ai.",
        href: "/help",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
    },
    {
        icon: Code,
        title: "API Docs",
        description: "Documentation for developers integrating with our summarization engine.",
        href: "/docs",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
];

const latestArticles = [
    {
        title: "How AI is Changing Podcast Consumption",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
        title: "Maximizing Learning from Audio Content",
        date: "Dec 10, 2024",
        readTime: "4 min read",
        image: "bg-gradient-to-br from-violet-500 to-fuchsia-500",
    },
    {
        title: "PodSumm v2.0 Release Notes",
        date: "Dec 05, 2024",
        readTime: "3 min read",
        image: "bg-gradient-to-br from-orange-500 to-red-500",
    },
];

export default function ResourcesPage() {
    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="container px-4 mx-auto mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Resources <span className="text-primary">Hub</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Everything you need to get the most out of PodSumm.ai. Tutorials, guides, and community.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-md mx-auto relative"
                >
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                        placeholder="Search resources..."
                        className="pl-10 h-12 bg-secondary/50 border-secondary focus:border-primary/50"
                    />
                </motion.div>
            </section>

            {/* Main Categories Grid */}
            <section className="container px-4 mx-auto mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group cursor-pointer"
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="tex-xl font-semibold mb-2 flex items-center gap-2">
                                {item.title}
                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Latest Articles */}
            <section className="container px-4 mx-auto mb-20">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
                        <p className="text-muted-foreground">Fresh thinking from our team.</p>
                    </div>
                    <Button variant="outline">View All</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestArticles.map((article, i) => (
                        <motion.div
                            key={article.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className={`aspect-video rounded-xl mb-4 ${article.image} overflow-hidden`}>
                                <div className="w-full h-full bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                <span>{article.date}</span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                            </div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container px-4 mx-auto">
                <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Join the Community</h2>
                        <p className="text-white/80 mb-8 text-lg">
                            Connect with over 10,000 podcast enthusiasts and creators. Share insights, get help, and shape the future of PodSumm.
                        </p>
                        <Button size="lg" variant="secondary" className="font-semibold">
                            Join Discord Server
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
