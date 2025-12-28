"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
    {
        question: "How does the podcast summarizer work?",
        answer: "Our AI listens to the podcast audio, transcribes it, and then analyzes the content to extract key insights, summaries, and action items. It uses advanced natural language processing to understand context and nuance.",
    },
    {
        question: "Is it free to use?",
        answer: "We offer a free tier that allows you to summarize a limited number of podcasts per month. For power users who need more summaries and advanced features like mind maps, we offer paid subscription plans.",
    },
    {
        question: "Which platforms are supported?",
        answer: "Currently, we support YouTube links and direct audio file uploads (MP3, WAV). We are working on integrations with Spotify and Apple Podcasts.",
    },
    {
        question: "Can I export the summaries?",
        answer: "Yes! You can export your summaries to PDF, Markdown, and Notion. This makes it easy to integrate your learnings into your existing knowledge management workflows.",
    },
    {
        question: "How accurate are the summaries?",
        answer: "Our models are powered by the latest Gemini 2.0 technology, providing high accuracy. However, as with all AI, we recommend double-checking critical information against the original source.",
    },
];

export function FAQSection() {
    return (
        <section className="container px-4 mx-auto py-24">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Everything you need to know about Serenote.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
