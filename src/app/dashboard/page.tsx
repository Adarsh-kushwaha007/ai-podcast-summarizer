"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockSummaries } from "@/lib/mock-data";
import { Play, Calendar, Clock, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

export default function UserDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
                    <p className="text-muted-foreground">
                        Here's what you've been listening to recently.
                    </p>
                </div>
                <Link href="/">
                    <Button className="bg-gradient-to-r from-violet-600 to-blue-600">
                        <Plus className="mr-2 h-4 w-4" /> New Summary
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockSummaries.map((summary) => (
                    <Card key={summary.id} className="group hover:shadow-lg transition-all duration-300 border-border/60">
                        <div className="h-32 bg-secondary/30 relative overflow-hidden rounded-t-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-3 left-3">
                                <span className="inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                    {summary.source}
                                </span>
                            </div>
                        </div>
                        <CardHeader>
                            <CardTitle className="line-clamp-1 text-lg group-hover:text-primary transition-colors">
                                {summary.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-4 text-xs">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {summary.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {summary.duration}
                                </span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                {summary.summaryPreview}
                            </p>
                            <Button variant="outline" className="w-full group-hover:border-primary/50 group-hover:bg-primary/5">
                                View Summary <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {mockSummaries.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed rounded-xl">
                    <p className="text-muted-foreground mb-4">You haven't summarized any podcasts yet.</p>
                    <Link href="/">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
