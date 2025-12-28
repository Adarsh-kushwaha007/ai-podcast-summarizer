"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState<string | null>("Pro");

    const plans = [
        {
            name: "Free",
            description: "Perfect for trying out the power of AI summarization.",
            price: 0,
            features: [
                "1 hour of audio processing / month",
                "Basic summaries",
                "Standard support",
                "Web access only"
            ],
            notIncluded: [
                "Mind map visualizations",
                "Speaker identification",
                "Export to PDF/Notion",
                "API Access"
            ]
        },
        {
            name: "Pro",
            description: "For creators and professionals who need more power.",
            price: isAnnual ? 12 : 15,
            popular: true,
            features: [
                "20 hours of audio processing / month",
                "Advanced summaries & Key insights",
                "Interactive Mind maps",
                "Speaker identification",
                "Export to all formats",
                "Priority support"
            ],
            notIncluded: [
                "API Access",
                "Custom integrations"
            ]
        },
        {
            name: "Enterprise",
            description: "Custom solutions for teams and organizations.",
            price: "Custom",
            features: [
                "Unlimited processing",
                "Custom AI models",
                "API Access",
                "SSO & Advanced Security",
                "Dedicated Success Manager",
                "Custom integrations"
            ],
            notIncluded: []
        }
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200/20 via-background to-background dark:from-violet-900/20"></div>

            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <Badge variant="outline" className="mb-3 py-1 px-4 border-primary/50 text-primary bg-primary/10">Pricing</Badge>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h1>
                    <p className="text-lg text-muted-foreground mb-6">
                        Choose the plan that fits your needs. No hidden fees. Cancel anytime.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
                        <div
                            className="bg-secondary p-1 rounded-full cursor-pointer w-14 h-8 flex items-center px-1"
                            onClick={() => setIsAnnual(!isAnnual)}
                        >
                            <motion.div
                                className="bg-primary w-6 h-6 rounded-full"
                                animate={{ x: isAnnual ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </div>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                            Yearly <span className="text-green-500 font-bold ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedPlan(plan.name)}
                            className="cursor-pointer"
                        >
                            <Card
                                className={`h-full flex flex-col relative transition-all duration-300 ${selectedPlan === plan.name
                                        ? 'border-primary shadow-xl shadow-primary/20 scale-105 z-10 ring-2 ring-primary ring-offset-2 ring-offset-background'
                                        : 'border-border/50 hover:border-primary/50 opacity-80 hover:opacity-100'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                                        <Zap className="w-3 h-3 fill-current" /> Most Popular
                                    </div>
                                )}
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl flex justify-between items-center">
                                        {plan.name}
                                        {selectedPlan === plan.name && <Check className="w-5 h-5 text-primary" />}
                                    </CardTitle>
                                    <CardDescription className="text-xs">{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 pb-4">
                                    <div className="mb-6">
                                        <span className="text-3xl font-bold">
                                            {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                                        </span>
                                        {typeof plan.price === 'number' && (
                                            <span className="text-muted-foreground text-sm">/{isAnnual ? 'year' : 'month'}</span>
                                        )}
                                    </div>

                                    <div className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-2">
                                                <div className="mt-0.5 bg-green-500/10 p-0.5 rounded-full text-green-500 shrink-0">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                <span className="text-sm leading-tight">{feature}</span>
                                            </div>
                                        ))}
                                        {plan.notIncluded.map((feature) => (
                                            <div key={feature} className="flex items-start gap-2 opacity-50">
                                                <div className="mt-0.5 bg-muted p-0.5 rounded-full text-muted-foreground shrink-0">
                                                    <X className="w-3 h-3" />
                                                </div>
                                                <span className="text-sm text-muted-foreground leading-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <Button
                                        className="w-full"
                                        variant={selectedPlan === plan.name ? "default" : "outline"}
                                        size="default"
                                    >
                                        {plan.price === "Custom" ? "Contact Sales" : (selectedPlan === plan.name ? "Selected" : "Select Plan")}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
