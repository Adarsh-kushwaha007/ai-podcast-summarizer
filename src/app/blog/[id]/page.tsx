"use client";

import { useParams, useRouter } from "next/navigation";
import { blogArticles } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubscribe } from "@/hooks/use-subscribe";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
    const params = useParams();
    const router = useRouter();
    const { email, setEmail, handleSubscribe, isLoading } = useSubscribe();
    const [article, setArticle] = useState<typeof blogArticles[0] | null>(null);

    useEffect(() => {
        // Find article by ID
        const id = Number(params.id);
        const seenArticle = blogArticles.find(a => a.id === id);

        if (seenArticle) {
            setArticle(seenArticle);
        } else {
            // Check if we are done loading params (next.js app router behavior mainly)
            if (params.id) {
                // If valid ID format but no article, you might redirect to 404 or show error
            }
        }
    }, [params.id]);

    if (!article && params.id) {
        // Simple loading or 404 state handling
        return (
            <div className="min-h-screen pt-32 text-center container">
                <h2 className="text-2xl font-bold mb-4">Article not found</h2>
                <Link href="/blog"><Button>Back to Blog</Button></Link>
            </div>
        );
    }

    if (!article) return <div className="min-h-screen pt-32 container">Loading...</div>;

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Scroll Progress Bar (Optional enhancement) */}
            <motion.div
                className="fixed top-16 left-0 right-0 h-1 bg-primary z-50 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ scaleX: 0 }} // Placeholder for scroll usage if complex logic added
            />

            <article className="container px-4 mx-auto max-w-4xl">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/blog">
                        <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                        </Button>
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12 text-center md:text-left">
                    <div className="flex flex-wrap items-center gap-3 mb-6 justify-center md:justify-start">
                        <Badge variant="secondary" className="text-sm px-3 py-1">
                            {article.category}
                        </Badge>
                        <span className="text-muted-foreground text-sm flex items-center">
                            <Calendar className="w-3 h-3 mr-1" /> {article.date}
                        </span>
                        <span className="text-muted-foreground text-sm flex items-center">
                            <Clock className="w-3 h-3 mr-1" /> {article.readTime} read
                        </span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight"
                    >
                        {article.title}
                    </motion.h1>

                    <div className="flex items-center justify-between border-t border-b border-border py-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg font-bold">
                                <User className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">{article.author}</p>
                                <p className="text-xs text-muted-foreground">Author</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                                <Twitter className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                                <Share2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className={`w-full h-64 md:h-96 rounded-3xl mb-12 ${article.image} shadow-xl`} />

                {/* Content */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none mb-20"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* CTA / Footer */}
                <div className="bg-secondary/20 p-8 rounded-2xl border border-border text-center">
                    <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
                    <p className="text-muted-foreground mb-6">
                        Subscribe to our newsletter to get more content like this delivered to your inbox.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Input
                            placeholder="Enter your email"
                            className="max-w-xs bg-background"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button disabled={isLoading} onClick={() => handleSubscribe()}>
                            {isLoading ? "Subscribing..." : "Subscribe"}
                        </Button>
                    </div>
                </div>
            </article>
        </main>
    );
}
