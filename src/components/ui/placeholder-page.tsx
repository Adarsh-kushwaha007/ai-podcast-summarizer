"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PlaceholderPageProps {
    title: string;
    description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="text-center max-w-md mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <Construction className="w-10 h-10 text-primary" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-bold mb-4"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground mb-8"
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Button asChild variant="outline">
                        <Link href="/">
                            <ArrowLeft className="mr-2 w-4 h-4" />
                            Back to Home
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
