"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, Zap } from "lucide-react";

export default function BillingPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Billing & Subscription</h1>
                <p className="text-muted-foreground">
                    Manage your subscription plan and payment methods.
                </p>
            </div>

            <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-xl">Current Plan: Pro</CardTitle>
                            <CardDescription>You are currently on the Pro plan.</CardDescription>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Active
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold">$19</span>
                        <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        Next billing date: <strong>January 27, 2026</strong>
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CreditCard className="w-4 h-4" />
                        <span>Visa ending in 4242</span>
                    </div>
                </CardContent>
                <CardFooter className="border-t border-primary/10 px-6 py-4 gap-4">
                    <Button variant="default">Manage Subscription</Button>
                    <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">Cancel Subscription</Button>
                </CardFooter>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Invoices</CardTitle>
                        <CardDescription>View and download your past invoices.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0 border-border">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-sm">Invoice #{1000 + i}</span>
                                        <span className="text-xs text-muted-foreground">Dec {27 - i}, 2025</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium">$19.00</span>
                                        <Button variant="outline" size="sm" className="h-8">Download</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Usage</CardTitle>
                        <CardDescription>Your AI generation usage this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-medium">Summary Generations</span>
                                    <span className="text-muted-foreground">8 / 50</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-violet-500 w-[16%]" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-medium">Audio Minutes Transcribed</span>
                                    <span className="text-muted-foreground">120 / 600 mins</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[20%]" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
