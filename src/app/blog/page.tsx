"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { blogArticles, blogCategories } from "@/lib/blog-data";
import { useSubscribe } from "@/hooks/use-subscribe";

export default function BlogPage() {
    const { email, setEmail, handleSubscribe, isLoading } = useSubscribe();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArticles = blogArticles.filter(article => {
        const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="container px-4 mx-auto mb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                        The Serenote Blog
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Insights, Updates, and <br />
                        <span className="text-primary">Creator Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                    >
                        Deep dives into AI technology, podcasting strategies, and productivity hacks to help you learn faster.
                    </motion.p>
                </div>
            </section>

            {/* Filter & Search */}
            <section className="container px-4 mx-auto mb-12 sticky top-20 z-10">
                <div className="bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-secondary shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                        {blogCategories.map((cat, i) => (
                            <Button
                                key={cat}
                                variant={selectedCategory === cat ? "default" : "ghost"}
                                size="sm"
                                className="rounded-full flex-shrink-0"
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search articles..."
                            className="pl-9 h-9 rounded-full bg-secondary/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="container px-4 mx-auto mb-20 min-h-[400px]">
                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <Link href={`/blog/${article.id}`} className="block h-full">
                                    <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className={`h-48 ${article.image} relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                            <Badge className="absolute top-4 left-4 bg-background/90 text-foreground backdrop-blur-sm hover:bg-background">
                                                {article.category}
                                            </Badge>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {article.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {article.readTime}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                                                <div className="text-sm font-medium">
                                                    {article.author}
                                                </div>
                                                <div className="flex items-center text-primary text-sm font-medium gap-1 group-hover:translate-x-1 transition-transform">
                                                    Read <ArrowRight className="w-3 h-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
                        <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>Reset Filters</Button>
                    </div>
                )}
            </section>

            {/* Newsletter CTA */}
            <section className="container px-4 mx-auto">
                <div className="bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
                    <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                        Get the latest articles, tutorials, and podcast summaries delivered straight to your inbox. No spam, we promise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <Input
                            placeholder="Enter your email"
                            className="bg-background h-12"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button size="lg" className="h-12" disabled={isLoading} onClick={() => handleSubscribe()}>
                            {isLoading ? "Subscribing..." : "Subscribe"}
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
