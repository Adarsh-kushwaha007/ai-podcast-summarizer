"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Download, Share2, FileText, BrainCircuit, List, ArrowLeft, Twitter, Linkedin, Link2, FileJson, FileType, Mail } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SummaryDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-6xl mx-auto space-y-8"
        >
            {/* Header / Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-3xl font-bold">Podcast Summary</h2>
                        <p className="text-muted-foreground">The Future of AI: Beyond LLMs</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Link href="/">
                        <Button variant="default">Start New</Button>
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                <Download className="w-4 h-4 mr-2" /> Export
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Export As</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">
                                <FileText className="w-4 h-4 mr-2" /> PDF Document
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <FileType className="w-4 h-4 mr-2" /> Markdown
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <FileJson className="w-4 h-4 mr-2" /> JSON Data
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                <Share2 className="w-4 h-4 mr-2" /> Share
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Share Summary</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">
                                <Link2 className="w-4 h-4 mr-2" /> Copy Link
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Twitter className="w-4 h-4 mr-2" /> Twitter
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Mail className="w-4 h-4 mr-2" /> Email
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Player & Key Insights */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Mock Player */}
                    <Card className="bg-secondary/20 backdrop-blur-sm border-white/5">
                        <CardContent className="p-6 flex items-center gap-4">
                            <Button size="icon" className="h-12 w-12 rounded-full"><Play className="ml-1 w-5 h-5" /></Button>
                            <div className="flex-1 space-y-2">
                                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-primary"></div>
                                </div>
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>12:34</span>
                                    <span>45:00</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="summary" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="summary"><List className="w-4 h-4 mr-2" /> Summary</TabsTrigger>
                            <TabsTrigger value="transcript"><FileText className="w-4 h-4 mr-2" /> Transcript</TabsTrigger>
                            <TabsTrigger value="mindmap"><BrainCircuit className="w-4 h-4 mr-2" /> Mind Map</TabsTrigger>
                        </TabsList>

                        <TabsContent value="summary" className="space-y-4 mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Key Takeaways</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="p-4 rounded-lg bg-secondary/50 border border-border">
                                            <h4 className="font-semibold mb-2 text-primary">Point {i}</h4>
                                            <p className="text-sm text-muted-foreground">This is a key insight extracted from the podcast. It highlights the main discussion points regarding AI advancements.</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="transcript" className="mt-6">
                            <Card>
                                <CardContent className="p-6 h-[500px] overflow-y-auto">
                                    <p className="leading-relaxed text-muted-foreground">
                                        [00:00:00] <strong>Speaker 1:</strong> Welcome back to the show. Today we are discussing...<br /><br />
                                        [00:00:15] <strong>Speaker 2:</strong> Thanks for having me. It is a pleasure to be here...
                                    </p>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="mindmap" className="mt-6">
                            <Card>
                                <CardContent className="p-6 h-[500px] flex items-center justify-center bg-secondary/20">
                                    <p className="text-muted-foreground">Interactive Mind Map Visualization Placeholder</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Right Column: Recommended / Stats (Placeholder) */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Speakers</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500"></div>
                                <div>
                                    <p className="font-medium">Host Name</p>
                                    <p className="text-xs text-muted-foreground">Tech Journalist</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-purple-500"></div>
                                <div>
                                    <p className="font-medium">Guest Name</p>
                                    <p className="text-xs text-muted-foreground">AI Researcher</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </motion.div>
    );
}
