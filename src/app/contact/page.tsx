"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container px-4 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h1>
                    <p className="text-xl text-muted-foreground">
                        Have a question or feedback? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <Card className="bg-secondary/20 border-border/50">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Email Us</h4>
                                        <p className="text-muted-foreground text-sm">support@podsumm.ai</p>
                                        <p className="text-muted-foreground text-sm">hello@podsumm.ai</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-secondary/20 border-border/50">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <MessageSquare className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Live Chat</h4>
                                        <p className="text-muted-foreground text-sm">Available Mon-Fri</p>
                                        <p className="text-muted-foreground text-sm">9am - 5pm EST</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-secondary/20 border-border/50">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Office</h4>
                                        <p className="text-muted-foreground text-sm">123 AI Boulevard</p>
                                        <p className="text-muted-foreground text-sm">San Francisco, CA 94103</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <Card className="border-border/50 shadow-xl bg-background/50 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First Name</Label>
                                            <Input id="first-name" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last Name</Label>
                                            <Input id="last-name" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="How can we help?" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us more about your inquiry..."
                                            className="min-h-[150px]"
                                        />
                                    </div>

                                    <Button className="w-full" size="lg">
                                        <Send className="w-4 h-4 mr-2" /> Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
