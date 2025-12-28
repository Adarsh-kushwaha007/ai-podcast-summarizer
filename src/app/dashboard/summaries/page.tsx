"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockSummaries } from "@/lib/mock-data";
import { Play, Calendar, Clock, ArrowRight, Video, Music, Command } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function UserSummariesPage() {
    const getSourceIcon = (source: string) => {
        if (source === "YouTube") return <Video className="w-3 h-3 mr-1" />;
        if (source === "Spotify" || source === "Apple Podcasts") return <Music className="w-3 h-3 mr-1" />;
        return <Command className="w-3 h-3 mr-1" />;
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">My Summaries</h1>
                    <p className="text-muted-foreground">
                        Access all your generated summaries and insights.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                {mockSummaries.map((summary) => (
                    <Card key={summary.id} className="group hover:bg-muted/30 transition-colors border-border/60">
                        <div className="flex flex-col sm:flex-row items-center p-4 gap-6">
                            <div className="w-full sm:w-48 h-32 bg-secondary/50 rounded-lg flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5" />
                                {getSourceIcon(summary.source)}
                                <span className="text-xs font-medium relative z-10">{summary.source}</span>
                            </div>

                            <div className="flex-1 space-y-2 text-center sm:text-left">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{summary.title}</h3>
                                <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {summary.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {summary.duration}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2 max-w-2xl">
                                    {summary.summaryPreview}
                                </p>
                            </div>

                            <div className="flex-shrink-0">
                                <Button variant="outline" className="group-hover:border-primary/50">
                                    View Full Summary <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
