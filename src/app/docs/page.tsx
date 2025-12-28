"use client";

import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
    return (
        <div className="flex min-h-screen pt-16">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block w-64 border-r border-border h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto p-6 scrollbar-thin">
                <h4 className="font-semibold mb-6 px-2">Documentation</h4>
                <nav className="space-y-1">
                    <div className="mb-6">
                        <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-2">Getting Started</h5>
                        <ul className="space-y-1">
                            <li><Link href="#" className="block px-2 py-1.5 text-sm font-medium text-foreground bg-secondary/50 rounded-md">Introduction</Link></li>
                            <li><Link href="#" className="block px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors">Authentication</Link></li>
                            <li><Link href="#" className="block px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors">Rate Limits</Link></li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-2">Summaries</h5>
                        <ul className="space-y-1">
                            <li><Link href="#" className="block px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors">Create Summary</Link></li>
                            <li><Link href="#" className="block px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors">Get Summary</Link></li>
                            <li><Link href="#" className="block px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors">Delete Summary</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-2">Mind Maps</h5>
                        <ul className="space-y-1">
                            <li><Link href="#" className="block px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors">Generate Map</Link></li>
                            <li><Link href="#" className="block px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors">Export Formats</Link></li>
                        </ul>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl mx-auto p-6 md:p-12">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">PodSumm API Reference</h1>
                    <p className="text-xl text-muted-foreground">
                        Integrate powerful audio summarization into your own applications using our REST API.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Introduction */}
                    <section id="introduction" className="border-b border-border pb-12">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            Introduction
                            <ScrollLink className="w-5 h-5 text-muted-foreground opacity-50 hover:opacity-100 cursor-pointer" />
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            The PodSumm API is a standard REST API that accepts audio files or URLs and returns structured summaries, key insights, and mind map data. All responses are returned in <code className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">JSON</code> format.
                        </p>
                        <div className="bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 p-4 rounded-lg text-sm">
                            <strong>Note:</strong> The API is currently in private beta. You must have an invite code to generate an API key.
                        </div>
                    </section>

                    {/* Authentication */}
                    <section id="authentication" className="border-b border-border pb-12">
                        <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                        <p className="mb-6">
                            Authenticate your API requests by including your secret API key in the <code className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">Authorization</code> header of every request.
                        </p>

                        <div className="relative rounded-lg bg-zinc-950 border border-zinc-800 p-6 overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs text-zinc-400 font-mono">bash</span>
                            </div>
                            <pre className="text-sm font-mono text-zinc-300 overflow-x-auto">
                                <code>
                                    <span className="text-violet-400">curl</span> https://api.podsumm.ai/v1/summarize \<br />
                                    -H <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \<br />
                                    -H <span className="text-green-400">"Content-Type: application/json"</span>
                                </code>
                            </pre>
                        </div>
                    </section>

                    {/* Create Summary */}
                    <section id="create-summary">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded text-xs font-bold bg-green-500/10 text-green-600 dark:text-green-400">POST</span>
                            <h2 className="text-2xl font-bold">Create Summary</h2>
                        </div>
                        <p className="mb-6">
                            Submit a new audio file or URL for processing. This is an asynchronous operation that returns a job ID.
                        </p>

                        <div className="relative rounded-lg bg-zinc-950 border border-zinc-800 p-6 overflow-hidden mb-6">
                            <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-2">
                                <span className="text-xs text-zinc-400 font-mono">Request Body</span>
                            </div>
                            <pre className="text-sm font-mono text-zinc-300 overflow-x-auto">
                                <code>
                                    {`{
  "url": "https://www.youtube.com/watch?v=...",
  "options": {
    "language": "en",
    "detail_level": "comprehensive"
  }
}`}
                                </code>
                            </pre>
                        </div>

                        <Button>View Full Documentation</Button>
                    </section>
                </div>
            </main>
        </div>
    );
}
