"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Twitter, Github, Users, Calendar, Sparkles } from "lucide-react";

export default function CommunityPage() {
    const platforms = [
        {
            name: "Discord",
            description: "Chat with 15k+ podcast enthusiasts, share summaries, and get live support.",
            icon: MessageSquare,
            color: "text-indigo-500",
            bg: "bg-indigo-500/10",
            btnText: "Join Server",
            link: "#"
        },
        {
            name: "Twitter / X",
            description: "Follow for daily tips, memes, and the latest product announcements.",
            icon: Twitter,
            color: "text-sky-500",
            bg: "bg-sky-500/10",
            btnText: "Follow Us",
            link: "#"
        },
        {
            name: "GitHub",
            description: "Contribute to our open-source tools and report bugs or request features.",
            icon: Github,
            color: "text-zinc-500",
            bg: "bg-zinc-500/10",
            btnText: "Star Repo",
            link: "#"
        },
    ];

    const events = [
        {
            title: "Community AMA with Founder",
            date: "Dec 28, 2024 • 10:00 AM PST",
            tag: "Live Audio",
        },
        {
            title: "Workshop: Advanced Mind Mapping",
            date: "Jan 05, 2025 • 2:00 PM PST",
            tag: "Webinar",
        },
        {
            title: "Podcast Creators Meetup",
            date: "Jan 12, 2025 • 5:00 PM PST",
            tag: "Virtual Meetup",
        },
    ];

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero */}
            <section className="container px-4 mx-auto mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Join the <span className="text-primary">Movement</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                    PodSumm is more than this tool. It's a community of life-long learners, creators, and podcast addicts.
                </motion.p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-y border-border py-8">
                    {[
                        { label: "Community Members", value: "15,000+" },
                        { label: "Summaries Generated", value: "500k+" },
                        { label: "Countries", value: "85+" },
                        { label: "Rating", value: "4.9/5" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Platforms */}
            <section className="container px-4 mx-auto mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {platforms.map((platform, i) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${platform.bg} ${platform.color} flex items-center justify-center mb-6`}>
                                <platform.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                            <p className="text-muted-foreground mb-8 flex-grow">
                                {platform.description}
                            </p>
                            <Button variant="outline" className="w-full">
                                {platform.btnText}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
                        <p className="text-muted-foreground mb-8">
                            We regularly host community calls, workshops, and AMAs. Join us to learn new workflows and connect with the team.
                        </p>
                        <div className="space-y-4">
                            {events.map((event, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border">
                                    <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center text-primary">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{event.title}</h4>
                                        <p className="text-sm text-muted-foreground">{event.date}</p>
                                    </div>
                                    <div className="ml-auto text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                                        {event.tag}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <div className="rounded-3xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 p-8 text-white h-full relative overflow-hidden flex flex-col justify-center text-center">
                            <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
                            <h3 className="text-2xl font-bold mb-4">Become a Community Ambassador</h3>
                            <p className="text-white/80 mb-8">
                                Love PodSumm? Apply to become an ambassador and get exclusive swag, early access to features, and a direct line to the founders.
                            </p>
                            <Button variant="secondary" className="w-fit mx-auto">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
