"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, FileText, Zap, MessageCircle } from "lucide-react";

export default function HelpPage() {
    const categories = [
        { title: "Getting Started", icon: Zap, count: "5 articles" },
        { title: "Account & Billing", icon: FileText, count: "3 articles" },
        { title: "Features & Tutorials", icon: HelpCircle, count: "12 articles" },
        { title: "Troubleshooting", icon: MessageCircle, count: "8 articles" },
    ];

    const faqs = [
        {
            question: "How long can the podcast episodes be?",
            answer: "Currently, PodSumm supports podcast episodes up to 4 hours in length. For longer content, we recommend splitting it into parts, though we are working on increasing this limit."
        },
        {
            question: "Can I summarize YouTube videos?",
            answer: "Yes! Any YouTube video URL that contains speech (podcasts, lectures, tutorials) can be summarized just like an audio file."
        },
        {
            question: "Is there a limit to how many summaries I can generate?",
            answer: "Free tier users can generate up to 3 summaries per month. Pro users have unlimited access. Check out our pricing page for more details."
        },
        {
            question: "Can I export the mind maps?",
            answer: "Absolutely. You can export mind maps as PNG images or PDF files to include in your notes or presentations."
        },
        {
            question: "Which languages are supported?",
            answer: "We primarily support English, but our engine can process Spanish, French, German, and Portuguese with high accuracy. More languages are coming soon."
        },
    ];

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Search Header */}
            <section className="bg-secondary/20 py-20 mb-16 border-b border-border">
                <div className="container px-4 mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-6"
                    >
                        How can we <span className="text-primary">help?</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-xl mx-auto relative"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                            placeholder="Search for answers..."
                            className="pl-12 h-14 rounded-2xl text-lg bg-background shadow-sm"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="container px-4 mx-auto mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-all cursor-pointer group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <cat.icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-semibold mb-1">{cat.title}</h3>
                            <p className="text-sm text-muted-foreground">{cat.count}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="container px-4 mx-auto mb-20 max-w-3xl">
                <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6 bg-card">
                            <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            {/* Contact CTA */}
            <section className="container px-4 mx-auto text-center">
                <div className="bg-secondary/30 rounded-3xl p-12 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Still can't find what you're looking for?</h3>
                    <p className="text-muted-foreground mb-8">
                        Our support team is always ready to help you with any questions or issues.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button>Contact Support</Button>
                        <Button variant="outline">Join Discord</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
